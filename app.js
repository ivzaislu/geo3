// --- Data ---
const CAPITALS_GERMANY = {
  "Baden-Württemberg": "Stuttgart",
  "Bayern": "München",
  "Berlin": "Berlin",
  "Brandenburg": "Potsdam",
  "Bremen": "Bremen",
  "Hamburg": "Hamburg",
  "Hessen": "Wiesbaden",
  "Mecklenburg-Vorpommern": "Schwerin",
  "Niedersachsen": "Hannover",
  "Nordrhein-Westfalen": "Düsseldorf",
  "Rheinland-Pfalz": "Mainz",
  "Saarland": "Saarbrücken",
  "Sachsen": "Dresden",
  "Sachsen-Anhalt": "Magdeburg",
  "Schleswig-Holstein": "Kiel",
  "Thüringen": "Erfurt"
};

const EUROPE_DATA = {
  "Albania": { name: "Albanien", capital: "Tirana" },
  "Andorra": { name: "Andorra", capital: "Andorra la Vella" },
  "Armenia": { name: "Armenien", capital: "Jerewan" },
  "Austria": { name: "Österreich", capital: "Wien" },
  "Azerbaijan": { name: "Aserbaidschan", capital: "Baku" },
  "Belarus": { name: "Belarus", capital: "Minsk" },
  "Belgium": { name: "Belgien", capital: "Brüssel" },
  "Bosnia and Herzegovina": { name: "Bosnien und Herzegowina", capital: "Sarajevo" },
  "Bulgaria": { name: "Bulgarien", capital: "Sofia" },
  "Croatia": { name: "Kroatien", capital: "Zagreb" },
  "Cyprus": { name: "Zypern", capital: "Nikosia" },
  "Czech Republic": { name: "Tschechien", capital: "Prag" },
  "Denmark": { name: "Dänemark", capital: "Kopenhagen" },
  "Estonia": { name: "Estland", capital: "Tallinn" },
  "Faroe Islands": { name: "Färöer", capital: "Tórshavn" },
  "Finland": { name: "Finnland", capital: "Helsinki" },
  "France": { name: "Frankreich", capital: "Paris" },
  "Georgia": { name: "Georgien", capital: "Tiflis" },
  "Germany": { name: "Deutschland", capital: "Berlin" },
  "Greece": { name: "Griechenland", capital: "Athen" },
  "Holy See (Vatican City)": { name: "Vatikanstadt", capital: "Vatikanstadt" },
  "Hungary": { name: "Ungarn", capital: "Budapest" },
  "Iceland": { name: "Island", capital: "Reykjavík" },
  "Ireland": { name: "Irland", capital: "Dublin" },
  "Israel": { name: "Israel", capital: "Jerusalem" },
  "Italy": { name: "Italien", capital: "Rom" },
  "Latvia": { name: "Lettland", capital: "Riga" },
  "Liechtenstein": { name: "Liechtenstein", capital: "Vaduz" },
  "Lithuania": { name: "Litauen", capital: "Vilnius" },
  "Luxembourg": { name: "Luxemburg", capital: "Luxemburg" },
  "Malta": { name: "Malta", capital: "Valletta" },
  "Monaco": { name: "Monaco", capital: "Monaco" },
  "Montenegro": { name: "Montenegro", capital: "Podgorica" },
  "Netherlands": { name: "Niederlande", capital: "Amsterdam" },
  "Norway": { name: "Norwegen", capital: "Oslo" },
  "Poland": { name: "Polen", capital: "Warschau" },
  "Portugal": { name: "Portugal", capital: "Lissabon" },
  "Republic of Moldova": { name: "Republik Moldau", capital: "Chișinău" },
  "Romania": { name: "Rumänien", capital: "Bukarest" },
  "Russia": { name: "Russland", capital: "Moskau" },
  "San Marino": { name: "San Marino", capital: "San Marino" },
  "Serbia": { name: "Serbien", capital: "Belgrad" },
  "Slovakia": { name: "Slowakei", capital: "Bratislava" },
  "Slovenia": { name: "Slowenien", capital: "Ljubljana" },
  "Spain": { name: "Spanien", capital: "Madrid" },
  "Sweden": { name: "Schweden", capital: "Stockholm" },
  "Switzerland": { name: "Schweiz", capital: "Bern" },
  "The former Yugoslav Republic of Macedonia": { name: "Nordmazedonien", capital: "Skopje" },
  "Turkey": { name: "Türkei", capital: "Ankara" },
  "Ukraine": { name: "Ukraine", capital: "Kyjiw" },
  "United Kingdom": { name: "Vereinigtes Königreich", capital: "London" }
};

