:root {
  --bg-1: #ffffff;
  --bg-2: #ffffff;
  --text: #111111;
  --muted: #5f6368;
  --card: rgba(255, 255, 255, 0.86);
  --border: rgba(0, 0, 0, 0.08);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --accent: #1f6feb;
  --accent-hover: #1158be;
  --danger: #d93025;
  --success: #1a7f37;
  --warning: #b26a00;
  --font-main: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  font-family: var(--font-main);
  color: var(--text);
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
  transition: background 500ms ease, font-family 250ms ease;
}

#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
}

.page {
  display: none;
  width: 100%;
  max-width: 980px;
}

.page.active {
  display: block;
  animation: fadeIn 300ms ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.card {
  background: var(--card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 28px;
}

.card.narrow {
  max-width: 620px;
  margin: 0 auto;
}

.layout-two {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
  align-items: start;
}

@media (max-width: 900px) {
  .layout-two {
    grid-template-columns: 1fr;
  }
}

.side-box {
  background: rgba(255,255,255,0.92);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 20px;
}

h1, h2, h3 {
  margin-top: 0;
  line-height: 1.15;
}

p {
  line-height: 1.6;
}

.label {
  display: block;
  margin: 16px 0 8px;
  font-weight: 700;
}

.input {
  width: 100%;
  padding: 14px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  font-size: 1rem;
  background: #fff;
  color: var(--text);
  outline: none;
}

.input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(31, 111, 235, 0.15);
}

.btn {
  appearance: none;
  border: 0;
  border-radius: 14px;
  padding: 14px 18px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease, background 0.2s ease;
  margin-top: 18px;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  background: var(--accent);
  color: #fff;
}

.btn.primary:hover {
  background: var(--accent-hover);
}

.btn.ghost {
  background: rgba(0,0,0,0.06);
  color: var(--text);
}

.btn.option {
  background: #fff;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn.option:hover {
  background: rgba(255,255,255,0.8);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  transform: none;
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.hidden {
  display: none !important;
}

.message {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.9);
}

.message.info {
  background: rgba(31,111,235,0.08);
}

.message.error {
  background: rgba(217,48,37,0.08);
  border-color: rgba(217,48,37,0.2);
}

.message.success {
  background: rgba(26,127,55,0.08);
  border-color: rgba(26,127,55,0.2);
}

.cv-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  margin: 20px 0 24px;
}

@media (max-width: 860px) {
  .cv-grid {
    grid-template-columns: 1fr;
  }
}

.cv-photo {
  display: flex;
  align-items: stretch;
}

.photo-placeholder {
  width: 100%;
  min-height: 240px;
  border-radius: 20px;
  border: 2px dashed rgba(0,0,0,0.15);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.55));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  text-align: center;
  padding: 18px;
}

.truth-buttons {
  display: grid;
  gap: 10px;
}

.truth-btn.clicked-truth {
  background: rgba(217, 48, 37, 0.15);
  border-color: rgba(217, 48, 37, 0.35);
  color: #7d1410;
}

.method-block {
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.question-list {
  display: grid;
  gap: 12px;
}

.question-item {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
}

.question-item label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.wheel-wrap {
  position: relative;
  width: min(520px, 100%);
  aspect-ratio: 1 / 1;
  margin: 18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#wheelCanvas {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
  box-shadow: var(--shadow);
  background: #fff;
}

.pointer {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 26px solid #111;
  z-index: 2;
}

.result-list {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.result-card {
  background: rgba(255,255,255,0.78);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

@media (max-width: 760px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.smoke-vanish {
  animation: smokeAway 900ms ease forwards;
}

@keyframes smokeAway {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: scale(1.15) translateY(-18px);
    filter: blur(10px);
  }
}

.finish-screen {
  text-align: center;
}
``
