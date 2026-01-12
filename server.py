#!/usr/bin/env python3
import json
import os
import tempfile
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

DATA_FILE = "stats.json"

# ThreadingHTTPServer handles requests concurrently.
# Without a lock, multiple POSTs can race on the same tmp filename.
DB_LOCK = threading.Lock()


def _data_paths():
    """Return (base_dir, final_path) for the stats file."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    final_path = os.path.join(base_dir, DATA_FILE)
    return base_dir, final_path


def load_db():
    _, final_path = _data_paths()
    with DB_LOCK:
        if not os.path.exists(final_path):
            return {"players": {}}
        try:
            with open(final_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {"players": {}}


def save_db(db):
    base_dir, final_path = _data_paths()
    # Atomic write with a unique tmp file + lock to avoid concurrent replace races.
    with DB_LOCK:
        fd, tmp_path = tempfile.mkstemp(prefix="stats_", suffix=".tmp", dir=base_dir)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as f:
                json.dump(db, f, ensure_ascii=False, indent=2)
            os.replace(tmp_path, final_path)
        finally:
            # If something failed before replace, clean up the tmp file.
            if os.path.exists(tmp_path):
                try:
                    os.remove(tmp_path)
                except Exception:
                    pass


def default_stats(state_names):
    per = {s: {"right": 0, "wrong": 0} for s in state_names}
    return {
        "questions": 0,
        "right": 0,
        "wrong": 0,
        "bestStreak": 0,
        "highscore": 0,
        "hardTimesMs": [],
        "perState": per,
    }


class Handler(SimpleHTTPRequestHandler):
    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length) if length > 0 else b"{}"
        try:
            return json.loads(raw.decode("utf-8"))
        except Exception:
            return None

    def send_json(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.startswith("/api/player"):
            from urllib.parse import urlparse, parse_qs

            q = parse_qs(urlparse(self.path).query)
            name = (q.get("name", ["Gast"])[0] or "Gast").strip()[:24]
            states_csv = q.get("states", [""])[0]
            state_names = [s.strip() for s in states_csv.split(",") if s.strip()]

            db = load_db()
            players = db.setdefault("players", {})

            if name not in players:
                players[name] = default_stats(state_names)
                save_db(db)
            else:
                st = players[name]
                st.setdefault("questions", 0)
                st.setdefault("right", 0)
                st.setdefault("wrong", 0)
                st.setdefault("bestStreak", 0)
                st.setdefault("highscore", 0)
                st.setdefault("hardTimesMs", [])
                st.setdefault("perState", {})
                for s in state_names:
                    st["perState"].setdefault(s, {"right": 0, "wrong": 0})
                save_db(db)

            self.send_json({"name": name, "stats": players[name]})
            return

        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/player":
            payload = self.read_json()
            if not payload:
                self.send_json({"error": "Invalid JSON"}, status=400)
                return

            name = (payload.get("name") or "Gast").strip()[:24]
            stats = payload.get("stats")
            state_names = payload.get("states") or []

            if not isinstance(stats, dict):
                self.send_json({"error": "Missing stats"}, status=400)
                return

            db = load_db()
            players = db.setdefault("players", {})
            st = players.get(name) or default_stats(state_names)

            # scalar fields
            for k in ["questions", "right", "wrong", "bestStreak", "highscore"]:
                try:
                    st[k] = int(stats.get(k, st.get(k, 0)) or 0)
                except Exception:
                    st[k] = int(st.get(k, 0) or 0)

            # hard times
            hard_times = stats.get("hardTimesMs", st.get("hardTimesMs", []))
            if isinstance(hard_times, list):
                cleaned = []
                for x in hard_times[-200:]:
                    try:
                        cleaned.append(int(x))
                    except Exception:
                        pass
                st["hardTimesMs"] = cleaned

            # perState
            st.setdefault("perState", {})
            per = stats.get("perState", {})
            if isinstance(per, dict):
                for s in state_names:
                    v = per.get(s, st["perState"].get(s, {"right": 0, "wrong": 0}))
                    if not isinstance(v, dict):
                        v = {"right": 0, "wrong": 0}
                    st["perState"][s] = {
                        "right": int(v.get("right", 0) or 0),
                        "wrong": int(v.get("wrong", 0) or 0),
                    }

            players[name] = st
            save_db(db)
            self.send_json({"ok": True})
            return

        self.send_json({"error": "Not found"}, status=404)


def main():
    port = int(os.environ.get("PORT", "8000"))
    httpd = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"Serving on http://localhost:{port}")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