const AFRICA_DATA = {
  "Algeria": { name: "Algerien", capital: "Algier" },
  "Angola": { name: "Angola", capital: "Luanda" },
  "Benin": { name: "Benin", capital: "Porto-Novo" },
  "Botswana": { name: "Botswana", capital: "Gaborone" },
  "Burkina Faso": { name: "Burkina Faso", capital: "Ouagadougou" },
  "Burundi": { name: "Burundi", capital: "Gitega" },
  "Cabo Verde": { name: "Kap Verde", capital: "Praia" },
  "Cameroon": { name: "Kamerun", capital: "Jaunde" },
  "Central African Republic": { name: "Zentralafrikanische Republik", capital: "Bangui" },
  "Chad": { name: "Tschad", capital: "N'Djamena" },
  "Comoros": { name: "Komoren", capital: "Moroni" },
  "Democratic Republic of the Congo": { name: "Demokratische Republik Kongo", capital: "Kinshasa" },
  "Republic of the Congo": { name: "Republik Kongo", capital: "Brazzaville" },
  "Djibouti": { name: "Dschibuti", capital: "Dschibuti" },
  "Egypt": { name: "Ägypten", capital: "Kairo" },
  "Equatorial Guinea": { name: "Äquatorialguinea", capital: "Malabo" },
  "Eritrea": { name: "Eritrea", capital: "Asmara" },
  "Eswatini": { name: "Eswatini", capital: "Mbabane" },
  "Ethiopia": { name: "Äthiopien", capital: "Addis Abeba" },
  "Gabon": { name: "Gabun", capital: "Libreville" },
  "Gambia": { name: "Gambia", capital: "Banjul" },
  "Ghana": { name: "Ghana", capital: "Accra" },
  "Guinea": { name: "Guinea", capital: "Conakry" },
  "Guinea-Bissau": { name: "Guinea-Bissau", capital: "Bissau" },
  "Côte d'Ivoire": { name: "Elfenbeinküste", capital: "Yamoussoukro" },
  "Kenya": { name: "Kenia", capital: "Nairobi" },
  "Lesotho": { name: "Lesotho", capital: "Maseru" },
  "Liberia": { name: "Liberia", capital: "Monrovia" },
  "Libya": { name: "Libyen", capital: "Tripolis" },
  "Madagascar": { name: "Madagaskar", capital: "Antananarivo" },
  "Malawi": { name: "Malawi", capital: "Lilongwe" },
  "Mali": { name: "Mali", capital: "Bamako" },
  "Mauritania": { name: "Mauretanien", capital: "Nouakchott" },
  "Mauritius": { name: "Mauritius", capital: "Port Louis" },
  "Morocco": { name: "Marokko", capital: "Rabat" },
  "Mozambique": { name: "Mosambik", capital: "Maputo" },
  "Namibia": { name: "Namibia", capital: "Windhoek" },
  "Niger": { name: "Niger", capital: "Niamey" },
  "Nigeria": { name: "Nigeria", capital: "Abuja" },
  "Rwanda": { name: "Ruanda", capital: "Kigali" },
  "Sao Tome and Principe": { name: "São Tomé und Príncipe", capital: "São Tomé" },
  "Senegal": { name: "Senegal", capital: "Dakar" },
  "Seychelles": { name: "Seychellen", capital: "Victoria" },
  "Sierra Leone": { name: "Sierra Leone", capital: "Freetown" },
  "Somalia": { name: "Somalia", capital: "Mogadischu" },
  "South Africa": { name: "Südafrika", capital: "Pretoria" },
  "South Sudan": { name: "Südsudan", capital: "Juba" },
  "Sudan": { name: "Sudan", capital: "Khartum" },
  "Tanzania": { name: "Tansania", capital: "Dodoma" },
  "Togo": { name: "Togo", capital: "Lomé" },
  "Tunisia": { name: "Tunesien", capital: "Tunis" },
  "Uganda": { name: "Uganda", capital: "Kampala" },
  "Zambia": { name: "Sambia", capital: "Lusaka" },
  "Zimbabwe": { name: "Simbabwe", capital: "Harare" },
  "Western Sahara": { name: "Westsahara", capital: "El Aaiún" }
};

const EUROPE_NAME_BY_GEO = Object.fromEntries(
  Object.entries(EUROPE_DATA).map(([key, value]) => [key, value.name])
);

const CAPITALS_EUROPE = Object.fromEntries(
  Object.values(EUROPE_DATA).map(({ name, capital }) => [name, capital])
);

