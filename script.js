document.addEventListener("DOMContentLoaded", () => {
  const state = {
    lang: "fi",
    name: "",
    selectedActivity: "",
    contactMethod: "",
    truthClicks: 0,
    wheelSpins: 0
  };

  const colorThemes = {
    blue: ["#dff1ff", "#b9d8ff"],
    green: ["#e7f7e8", "#c6efce"],
    red: ["#ffe6e6", "#ffc9c9"],
    purple: ["#f1e7ff", "#dcc8ff"],
    pink: ["#ffe8f4", "#ffd1e8"],
    orange: ["#fff0e0", "#ffd6ad"],
    yellow: ["#fffbe0", "#fff0a8"],
    gray: ["#f4f4f4", "#dddddd"],
    black: ["#f0f0f0", "#cfcfcf"]
  };

  const fontFacts = {
    "Arial, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Arialin, on yleensä suoraviivainen, vähäeleinen ja todennäköisesti green flag.",
    "'Times New Roman', serif":
      "Tiesitkö! Henkilö, joka valitsee Times New Romanin, on yleensä hieman old school, hieman intensiivinen, mutta kiistatta luotettava valinta.",
    "Calibri, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Calibrin, on yleensä mukava, hurmaava ja vaarallisen helppo tykätä.",
    "'Aptos', Arial, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Aptosin, on yleensä moderni, sulava ja vaivattoman viehättävä ilman että yrittää liikaa.",
    "Aptos, Arial, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Aptosin, on yleensä moderni, sulava ja vaivattoman viehättävä ilman että yrittää liikaa."
  };

  const activityNames = [
    "Urheilua, kuten laskettelu, hiihto tai kuntosali",
    "Lounas / illallinen ravintolassa",
    "Lounas / illallinen itse kokaten",
    "Wine and paint",
    "Stand up show",
    "Teatteri / musikaali",
    "Opiskelijatapahtuma",
    "Leivotaan kakku",
    "Road trip",
    "Paritanssitunti / lavatanssit",
    "Pubivisa",
    "Uintireissu Jäämerelle",
    "Vaellus Haltille",
    "Keilaus / minigolf / biljardi",
    "Leffailta kotona"
  ];

  const stepOrder = [
    "step-language",
    "page-language",
    "step-name",
    "page-name",
    "step-color",
    "page-color",
    "step-font",
    "page-font",
    "step-interest",
    "page-interest",
    "step-intro",
    "page-intro",
    "step-cv",
    "page-cv",
    "step-method",
    "page-activity",
    "step-q1",
    "step-q2",
    "step-q3",
    "step-q4",
    "step-q5",
    "step-q6",
    "step-q7",
    "step-q8",
    "step-q9",
    "step-q10",
    "step-question-result",
    "page-activity-result",
    "step-wheel",
    "step-chosen",
    "page-chosen-activity",
    "step-contact-method",
    "page-contact-method",
    "step-contact-input",
    "page-contact-input",
    "step-final-1",
    "page-final-1",
    "step-final-2",
    "page-final-2",
    "step-finished"
  ];

  function el(id) {
    return document.getElementById(id);
  }

  function existingSteps() {
    return Array.from(document.querySelectorAll(".step, .page"));
  }

  function firstExistingStepId(ids) {
    for (const id of ids) {
      if (el(id)) return id;
    }
    return null;
  }

  function showStep(id) {
    const target = el(id);
    if (!target) return;

    existingSteps().forEach(step => {
      step.classList.remove("active");
      step.style.display = "none";
    });

    target.classList.add("active");
    target.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showFirstStep() {
    const first =
      firstExistingStepId(["step-language", "page-language"]) ||
      existingSteps()[0]?.id;

    if (first) showStep(first);
  }

  function setMessage(id, text, type = "info") {
    const target = el(id);
    if (!target) return;
    target.textContent = text;
    target.classList.remove("hidden", "info", "error", "success");
    target.classList.add(type);
  }

  function hideMessage(id) {
    const target = el(id);
    if (!target) return;
    target.classList.add("hidden");
  }

  function bind(id, callback) {
    const target = el(id);
    if (!target) return;
    target.addEventListener("click", callback);
  }

  function getInputValue(id) {
    const target = el(id);
    return target ? target.value.trim() : "";
  }

  function applyThemeColor(colorKey) {
    const theme = colorThemes[colorKey] || ["#ffffff", "#ffffff"];
    document.documentElement.style.setProperty("--bg1", theme[0]);
    document.documentElement.style.setProperty("--bg2", theme[1]);
  }

  function applyFont(fontValue) {
    document.documentElement.style.setProperty("--font-main", fontValue || "Arial, sans-serif");
  }

  function updateDynamicTexts() {
    const name = state.name || "ystävä";

    const colorSubtitle = el("colorSubtitle") || el("color-subtitle");
    if (colorSubtitle) {
      colorSubtitle.textContent = "Sen jälkeen voidaan aloittaa.";
    }

    const colorTitle = el("colorTitle") || el("color-title");
    if (colorTitle) {
      colorTitle.textContent = `Terve ${name}, muokataan vielä muutamaa asetusta`;
    }

    const interestText = el("interestText") || el("interest-text");
    if (interestText) {
      interestText.textContent =
        `Moi ${name}, nyt kun asetukset on määritelty, voidaan siirtyä itse aiheeseen. ` +
        `On kuulkaa käynyt niin, että tämän nettisivun lähettäjä pitää sinua mielenkiintoisena ja viehättävänä ihmisenä ja haluaisi viedä sinut ulos. ` +
        `Valitse seuraavaksi, miten haluat edetä.`;
    }

    const chosenText = el("chosenText") || el("chosen-text");
    if (chosenText) {
      chosenText.textContent =
        `Noniin ${name}, valitsit siis ${state.selectedActivity || "erinomaisen aktiviteetin"}. ` +
        `Loistava päätös, en olisi itse osannut valita paremmin. Olet selvästi päätöksentekijä!`;
    }

    const final1Text = el("final1Text") || el("final1-text");
    if (final1Text) {
      final1Text.textContent =
        `Tämä on viimeinen sivu, kiva kun pääsit tänne asti! ` +
        `Voit odottaa yhteydenottoa minulta muutaman arkipäivän kuluessa.`;
    }

    const final2Text = el("final2Text") || el("final2-text");
    if (final2Text) {
      final2Text.textContent =
        `P.s. tiedän tiedän, sanoin että äskeinen sivu oli viimeinen, mutta ei ollut. ` +
        `Halusin vain sanoa että odotan innolla treffejämme ${state.selectedActivity || "valitun aktiviteetin"} merkeissä, joten valmistaudu, siitä tulee kivaa!!`;
    }

    const contactSubtitle = el("contactInputSubtitle") || el("contact-input-subtitle");
    if (contactSubtitle) {
      contactSubtitle.textContent = `Valitsit yhteydenpitotavaksi: ${state.contactMethod || "-"}`;
    }
  }

  function updateFontFact() {
    const fontSelect = el("fontSelect") || el("fontSelect");
    if (!fontSelect) return;

    const value = fontSelect.value;
    const factBox = el("fontFactBox") || el("fontFactBox");
    const factText = el("fontFactText") || el("fontFactText");

    if (!value || !factText) return;

    factText.textContent = fontFacts[value] || "";
    if (factBox) factBox.classList.remove("hidden");
  }

  function getRadioValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : "";
  }

  function nextQuestion(currentNumber) {
    const currentName = `q${currentNumber}`;
    const value = getRadioValue(currentName);

    if (!value) {
      setMessage(`q${currentNumber}Message`, "Valitse kyllä tai ei ennen jatkamista.", "error");
      return;
    }

    hideMessage(`q${currentNumber}Message`);

    if (currentNumber < 10) {
      showStep(`step-q${currentNumber + 1}`);
    } else {
      renderSimpleActivityResult();
      const resultStep = firstExistingStepId(["step-question-result", "page-activity-result"]);
      if (resultStep) showStep(resultStep);
    }
  }

  function renderSimpleActivityResult() {
    const randomActivity = activityNames[Math.floor(Math.random() * activityNames.length)];
    state.selectedActivity = randomActivity;
    updateDynamicTexts();

    const container =
      el("questionResultContent") ||
      el("activityResultContent") ||
      el("activity-results");

    if (!container) return;

    container.innerHTML = `
      <div class="result-card">
        <h2>Sinulle sopivin aktiviteetti</h2>
        <p><strong>${state.selectedActivity}</strong></p>
        <p>Algoritmi teki nyt hyvin virallisen ja täysin puolueettoman päätöksen.</p>
      </div>
    `;
  }

  function chooseRandomWheelActivity() {
    const randomActivity = activityNames[Math.floor(Math.random() * activityNames.length)];
    state.selectedActivity = randomActivity;
    updateDynamicTexts();

    setMessage("wheelMessage", `Onnenpyörä valitsi: ${state.selectedActivity}`, "success");
    setMessage("wheelResult", `Onnenpyörä valitsi: ${state.selectedActivity}`, "success");

    const continueBtn = el("wheelContinueBtn");
    if (continueBtn) continueBtn.classList.remove("hidden");

    const spinAgainBtn = el("wheelSpinAgainBtn") || el("spinAgainBtn");
    if (spinAgainBtn && state.wheelSpins < 3) {
      spinAgainBtn.classList.remove("hidden");
    }
  }

  function drawSimpleWheel() {
    const canvas = el("wheelCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const total = activityNames.length;
    const slice = (Math.PI * 2) / total;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = Math.min(cx, cy) - 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < total; i++) {
      const start = i * slice;
      const end = start + slice;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, end);
      ctx.closePath();

      ctx.fillStyle = `hsl(${Math.round((360 / total) * i)}, 80%, 78%)`;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + slice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#111";
      ctx.font = "13px Arial";
      ctx.fillText(activityNames[i].slice(0, 26), radius - 8, 4);
      ctx.restore();
    }
  }

  // ======================================================
  // BINDINGS FOR BOTH OLD AND NEW ID NAMES
  // ======================================================

  bind("languageContinueBtn", () => {
    const value = getInputValue("languageSelect");
    if (["fi", "en"].includes(value)) {
      state.lang = value;
      hideMessage("languageMessage");
    } else {
      state.lang = "en";
      setMessage("languageMessage", "Haha eipäs nyt hurjastella kielen kanssa — jatketaan englannilla.", "info");
    }

    showStep(firstExistingStepId(["step-name", "page-name"]));
  });

  bind("toNameBtn", () => {
    const value = getInputValue("languageSelect");
    if (["fi", "en"].includes(value)) {
      state.lang = value;
      hideMessage("languageMessage");
    } else {
      state.lang = "en";
      setMessage("languageMessage", "Haha eipäs nyt hurjastella kielen kanssa — jatketaan englannilla.", "info");
    }

    showStep(firstExistingStepId(["step-name", "page-name"]));
  });

  bind("nameContinueBtn", () => {
    const value = getInputValue("nameInput");
    if (!value) {
      setMessage("nameMessage", "Kirjoita nimi ennen jatkamista.", "error");
      setMessage("nameError", "Kirjoita nimi ennen jatkamista.", "error");
      return;
    }

    state.name = value;
    updateDynamicTexts();
    showStep(firstExistingStepId(["step-color", "page-color"]));
  });

  bind("toColorBtn", () => {
    const value = getInputValue("nameInput");
    if (!value) {
      setMessage("nameError", "Kirjoita nimi ennen jatkamista.", "error");
      return;
    }

    state.name = value;
    updateDynamicTexts();
    showStep(firstExistingStepId(["step-color", "page-color"]));
  });

  const colorSelect = el("colorSelect");
  if (colorSelect) {
    colorSelect.addEventListener("change", () => {
      applyThemeColor(colorSelect.value);
    });
  }

  bind("colorContinueBtn", () => {
    const value = getInputValue("colorSelect");
    if (!value) {
      setMessage("colorMessage", "Valitse väri ennen jatkamista.", "error");
      return;
    }

    applyThemeColor(value);
    showStep(firstExistingStepId(["step-font", "page-font"]));
  });

  bind("toFontBtn", () => {
    const value = getInputValue("colorSelect") || "blue";
    applyThemeColor(value);
    showStep(firstExistingStepId(["step-font", "page-font"]));
  });

  const fontSelect = el("fontSelect");
  if (fontSelect) {
    fontSelect.addEventListener("change", () => {
      applyFont(fontSelect.value);
      updateFontFact();
    });
  }

  bind("fontContinueBtn", () => {
    const value = getInputValue("fontSelect");
    if (!value) {
      setMessage("fontMessage", "Valitse fontti ennen jatkamista.", "error");
      return;
    }

    applyFont(value);
    updateFontFact();
    showStep(firstExistingStepId(["step-interest", "page-interest"]));
  });

  bind("toInterestBtn", () => {
    const value = getInputValue("fontSelect") || "Arial, sans-serif";
    applyFont(value);
    updateFontFact();
    showStep(firstExistingStepId(["step-interest", "page-interest"]));
  });

  bind("declineBtn", () => {
    showStep(firstExistingStepId(["step-decline", "page-decline", "step-finished"]));
  });

  bind("acceptBtn", () => {
    showStep(firstExistingStepId(["step-intro", "page-intro"]));
  });

  bind("introContinueBtn", () => {
    showStep(firstExistingStepId(["step-cv", "page-cv"]));
  });

  bind("toCvBtn", () => {
    showStep(firstExistingStepId(["step-cv", "page-cv"]));
  });

  document.querySelectorAll(".truth-btn").forEach(button => {
    button.addEventListener("click", () => {
      if (button.disabled) return;

      button.disabled = true;
      button.classList.add("clicked", "clicked-truth");
      state.truthClicks += 1;

      if (state.truthClicks < 4) {
        setMessage("truthMessage", "Tämä vaihtoehto on totta, yritä uudelleen.", "error");
      } else {
        setMessage(
          "truthMessage",
          "Oho, tämäkin on totta. En näemmä osaa tämän pelin sääntöjä… mutta nyt ainakin tiedät muutaman mielenkiintoisen faktan minusta.",
          "success"
        );

        const cvContinue = el("cvContinueBtn") || el("toActivityBtn");
        if (cvContinue) cvContinue.classList.remove("hidden");
      }
    });
  });

  bind("cvContinueBtn", () => {
    showStep(firstExistingStepId(["step-method", "page-activity"]));
  });

  bind("toActivityBtn", () => {
    showStep(firstExistingStepId(["step-method", "page-activity"]));
  });

  bind("methodQuestionsBtn", () => {
    showStep(firstExistingStepId(["step-q1", "page-activity"]));
  });

  bind("showQuestionsBtn", () => {
    showStep(firstExistingStepId(["step-q1", "page-activity"]));
  });

  bind("methodWheelBtn", () => {
    drawSimpleWheel();
    showStep(firstExistingStepId(["step-wheel", "page-activity"]));
  });

  bind("showWheelBtn", () => {
    drawSimpleWheel();
    showStep(firstExistingStepId(["step-wheel", "page-activity"]));
  });

  for (let i = 1; i <= 10; i++) {
    bind(`q${i}ContinueBtn`, () => nextQuestion(i));
  }

  bind("questionResultContinueBtn", () => {
    showStep(firstExistingStepId(["step-chosen", "page-chosen-activity"]));
  });

  bind("toChosenActivityBtn", () => {
    showStep(firstExistingStepId(["step-chosen", "page-chosen-activity"]));
  });

  bind("wheelSpinBtn", () => {
    state.wheelSpins += 1;
    chooseRandomWheelActivity();
  });

  bind("spinWheelBtn", () => {
    state.wheelSpins += 1;
    chooseRandomWheelActivity();
  });

  bind("wheelSpinAgainBtn", () => {
    if (state.wheelSpins < 3) {
      state.wheelSpins += 1;
      chooseRandomWheelActivity();
    }
  });

  bind("spinAgainBtn", () => {
    if (state.wheelSpins < 3) {
      state.wheelSpins += 1;
      chooseRandomWheelActivity();
    }
  });

  bind("wheelContinueBtn", () => {
    if (!state.selectedActivity) {
      setMessage("wheelMessage", "Pyöräytä ainakin kerran ennen jatkamista.", "error");
      return;
    }

    showStep(firstExistingStepId(["step-chosen", "page-chosen-activity"]));
  });

  bind("chosenContinueBtn", () => {
    showStep(firstExistingStepId(["step-contact-method", "page-contact-method"]));
  });

  bind("toContactMethodBtn", () => {
    showStep(firstExistingStepId(["step-contact-method", "page-contact-method"]));
  });

  document.querySelectorAll(".contact-method-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.contactMethod = button.dataset.method || button.textContent.trim();
      updateDynamicTexts();
      showStep(firstExistingStepId(["step-contact-input", "page-contact-input"]));
    });
  });

  bind("smokeBtn", () => {
    const smokeBtn = el("smokeBtn");
    if (smokeBtn) {
      smokeBtn.classList.add("smoke-away", "smoke-vanish");
      setTimeout(() => smokeBtn.classList.add("hidden"), 900);
    }

    setMessage(
      "smokeMessage",
      "Savumerkit katosivat savun lailla. Täysin epäluotettava, mutta tyylikäs yritys.",
      "info"
    );
  });

  bind("contactInputContinueBtn", () => {
    showStep(firstExistingStepId(["step-final-1", "page-final-1"]));
  });

  bind("toFinal1Btn", () => {
    showStep(firstExistingStepId(["step-final-1", "page-final-1"]));
  });

  bind("final1ContinueBtn", () => {
    showStep(firstExistingStepId(["step-final-2", "page-final-2"]));
  });

  bind("toFinal2Btn", () => {
    showStep(firstExistingStepId(["step-final-2", "page-final-2"]));
  });

  bind("realFinishBtn", () => {
    showStep(firstExistingStepId(["step-finished"]));
  });

  bind("realEndBtn", () => {
    showStep(firstExistingStepId(["step-finished"]));
  });

  // ======================================================
  // INIT
  // ======================================================

  applyThemeColor("");
  applyFont("Arial, sans-serif");
  updateDynamicTexts();
  drawSimpleWheel();
  showFirstStep();
});
