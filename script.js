:root {
  --bg1: #ffffff;
  --bg2: #ffffff;
  --text: #111111;
  --muted: #5f6368;
  --card: rgba(255, 255, 255, 0.9);
  --border: rgba(0, 0, 0, 0.08);
  --shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
  --accent: #1f6feb;
  --accent-hover: #1258bc;
  --danger: #c92a2a;
  --success: #2b8a3e;
  --font-main: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  font-family: var(--font-main);
  color: var(--text);
  background: linear-gradient(135deg, var(--bg1), var(--bg2));
  transition: background 400ms ease, font-family 220ms ease;
}

#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
}

.step {
  display: none;
  width: 100%;
  max-width: 1040px;
}

.step.active {
  display: block;
  animation: fadeIn 240ms ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 30px;
  backdrop-filter: blur(10px);
}

.card-narrow {
  max-width: 640px;
  margin: 0 auto;
}

.center-text {
  text-align: center;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
  align-items: start;
}

@media (max-width: 920px) {
  .split-layout {
    grid-template-columns: 1fr;
  }
}

.fact-box {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 20px;
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.14;
}

p {
  line-height: 1.6;
}

.label {
  display: block;
  font-weight: 700;
  margin: 16px 0 8px;
}

.input,
select {
  width: 100%;
  padding: 14px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  font-size: 1rem;
  background: #ffffff;
  color: var(--text);
  outline: none;
}

.input:focus,
select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(31, 111, 235, 0.12);
}

.btn {
  appearance: none;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.14s ease, background 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-secondary {
  background: rgba(0, 0, 0, 0.08);
  color: var(--text);
}

.btn-option {
  background: #ffffff;
  color: var(--text);
  border: 1px solid var(--border);
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.button-row.center {
  justify-content: center;
}

.message {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.94);
}

.message.info {
  background: rgba(31, 111, 235, 0.08);
}

.message.error {
  background: rgba(201, 42, 42, 0.08);
  border-color: rgba(201, 42, 42, 0.2);
  color: #7f1d1d;
}

.message.success {
  background: rgba(43, 138, 62, 0.08);
  border-color: rgba(43, 138, 62, 0.2);
  color: #1f5f2c;
}

.hidden {
  display: none !important;
}

.cv-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  margin: 20px 0 26px;
}

@media (max-width: 860px) {
  .cv-layout {
    grid-template-columns: 1fr;
  }
}

.photo-placeholder {
  min-height: 250px;
  border-radius: 20px;
  border: 2px dashed rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.58));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  text-align: center;
  padding: 20px;
}

.truth-grid {
  display: grid;
  gap: 10px;
}

.truth-btn.clicked {
  background: rgba(201, 42, 42, 0.14);
  border-color: rgba(201, 42, 42, 0.3);
  color: #7f1d1d;
}

.radio-group {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 16px;
  cursor: pointer;
}

.radio-group input[type="radio"] {
  transform: scale(1.1);
}

.result-list {
  display: grid;
  gap: 14px;
  margin-top: 20px;
}

.result-card {
  background: rgba(255,255,255,0.84);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;
}

@media (max-width: 760px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.wheel-wrap {
  position: relative;
  width: min(520px, 100%);
  aspect-ratio: 1 / 1;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#wheelCanvas {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: var(--shadow);
}

.wheel-pointer {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 28px solid #111111;
  z-index: 2;
}

.smoke-away {
  animation: smokeAway 900ms ease forwards;
}

@keyframes smokeAway {
  from {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: scale(1.12) translateY(-20px);
    filter: blur(10px);
  }
}
``