const AFRICA_NAME_BY_GEO = Object.fromEntries(
  Object.entries(AFRICA_DATA).map(([key, value]) => [key, value.name])
);

const CAPITALS_AFRICA = Object.fromEntries(
  Object.values(AFRICA_DATA).map(({ name, capital }) => [name, capital])
);

const AFRICA_ALIASES = {
  "Congo": "Republic of the Congo",
  "Congo Republic": "Republic of the Congo",
  "Republic of Congo": "Republic of the Congo",
  "Congo (Brazzaville)": "Republic of the Congo",
  "Congo, Rep.": "Republic of the Congo",
  "Democratic Republic of Congo": "Democratic Republic of the Congo",
  "Congo, Dem. Rep.": "Democratic Republic of the Congo",
  "Congo, Democratic Republic of the": "Democratic Republic of the Congo",
  "Congo (Kinshasa)": "Democratic Republic of the Congo",
  "Ivory Coast": "Côte d'Ivoire",
  "Cote d'Ivoire": "Côte d'Ivoire",
  "Côte d’Ivoire": "Côte d'Ivoire",
  "Cabo Verde": "Cabo Verde",
  "Cape Verde": "Cabo Verde",
  "Swaziland": "Eswatini",
  "Gambia, The": "Gambia",
  "The Gambia": "Gambia",
  "São Tomé and Príncipe": "Sao Tome and Principe",
  "Sao Tome & Principe": "Sao Tome and Principe",
  "Sao Tome and Principe": "Sao Tome and Principe",
  "United Republic of Tanzania": "Tanzania",
  "Tanzania, United Republic of": "Tanzania",
  "Eswatini (Swaziland)": "Eswatini"
};

function getEuropeRawName(feature) {
  return feature?.properties?.NAME || feature?.properties?.name || feature?.properties?.ADMIN || '—';
}

function getAfricaRawName(feature) {
  return feature?.properties?.NAME || feature?.properties?.name || feature?.properties?.ADMIN || '—';
}

const MODES = {
  germany: {
    key: 'germany',
    flag: '🇩🇪',
    label: 'Deutschland',
    item: 'Bundesland',
    itemPlural: 'Bundesländer',
    geojson: './bundeslaender.geojson',
    capitals: CAPITALS_GERMANY,
    getName: (feature) => feature?.properties?.NAME_1 || feature?.properties?.name || feature?.properties?.NAME || '—'
  },
  europe: {
    key: 'europe',
    flag: '🇪🇺',
    label: 'Europa',
    item: 'Land',
    itemPlural: 'Länder',
    geojson: './europe.geojson',
    capitals: CAPITALS_EUROPE,
    getName: (feature) => {
      const raw = getEuropeRawName(feature);
      return EUROPE_NAME_BY_GEO[raw] || raw || '—';
    }
  },
  africa: {
    key: 'africa',
    flag: '🌍',
    label: 'Afrika',
    item: 'Land',
    itemPlural: 'Länder',
    geojson: './africa.json',
    capitals: CAPITALS_AFRICA,
    getName: (feature) => {
      const raw = getAfricaRawName(feature);
      const canonical = AFRICA_ALIASES[raw] || raw;
      return AFRICA_NAME_BY_GEO[canonical] || AFRICA_NAME_BY_GEO[raw] || raw || '—';
    }
  }
};

const initialMode = document.body?.dataset?.mode || 'germany';
let currentMode = MODES[initialMode] ? initialMode : 'germany';
let currentConfig = MODES[currentMode];
let currentCapitals = currentConfig.capitals;
let STATES = Object.keys(currentCapitals);

// --- UI refs ---
const appTitle = document.getElementById('appTitle');
const tabLearn = document.getElementById('tabLearn');
const tabQuiz = document.getElementById('tabQuiz');
const learnSection = document.getElementById('learnSection');
const quizSection = document.getElementById('quizSection');

const playerInput = document.getElementById('playerName');
const savePlayerBtn = document.getElementById('savePlayerBtn');

const learnTitleEl = document.getElementById('learnTitle');
const learnStateLabel = document.getElementById('learnStateLabel');
const learnStateEl = document.getElementById('learnState');
const learnCapitalEl = document.getElementById('learnCapital');
const flashHint = document.getElementById('flashHint');
const flashQuestion = document.getElementById('flashQuestion');
const flashAnswer = document.getElementById('flashAnswer');
const flipCardBtn = document.getElementById('flipCardBtn');
const randomLearnBtn = document.getElementById('randomLearnBtn');
const tourToggleBtn = document.getElementById('tourToggleBtn');
const showCapitalsLearn = document.getElementById('showCapitalsLearn');
const factsTitle = document.getElementById('factsTitle');
const factsBox = document.getElementById('factsBox');

