// ── TRANSLATIONS ──────────────────────────────────────────
const i18n = {
  it: {
    nav_features:     'Caratteristiche',
    nav_how:          'Come funziona',
    nav_specs:        'Requisiti',
    nav_download:     'Download',
    nav_build:        'Build',
    nav_preview:      'Anteprima',
    hero_tag:         'Braccio robotico · MediaPipe · Arduino',
    hero_h1:          'Controlla il futuro<br>con le <span class="gradient">tue mani</span>',
    hero_sub:         'GestureLink trasforma i movimenti della tua mano in comandi precisi per il tuo braccio robotico. Nessun controller. Nessun ritardo. Solo tu e la macchina.',
    hero_btn_download:'Scarica ora',
    hero_btn_how:     'Come funziona →',
    feat_label:       '// Caratteristiche',
    feat_title:       'Tutto quello che ti serve,<br>niente di superfluo.',
    f1_h: 'Tracking in tempo reale',
    f1_p: '21 landmark per mano rilevati a 30+ FPS tramite MediaPipe. Supporto fino a 2 mani simultanee con label Left/Right automatica.',
    f2_h: 'Controllo Arduino nativo',
    f2_p: 'Connessione seriale diretta al tuo microcontrollore. Porta COM e baud rate configurabili dalla UI, senza toccare il codice.',
    f3_h: 'Dual view',
    f3_p: 'Feed camera live con overlay MediaPipe da un lato, scheletro vettoriale pulito dall\'altro. Ogni dito colorato in modo univoco.',
    f4_h: 'App desktop nativa',
    f4_p: 'Costruita con PyQt5. Nessun server web, nessun browser. Un singolo file Python, zero dipendenze aggiuntive da configurare.',
    f5_h: 'Conteggio dita preciso',
    f5_p: 'Algoritmo basato su landmark normalizzati. Distingue pollice sinistro e destro sull\'asse X, tutte le altre dita sull\'asse Y.',
    f6_h: 'Invio delta-only',
    f6_p: 'Il valore viene inviato ad Arduino solo quando cambia. Nessuno spam sulla porta seriale, massima stabilità del collegamento.',
    how_label: '// Come funziona',
    how_title: 'Dal gesto al movimento<br>in quattro passi.',
    s1_h: 'Cattura',
    s1_p: 'La webcam acquisisce il frame. OpenCV lo ribalta orizzontalmente e lo converte in RGB per MediaPipe.',
    s2_h: 'Analisi',
    s2_p: 'MediaPipe individua 21 landmark 3D per ogni mano e calcola quali dita sono alzate o chiuse.',
    s3_h: 'Visualizzazione',
    s3_p: 'Lo scheletro viene ridisegnato in tempo reale nel canvas Qt con colori distinti per ogni dito.',
    s4_h: 'Comando',
    s4_p: 'Il conteggio totale delle dita viene inviato via seriale all\'Arduino, che comanda il braccio robotico.',
    spec_label: '// Requisiti di sistema',
    spec_title: 'Cosa ti serve per iniziare.',
    sp1_k: 'Sistema operativo',
    sp2_v: '3.8 o superiore',
    sp3_v: 'Qualsiasi USB/integrata',
    sp5_k: 'Arduino (opzionale)',
    sp5_v: 'Qualsiasi board seriale',
    sp7_k: 'RAM consigliata',
    dl_label:       '// Download',
    dl_title:       'Pronto a iniziare?',
    dl_version:     'Versione — coming soon',
    dl_sub:         'Il download sarà disponibile a breve. Lascia la tua email per essere notificato al lancio.',
    dl_placeholder: 'Download non ancora disponibile',
    dl_note:        'Richiede Python 3.8+ · pip install -r requirements.txt',
    req_arduino:    'Arduino opzionale',
    footer_built:   'Costruito con MediaPipe · PyQt5 · OpenCV · Arduino',
    // ── BUILD PAGE ──
    build_label:  '// Build consigliata',
    build_title:  'Costruisci il braccio robotico',
    build_sub:    'Schema di riferimento per assemblare il braccio compatibile con GestureLink. Tre gradi di libertà, pinza seriale, compatibile con Arduino Uno/Mega.',
    leg_joints:   'Giunti (servo)',
    leg_struct:   'Struttura',
    leg_arrows:   'Gradi di libertà',
    leg_base:     'Base / connettore',
    bom_title:    'Componenti',
    bom_h_part:   'Componente', bom_h_qty: 'Qtà', bom_h_note: 'Note',
    bom_1_p: 'Servo MG996R',    bom_1_n: 'Spalla + base rotante + gomito (coppia 11 kg/cm)',
    bom_2_p: 'Servo SG90',      bom_2_n: 'Polso + pinza (micro, 9 g)',
    bom_3_n: 'Mega consigliato per più pin PWM',
    bom_4_p: 'Driver PCA9685',  bom_4_n: 'Espansione I²C — 16 canali servo',
    bom_5_p: 'Alimentatore 5 V / 3 A', bom_5_n: 'Separato da Arduino — i servo assorbono molto',
    bom_6_p: 'Struttura stampa 3D / alluminio', bom_6_n: 'File STL open-source disponibili online',
    bom_7_p: 'Cavo USB-B',      bom_7_n: 'Collegamento seriale con GestureLink',
    note1_h: 'Comunicazione seriale',
    note1_p: 'GestureLink invia via USB il numero di dita alzate (0–10). L\'Arduino interpreta il valore e mappa ogni soglia a un angolo servo.',
    note2_h: 'Alimentazione separata',
    note2_p: 'Non alimentare i servo direttamente da Arduino: il picco di corrente al movimento brucia il regolatore on-board. Usa un alimentatore dedicato con massa comune.',
    note3_h: 'Calibrazione angoli',
    note3_p: 'Prima di collegare GestureLink, centra tutti i servo a 90°. Definisci poi i limiti min/max nel codice Arduino per evitare di forzare i finecorsa meccanici.',
    note4_h: 'Libreria consigliata',
    note4_p: 'Usa Adafruit_PWMServoDriver per il PCA9685 o la libreria standard Servo.h se colleghi i servo direttamente ai pin PWM di Arduino.',
    back_home: 'Torna alla home',
    // ── PREVIEW PAGE ──
    prev_label:   '// Anteprima',
    prev_title:   "L'app in azione.",
    prev_sub:     'Scopri l\'interfaccia di GestureLink: feed camera, scheletro 3D e controllo Arduino in un\'unica finestra.',
    prev_s1_tag:  '01 — Feed camera',
    prev_s1_h:    'Tracking in tempo reale',
    prev_s1_p:    'Il feed della webcam mostra i landmark MediaPipe sovrapposti in diretta: ogni dito ha il proprio colore identificativo.',
    prev_s2_tag:  '02 — Scheletro 3D',
    prev_s2_h:    'Visualizzazione vettoriale',
    prev_s2_p:    'Il canvas ridisegna lo scheletro con proiezione prospettica e filtro anti-jitter, rendendo visibili anche i movimenti più sottili.',
    prev_s3_tag:  '03 — Controllo Arduino',
    prev_s3_h:    'Connessione seriale nativa',
    prev_s3_p:    'Il pannello Arduino permette di selezionare porta COM e baud rate senza toccare il codice. Lo stato della connessione è sempre visibile nella nav bar.',
    prev_full_tag:'04 — Visione d\'insieme',
    prev_full_h:  'Un\'unica finestra, tutto il controllo',
    prev_full_p:  'GestureLink è progettato per essere immediato: avvia il tracking, connetti l\'Arduino e il braccio risponde ai tuoi gesti in meno di un secondo.',
    prev_cta_h:   'Pronto a provarlo?',
    prev_cta_p:   'Scarica GestureLink, collega la tua webcam e inizia a controllare il braccio robotico con le mani.',
    prev_cta_btn: 'Scarica ora',
    prev_cta_sec: 'Vedi come costruirlo →',
  },
  en: {
    nav_features:     'Features',
    nav_how:          'How it works',
    nav_specs:        'Requirements',
    nav_download:     'Download',
    nav_build:        'Build',
    nav_preview:      'Preview',
    hero_tag:         'Robotic arm · MediaPipe · Arduino',
    hero_h1:          'Control the future<br>with your <span class="gradient">hands</span>',
    hero_sub:         'GestureLink turns your hand movements into precise commands for your robotic arm. No controller. No delay. Just you and the machine.',
    hero_btn_download:'Download now',
    hero_btn_how:     'How it works →',
    feat_label:       '// Features',
    feat_title:       'Everything you need,<br>nothing you don\'t.',
    f1_h: 'Real-time tracking',
    f1_p: '21 landmarks per hand detected at 30+ FPS via MediaPipe. Supports up to 2 simultaneous hands with automatic Left/Right labelling.',
    f2_h: 'Native Arduino control',
    f2_p: 'Direct serial connection to your microcontroller. COM port and baud rate configurable from the UI — no code changes needed.',
    f3_h: 'Dual view',
    f3_p: 'Live camera feed with MediaPipe overlay on one side, clean vector skeleton on the other. Each finger uniquely colour-coded.',
    f4_h: 'Native desktop app',
    f4_p: 'Built with PyQt5. No web server, no browser. A single Python file, zero extra dependencies to configure.',
    f5_h: 'Accurate finger counting',
    f5_p: 'Normalised-landmark algorithm. Distinguishes left and right thumb on the X axis, all other fingers on the Y axis.',
    f6_h: 'Delta-only sending',
    f6_p: 'The value is sent to Arduino only when it changes. No serial spam, maximum connection stability.',
    how_label: '// How it works',
    how_title: 'From gesture to movement<br>in four steps.',
    s1_h: 'Capture',
    s1_p: 'The webcam grabs the frame. OpenCV flips it horizontally and converts it to RGB for MediaPipe.',
    s2_h: 'Analysis',
    s2_p: 'MediaPipe finds 21 3D landmarks per hand and calculates which fingers are up or closed.',
    s3_h: 'Visualisation',
    s3_p: 'The skeleton is redrawn in real time on the Qt canvas with distinct colours for each finger.',
    s4_h: 'Command',
    s4_p: 'The total finger count is sent via serial to the Arduino, which drives the robotic arm.',
    spec_label: '// System requirements',
    spec_title: 'What you need to get started.',
    sp1_k: 'Operating system',
    sp2_v: '3.8 or higher',
    sp3_v: 'Any USB/built-in',
    sp5_k: 'Arduino (optional)',
    sp5_v: 'Any serial board',
    sp7_k: 'Recommended RAM',
    dl_label:       '// Download',
    dl_title:       'Ready to start?',
    dl_version:     'Version — coming soon',
    dl_sub:         'The download will be available soon. Leave your email to be notified at launch.',
    dl_placeholder: 'Download not yet available',
    dl_note:        'Requires Python 3.8+ · pip install -r requirements.txt',
    req_arduino:    'Arduino optional',
    footer_built:   'Built with MediaPipe · PyQt5 · OpenCV · Arduino',
    // ── BUILD PAGE ──
    build_label:  '// Recommended build',
    build_title:  'Build the robotic arm',
    build_sub:    'Reference schematic for assembling the arm compatible with GestureLink. Three degrees of freedom, serial gripper, compatible with Arduino Uno/Mega.',
    leg_joints:   'Joints (servo)',
    leg_struct:   'Structure',
    leg_arrows:   'Degrees of freedom',
    leg_base:     'Base / connector',
    bom_title:    'Components',
    bom_h_part:   'Component', bom_h_qty: 'Qty', bom_h_note: 'Notes',
    bom_1_p: 'Servo MG996R',    bom_1_n: 'Shoulder + turning base + elbow (11 kg/cm torque)',
    bom_2_p: 'Servo SG90',      bom_2_n: 'Wrist + gripper (micro, 9 g)',
    bom_3_n: 'Mega recommended for more PWM pins',
    bom_4_p: 'PCA9685 driver',  bom_4_n: 'I²C expansion — 16 servo channels',
    bom_5_p: '5 V / 3 A power supply', bom_5_n: 'Separate from Arduino — servos draw a lot',
    bom_6_p: '3D print / aluminium frame', bom_6_n: 'Open-source STL files available online',
    bom_7_p: 'USB-B cable',     bom_7_n: 'Serial connection with GestureLink',
    note1_h: 'Serial communication',
    note1_p: 'GestureLink sends the raised finger count (0–10) over USB. The Arduino reads the value and maps each threshold to a servo angle.',
    note2_h: 'Separate power supply',
    note2_p: 'Do not power servos directly from Arduino: the inrush current burns the on-board regulator. Use a dedicated supply with a common ground.',
    note3_h: 'Angle calibration',
    note3_p: 'Before connecting GestureLink, centre all servos to 90°. Then set min/max limits in the Arduino sketch to avoid forcing the mechanical end-stops.',
    note4_h: 'Recommended library',
    note4_p: 'Use Adafruit_PWMServoDriver for the PCA9685, or the standard Servo.h library if wiring servos directly to Arduino PWM pins.',
    back_home: 'Back to home',
    // ── PREVIEW PAGE ──
    prev_label:   '// Preview',
    prev_title:   'The app in action.',
    prev_sub:     'Explore the GestureLink interface: live camera feed, 3D skeleton, and Arduino control all in one window.',
    prev_s1_tag:  '01 — Camera feed',
    prev_s1_h:    'Real-time tracking',
    prev_s1_p:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The webcam feed displays MediaPipe landmarks live: each finger has its own identifying colour.',
    prev_s2_tag:  '02 — 3D skeleton',
    prev_s2_h:    'Vector visualisation',
    prev_s2_p:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The canvas redraws the skeleton with perspective projection and an anti-jitter filter, making even the subtlest movements visible.',
    prev_s3_tag:  '03 — Arduino control',
    prev_s3_h:    'Native serial connection',
    prev_s3_p:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Arduino panel lets you pick COM port and baud rate without touching the code. Connection status is always visible in the nav bar.',
    prev_full_tag:'04 — Full view',
    prev_full_h:  'One window, complete control',
    prev_full_p:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. GestureLink is designed to be immediate: start tracking, connect the Arduino, and the arm responds to your gestures in under a second.',
    prev_cta_h:   'Ready to try it?',
    prev_cta_p:   'Download GestureLink, plug in your webcam, and start controlling the robotic arm with your hands.',
    prev_cta_btn: 'Download now',
    prev_cta_sec: 'See how to build it →',
  }
};

// ── APPLY LANGUAGE ─────────────────────────────────────────
let currentLang = localStorage.getItem('gl_lang') || 'it';

function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langFlag').textContent = lang === 'it' ? '🇮🇹' : '🇬🇧';
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  currentLang = lang;
  localStorage.setItem('gl_lang', lang);
}

// ── DROPDOWN LOGIC ─────────────────────────────────────────
const langBtn      = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = langDropdown.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', () => {
    applyLang(opt.dataset.lang);
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
});

// ── SCROLL REVEAL ──────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── INIT ───────────────────────────────────────────────────
applyLang(currentLang);
// ── THEME TOGGLE ───────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('gl_theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('gl_theme');
  if (saved) return applyTheme(saved);
  // Respect OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// React to OS preference changes in real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('gl_theme')) applyTheme(e.matches ? 'dark' : 'light');
});

initTheme();