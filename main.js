// ── TRANSLATIONS ──────────────────────────────────────────
const i18n = {
  it: {
    nav_features:     'Caratteristiche',
    nav_how:          'Come funziona',
    nav_specs:        'Requisiti',
    nav_download:     'Download',
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
  },
  en: {
    nav_features:     'Features',
    nav_how:          'How it works',
    nav_specs:        'Requirements',
    nav_download:     'Download',
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