const quizTaskEl = document.getElementById('quizTask');
const quizStatusEl = document.getElementById('quizStatus');
const quizDifficulty = document.getElementById('quizDifficulty');
const quizModeSel = document.getElementById('quizMode');
const quizModeStateOpt = document.getElementById('quizModeState');
const quizModeCapitalOpt = document.getElementById('quizModeCapital');
const quizModeMixedOpt = document.getElementById('quizModeMixed');
const nextQuizBtn = document.getElementById('nextQuizBtn');
const hintQuizBtn = document.getElementById('hintQuizBtn');
const resetQuizBtn = document.getElementById('resetQuizBtn');
const quizPointsEl = document.getElementById('quizPoints');
const quizStreakEl = document.getElementById('quizStreak');
const quizHighEl = document.getElementById('quizHigh');
const stAvgTimeEl = document.getElementById('stAvgTime');

const stQuestionsEl = document.getElementById('stQuestions');
const stAccuracyEl = document.getElementById('stAccuracy');
const stRFEl = document.getElementById('stRF');
const stBestStreakEl = document.getElementById('stBestStreak');

const timerWrap = document.getElementById('timerWrap');
const timerBar = document.getElementById('timerBar');
const choicesWrap = document.getElementById('choices');

function sanitizeName(name) {
  const n = (name || '').trim().slice(0, 24);
  return n || 'Gast';
}

function isLearnActive() { return tabLearn.classList.contains('active'); }

function setTab(which) {
  const learn = which === 'learn';
  tabLearn.classList.toggle('active', learn);
  tabQuiz.classList.toggle('active', !learn);
  learnSection.style.display = learn ? 'block' : 'none';
  quizSection.style.display = learn ? 'none' : 'block';
  if (!learn) stopTour();
  if (learn) stopTimer();
  applyTooltipMode();
}

tabLearn.addEventListener('click', () => setTab('learn'));
tabQuiz.addEventListener('click', () => setTab('quiz'));

function getModeLabels() {
  return {
    flag: currentConfig.flag,
    label: currentConfig.label,
    item: currentConfig.item,
    itemPlural: currentConfig.itemPlural,
    capital: 'Hauptstadt'
  };
}

function applyModeLabels() {
  const labels = getModeLabels();
  appTitle.textContent = `${labels.flag} ${labels.label} – ${labels.itemPlural} (Lernen & Quiz)`;
  factsTitle.textContent = `📏 Größte & kleinste ${labels.itemPlural}`;
  learnStateLabel.textContent = labels.item;
  randomLearnBtn.textContent = labels.item === 'Land' ? 'Zufallsland' : `Zufalls-${labels.item}`;
  quizModeStateOpt.textContent = labels.item;
  quizModeCapitalOpt.textContent = labels.capital;
  quizModeMixedOpt.textContent = 'Gemischt (2–4x)';
}

// --- API (stats.json via server.py) ---
function defaultStats(stateNames) {
  const per = {};
  for (const s of stateNames) per[s] = { right: 0, wrong: 0 };
  return {
    questions: 0, right: 0, wrong: 0,
    bestStreak: 0, highscore: 0,
    hardTimesMs: [],
    perState: per
  };
}

let currentPlayer = 'Gast';
let stats = defaultStats(STATES);

async function apiGetPlayer(name, modeKey) {
  const qs = new URLSearchParams({
    name,
    mode: modeKey,
    states: STATES.join(',')
  });
  const r = await fetch('/api/player?' + qs.toString());
  if (!r.ok) throw new Error('API GET failed');
  return await r.json();
}

async function apiSavePlayer() {
  const payload = {
    name: currentPlayer,
    mode: currentMode,
    states: STATES,
    stats
  };
  const r = await fetch('/api/player', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!r.ok) throw new Error('API POST failed');
}

async function setPlayer(name) {
  currentPlayer = sanitizeName(name);
  playerInput.value = currentPlayer;
  const res = await apiGetPlayer(currentPlayer, currentMode);
  stats = res.stats || defaultStats(STATES);
  renderStatsPanel();
  refreshHighscoreUI();
  quizStatusEl.textContent = '👤 ' + currentPlayer;
}

savePlayerBtn.addEventListener('click', async () => {
  try { await setPlayer(playerInput.value); }
  catch (e) {
    alert('API nicht erreichbar. Starte: python server.py');
    console.error(e);
  }
});

// --- Learn logic ---
let currentLearnState = null;
let cardShown = false;

function setLearnInfo(name) {
  currentLearnState = name || null;
  cardShown = false;
  const labels = getModeLabels();

  if (!name) {
    learnTitleEl.textContent = `Klicke auf ein ${labels.item}`;
    learnStateEl.textContent = '—';
    learnCapitalEl.textContent = '—';
    flashHint.textContent = `Wähle ein ${labels.item} – dann decke die ${labels.capital} auf.`;
    flashQuestion.textContent = '—';
    flashAnswer.textContent = '—';
    flipCardBtn.disabled = true;
    flipCardBtn.textContent = 'Antwort aufdecken';
    return;
  }

  learnTitleEl.textContent = '📘 Lernen';
  learnStateEl.textContent = name;
  learnCapitalEl.textContent = currentCapitals[name] ?? '—';

  flashQuestion.textContent = `${labels.capital} von ${name}?`;
  flashAnswer.textContent = '???';
  flashHint.textContent = 'Versuch es zuerst im Kopf – dann „aufdecken“.';
  flipCardBtn.disabled = false;
  flipCardBtn.textContent = 'Antwort aufdecken';
}

flipCardBtn.addEventListener('click', () => {
  if (!currentLearnState) return;
  cardShown = !cardShown;
  flashAnswer.textContent = cardShown ? (currentCapitals[currentLearnState] ?? '—') : '???';
  flipCardBtn.textContent = cardShown ? 'Antwort verstecken' : 'Antwort aufdecken';
  flashHint.textContent = cardShown ? 'Merken! 😊' : 'Nochmal überlegen.';
});

randomLearnBtn.addEventListener('click', () => {
  const target = STATES[Math.floor(Math.random() * STATES.length)];
  setLearnInfo(target);
  flashByStateName(target);
});

let tourTimer = null;
let tourIndex = 0;

function stopTour() {
  if (tourTimer) clearInterval(tourTimer);
  tourTimer = null;
  tourToggleBtn.textContent = 'Auto-Tour: Start';
}

function startTour() {
  stopTour();
  tourIndex = 0;
  tourToggleBtn.textContent = 'Auto-Tour: Stop';
  tourTimer = setInterval(() => {
    const target = STATES[tourIndex % STATES.length];
    tourIndex++;
    setLearnInfo(target);
    flashByStateName(target);
  }, 1500);
}

tourToggleBtn.addEventListener('click', () => {
  if (tourTimer) stopTour();
  else startTour();
});

// --- Quiz logic ---
let quizTargetState = null;
let quizTargetCapital = null;
let quizPoints = 0;
let quizStreak = 0;
let quizHintsUsed = 0;

// Mixed mode controller (2..4)
let mixedCurrent = 'state';
let mixedRemaining = 0;
function rollMixedCount() { return 2 + Math.floor(Math.random() * 3); }
function nextMixedMode() {
  if (mixedRemaining <= 0) {
    mixedCurrent = (mixedCurrent === 'state') ? 'capital' : 'state';
    mixedRemaining = rollMixedCount();
  }
  const m = mixedCurrent;
  mixedRemaining -= 1;
  return m;
}

// Hard mode
let hardOptionSelected = null;
let timeLimitMs = 12000;
let timerStart = 0;
let timerId = null;

function stopTimer() {
  if (timerId) cancelAnimationFrame(timerId);
  timerId = null;
  timerWrap.style.display = 'none';
  timerBar.style.transform = 'scaleX(1)';
}

function startTimer() {
  timerStart = performance.now();
  timerWrap.style.display = 'block';

  const tick = () => {
    const left = Math.max(0, timeLimitMs - (performance.now() - timerStart));
    timerBar.style.transform = `scaleX(${left / timeLimitMs})`;

    if (left <= 0) {
      recordAnswer(false, quizTargetState, 'hard', timeLimitMs);
      quizStreak = 0;
      quizPoints = Math.max(0, quizPoints - 1);
      quizStatusEl.textContent = '⏱️ Zeit abgelaufen! −1';
      setQuizScoreUI();
      hardOptionSelected = null;
      buildHardChoices();
      newQuizQuestion();
      return;
    }
    timerId = requestAnimationFrame(tick);
  };
  timerId = requestAnimationFrame(tick);
}

function scoreGainByDifficulty() {
  const d = quizDifficulty.value;
  if (d === 'easy') return 2;
  if (d === 'medium') return 3;
  return 5;
}

function speedBonus() {
  if (quizDifficulty.value !== 'hard') return 0;
  const elapsed = performance.now() - timerStart;
  const left = Math.max(0, timeLimitMs - elapsed);
  return left > 8000 ? 2 : (left > 4000 ? 1 : 0);
}

function buildHardChoices() {
  const correct = quizTargetState || STATES[Math.floor(Math.random() * STATES.length)];
  const distractors = shuffle(STATES.filter(s => s !== correct)).slice(0, 3);
  const options = shuffle([correct, ...distractors]);

  choicesWrap.innerHTML = '';
  choicesWrap.style.display = 'grid';

  for (const opt of options) {
    const btn = document.createElement('button');
    btn.className = 'choiceBtn';
    btn.type = 'button';
    btn.textContent = opt + ' — ' + (currentCapitals[opt] ?? '—');
    btn.onclick = () => {
      [...choicesWrap.querySelectorAll('button')].forEach(b => b.style.background = '#fff');
      btn.style.background = '#f3f4f6';
      hardOptionSelected = opt;
      quizStatusEl.textContent = '✅ Option gewählt. Jetzt auf der Karte klicken!';
    };
    choicesWrap.appendChild(btn);
  }
}

function getEffectiveMode() {
  const mode = quizModeSel.value;
  if (mode === 'mixed') return nextMixedMode();
  return mode; // state|capital
}

function newQuizQuestion() {
  quizHintsUsed = 0;
  quizStatusEl.textContent = '👤 ' + currentPlayer;
  hardOptionSelected = null;

  const labels = getModeLabels();
  const d = quizDifficulty.value;
  const effMode = getEffectiveMode();

  quizTargetState = STATES[Math.floor(Math.random() * STATES.length)];
  quizTargetCapital = currentCapitals[quizTargetState];

  if (d === 'hard') {
    quizTaskEl.textContent = `🧠 Wähle die richtige Option – dann klicke das ${labels.item} an`;
    buildHardChoices();
    startTimer();
    return;
  }

  stopTimer();
  choicesWrap.style.display = 'none';

  if (effMode === 'state') quizTaskEl.textContent = '🎯 Finde: ' + quizTargetState;
  else quizTaskEl.textContent = `🏙️ ${labels.capital}: ` + quizTargetCapital;
}

function quizReward(ok) {
  if (ok) {
    quizStreak++;
    const base = scoreGainByDifficulty();
    const bonus = speedBonus();
    const penalty = Math.min(2, quizHintsUsed);
    const gain = Math.max(1, base + bonus - penalty);
    quizPoints += gain;
    quizStatusEl.textContent = `✅ Richtig! +${gain}`;
  } else {
    quizStreak = 0;
    quizPoints = Math.max(0, quizPoints - 1);
    quizStatusEl.textContent = '❌ Falsch! −1';
  }
  setQuizScoreUI();
}

nextQuizBtn.addEventListener('click', newQuizQuestion);

hintQuizBtn.addEventListener('click', () => {
  quizHintsUsed++;
  quizPoints = Math.max(0, quizPoints - 1);
  setQuizScoreUI();
  quizStatusEl.textContent = '💡 Tipp: Richtige Region blinkt (−1)';
  flashByStateName(quizTargetState);
});

resetQuizBtn.addEventListener('click', () => {
  quizPoints = 0;
  quizStreak = 0;
  quizHintsUsed = 0;
  setQuizScoreUI();
  quizStatusEl.textContent = 'Zurückgesetzt.';
  stopTimer();
  mixedRemaining = 0;
  newQuizQuestion();
});

quizDifficulty.addEventListener('change', () => {
  stopTimer();
  newQuizQuestion();
});

quizModeSel.addEventListener('change', () => {
  mixedRemaining = 0;
  newQuizQuestion();
});

function refreshHighscoreUI() {
  quizHighEl.textContent = String(stats.highscore || 0);
}

function setQuizScoreUI() {
  quizPointsEl.textContent = String(quizPoints);
  quizStreakEl.textContent = String(quizStreak);

  if (quizPoints > (stats.highscore || 0)) {
    stats.highscore = quizPoints;
    refreshHighscoreUI();
    apiSavePlayer().catch(console.error);
  }
}

function renderStatsPanel() {
  const q = stats.questions || 0;
  const r = stats.right || 0;
  const w = stats.wrong || 0;
  const acc = q ? Math.round((r / q) * 100) : 0;

  stQuestionsEl.textContent = String(q);
  stAccuracyEl.textContent = acc + '%';
  stRFEl.textContent = `${r} / ${w}`;
  stBestStreakEl.textContent = String(stats.bestStreak || 0);

  const times = Array.isArray(stats.hardTimesMs) ? stats.hardTimesMs : [];
  if (times.length) {
    const avg = times.reduce((a,b)=>a+b,0) / times.length;
    stAvgTimeEl.textContent = (avg/1000).toFixed(1) + 's';
  } else {
    stAvgTimeEl.textContent = '—';
  }
}

function recordAnswer(ok, stateName, difficulty, timeMs) {
  stats.questions = (stats.questions || 0) + 1;
  stats.right = (stats.right || 0) + (ok ? 1 : 0);
  stats.wrong = (stats.wrong || 0) + (ok ? 0 : 1);

  stats.perState = stats.perState || {};
  for (const s of STATES) stats.perState[s] = stats.perState[s] || { right: 0, wrong: 0 };
  if (stateName && stats.perState[stateName]) {
    if (ok) stats.perState[stateName].right += 1;
    else stats.perState[stateName].wrong += 1;
  }

  stats.bestStreak = Math.max(stats.bestStreak || 0, quizStreak);

  if (difficulty === 'hard' && ok && typeof timeMs === 'number') {
    stats.hardTimesMs = Array.isArray(stats.hardTimesMs) ? stats.hardTimesMs : [];
    stats.hardTimesMs.push(Math.floor(timeMs));
    if (stats.hardTimesMs.length > 200) stats.hardTimesMs = stats.hardTimesMs.slice(-200);
  }

  renderStatsPanel();
  apiSavePlayer().catch(console.error);
}

// --- Tooltip control (FIX: absolutely no tooltip in Quiz) ---
function enableLearnTooltips() {
  if (!geoLayer) return;
  geoLayer.eachLayer(l => {
    if (!l._ttHtml) return;
    if (!l.getTooltip()) {
      l.bindTooltip(l._ttHtml, { sticky: true });
    }
  });
}

function disableAllTooltips() {
  if (!geoLayer) return;
  geoLayer.eachLayer(l => {
    if (l.getTooltip()) l.unbindTooltip();
    l.closeTooltip();
  });
}

function applyTooltipMode() {
  // Only Learning + checkbox => tooltips.
  if (isLearnActive() && showCapitalsLearn.checked) {
    enableLearnTooltips();
  } else {
    disableAllTooltips();
  }
}

showCapitalsLearn.addEventListener('change', applyTooltipMode);

// --- Map setup (no base layer) ---
const map = L.map('map', {
  zoomControl: true,
  scrollWheelZoom: true,
  dragging: true,
  doubleClickZoom: true,
  boxZoom: true,
  keyboard: true,
  touchZoom: true,
  attributionControl: false
});

const styleDefault = { weight: 1.6, color: '#111827', fillOpacity: 0.32, fillColor: '#93c5fd' };
let geoLayer = null;
const layerByName = new Map();

function flashLayer(layer, opts) {
  layer.setStyle(opts);
  setTimeout(() => geoLayer && geoLayer.resetStyle(layer), 650);
}

function flashByStateName(name) {
  const layer = layerByName.get(name);
  if (!layer) return;
  flashLayer(layer, { weight: 3.8, color: '#0f172a', fillOpacity: 0.75 });
}

// --- Area calc (for biggest/smallest) ---
function ringAreaMeters2(ring) {
  const R = 6378137;
  if (!ring || ring.length < 3) return 0;
  const pts = (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ? ring : [...ring, ring[0]];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const lon1 = pts[i][0] * Math.PI / 180;
    const lat1 = pts[i][1] * Math.PI / 180;
    const lon2 = pts[i + 1][0] * Math.PI / 180;
    const lat2 = pts[i + 1][1] * Math.PI / 180;
    total += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2));
  }
  return Math.abs(total) * (R * R / 2);
}

function polygonAreaMeters2(coords) {
  if (!coords || coords.length === 0) return 0;
  const outer = ringAreaMeters2(coords[0]);
  let holes = 0;
  for (let i = 1; i < coords.length; i++) holes += ringAreaMeters2(coords[i]);
  return Math.max(0, outer - holes);
}

function featureAreaMeters2(feature) {
  const g = feature?.geometry;
  if (!g) return 0;
  if (g.type === 'Polygon') return polygonAreaMeters2(g.coordinates);
  if (g.type === 'MultiPolygon') {
    let sum = 0;
    for (const poly of g.coordinates) sum += polygonAreaMeters2(poly);
    return sum;
  }
  return 0;
}

function formatKm2(m2) {
  const km2 = m2 / 1e6;
  return km2.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + ' km²';
}

function renderFacts(sortedAreas) {
  const top = sortedAreas.slice(0, 3);
  const bottom = sortedAreas.slice(-3).reverse();

  const makeRow = (rankLabel, item) => {
    const row = document.createElement('div');
    row.className = 'factRow';

    const left = document.createElement('div');
    left.className = 'left';
    const b = document.createElement('b');
    b.textContent = item.name;
    const s = document.createElement('span');
    s.textContent = formatKm2(item.areaM2);
    left.appendChild(b);
    left.appendChild(s);

    const right = document.createElement('div');
    right.className = 'right';
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = rankLabel;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Zeigen';
    btn.onclick = () => flashByStateName(item.name);
    right.appendChild(badge);
    right.appendChild(btn);

    row.appendChild(left);
    row.appendChild(right);
    return row;
  };

  factsBox.innerHTML = '';
  factsBox.appendChild(makeRow('Größte #1', top[0]));
  factsBox.appendChild(makeRow('Größte #2', top[1]));
  factsBox.appendChild(makeRow('Größte #3', top[2]));

  const sep = document.createElement('div');
  sep.className = 'divider';
  factsBox.appendChild(sep);

  factsBox.appendChild(makeRow('Kleinste #1', bottom[0]));
  factsBox.appendChild(makeRow('Kleinste #2', bottom[1]));
  factsBox.appendChild(makeRow('Kleinste #3', bottom[2]));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLandName(feature) {
  return currentConfig.getName(feature);
}

async function loadGeoData() {
  factsBox.innerHTML = '<div class="muted">Lade…</div>';
  if (geoLayer) {
    geoLayer.remove();
    geoLayer = null;
    layerByName.clear();
  }

  const response = await fetch(currentConfig.geojson);
  if (!response.ok) {
    throw new Error(`Konnte ${currentConfig.geojson} nicht laden.`);
  }
  const data = await response.json();

  // facts
  const areas = [];
  for (const f of (data.features || [])) {
    const name = getLandName(f);
    const areaM2 = featureAreaMeters2(f);
    if (name && areaM2 > 0) areas.push({ name, areaM2 });
  }
  areas.sort((a,b)=>b.areaM2-a.areaM2);
  if (areas.length >= 6) renderFacts(areas);
  else factsBox.innerHTML = '<div class="muted">Zu wenige Daten für Flächen-Ranking.</div>';

  geoLayer = L.geoJSON(data, {
    style: () => styleDefault,
    onEachFeature: (feature, layer) => {
      const name = getLandName(feature);
      const cap = currentCapitals[name] ?? feature?.properties?.capital ?? '—';

      layerByName.set(name, layer);

      // store tooltip html, but do NOT bind now
      layer._ttHtml = `<b>${name}</b><br/>Hauptstadt: ${cap}`;

      layer.on('mouseover', () => {
        layer.setStyle({ weight: 2.4, color: '#111827', fillOpacity: 0.45 });
        // Tooltips are controlled globally via applyTooltipMode(); nothing to do here.
      });

      layer.on('mouseout', () => {
        if (geoLayer) geoLayer.resetStyle(layer);
      });

      layer.on('click', () => {
        if (isLearnActive()) {
          setLearnInfo(name);
          flashLayer(layer, { weight: 3.8, color: '#0f172a', fillOpacity: 0.75 });
          return;
        }

        // quiz
        const d = quizDifficulty.value;
        let ok = false;

        if (d === 'hard') {
          if (!hardOptionSelected) {
            quizStatusEl.textContent = '⚠️ Erst eine Option auswählen!';
            return;
          }
          ok = (name === hardOptionSelected) && (hardOptionSelected === quizTargetState);
        } else {
          // For state/capital/mixed in non-hard: user always clicks the state.
          ok = (name === quizTargetState);
        }

        const timeMs = (d === 'hard') ? (performance.now() - timerStart) : null;

        if (ok) {
          flashLayer(layer, { weight: 3.8, color: '#0f172a', fillOpacity: 0.75 });
          quizReward(true);
          stopTimer();
          recordAnswer(true, quizTargetState, d, timeMs);
          setTimeout(newQuizQuestion, 900);
        } else {
          flashLayer(layer, { weight: 3.8, color: '#0f172a', fillOpacity: 0.12 });
          quizReward(false);
          recordAnswer(false, quizTargetState, d, timeMs);
        }
      });
    }
  }).addTo(map);

  map.fitBounds(geoLayer.getBounds(), { padding: [28, 28] });
  applyTooltipMode();
}

async function initApp() {
  applyModeLabels();
  await loadGeoData();
  await setPlayer(playerInput.value);

  setLearnInfo(null);
  refreshHighscoreUI();
  setQuizScoreUI();
  renderStatsPanel();
  mixedRemaining = 0;
  newQuizQuestion();
}

initApp().catch(err => {
  console.error(err);
  alert('Fehler: ' + err.message + '\n\nStarte: python server.py');
});
