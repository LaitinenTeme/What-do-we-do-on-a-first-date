// ======================================================// ======================================================  selectedActivity: "",
  contactMethod: "",
  contactValue: "",
  truthClicks: 0,
  wheelSpins: 0,
  answers: {
    gettingWetBothers: "",
    afraidHeights: "",
    staysUpLate: "",
    readyToTravel: "",
    likesFancyClothes: "",
    drinksAlcohol: "",
    prefersDay: "",
    moneyMeansQuality: "",
    afraidAnimals: "",
    canDoCartwheel: ""
  }
};

// ======================================================
// HELPERS
// ======================================================
function $(id) {
  return document.getElementById(id);
}

function showStep(id) {
  document.querySelectorAll(".step").forEach(step => step.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMessage(id, text, type = "info") {
  const el = $(id);
  el.textContent = text;
  el.classList.remove("hidden", "info", "error", "success");
  el.classList.add(type);
}

function hideMessage(id) {
  $(id).classList.add("hidden");
}

function fill(template, values = {}) {
  return template.replace(/\{(.*?)\}/g, (_, key) => values[key] ?? "");
}

// ======================================================
// TRANSLATIONS
// ======================================================
const i18n = {
  fi: {
    continue: "Jatka",
    chooseLanguage: "Valitse kieli",
    languageSubtitle: "Aloitetaan aivan rauhallisesti.",
    unsupportedLanguage:
      "Haha eipäs nyt hurjastella kielen kanssa — jatketaan englannilla.",
    whoAreYou: "Kuka sinä olet?",
    whoAreYouSubtitle: "Voit kirjoittaa nimesi tähän.",
    namePlaceholder: "Kirjoita nimesi",
    nameRequired: "Kirjoita nimi ennen jatkamista.",
    colorTitle: "Terve {name}, muokataan vielä muutamaa asetusta",
    colorSubtitle: "Sen jälkeen voidaan aloittaa.",
    colorRequired: "Valitse väri ennen jatkamista.",
    fontTitle: "Valitaan vielä fontti",
    fontSubtitle: "Harkitse tarkkaan, tämä valinta kertoo paljon sinusta ihmisenä.",
    fontRequired: "Valitse fontti ennen jatkamista.",
    fontFactTitle: "Tiesitkö!",
    interestTitle: "Nyt päästään itse aiheeseen",
    interestText:
      "Moi {name}, on kuulkaa käynyt niin, että tämän nettisivun lähettäjä pitää sinua mielenkiintoisena ja viehättävänä ihmisenä ja haluaisi viedä sinut ulos. Valitse seuraavaksi, miten haluat edetä.",
    declineBtn: "Kiitos mutta ei kiitos",
    acceptBtn: "No miksipäs ei…",
    declineTitle: "Ymmärretty",
    declineText:
      "Kiitos rehellisestä vastauksesta. Tämä sivu kuittaa valinnan kohteliaasti ja toivottaa hyvää päivänjatkoa.",
    introTitle: "Mukava nähdä, että mielenkiintosi voitti",
    introText:
      "Loistavaa! Mutta ennen kuin päästään isojen kysymysten äärelle, sallinette minun esittäytyä paremmin. Mennään seuraavalle sivulle: näytän pienen CV:n ja pelataan kevyt peli.",
    cvTitle: "Pikaesittely",
    cvAgeText: "Cheekin Jippikayjei oli hitti, kun olin peruskoulussa",
    cvJobText: "korkeasti koulutettu erikoismies",
    cvNatureText: "looginen mutta aina pilke silmäkulmassa",
    truthTitle: "4 totuutta ja 1 valhe… tai no, melkein",
    truthSubtitle: "Valitse mikä väitteistä on valhe.",
    truthTryAgain: "Tämä vaihtoehto on totta, yritä uudelleen.",
    truthFinal:
      "Oho, tämäkin on totta. En näemmä osaa tämän pelin sääntöjä… mutta nyt ainakin tiedät muutaman mielenkiintoisen faktan minusta.",
    methodTitle: "Nyt selvitetään paras treffiaktiviteetti",
    methodText:
      "Tässä on nyt kaksi vaihtoehtoa, miten jatketaan: 1) voit vastata kysymyksiin, jotka rajaavat sopivimmat aktiviteetit, tai 2) voit pyöräyttää onnenpyörää ja katsoa minne kohtalo sinut johdattaa.",
    qRequired: "Valitse kyllä tai ei ennen jatkamista.",
    questionResultTitle: "Sinulle sopivin aktiviteetti",
    bestMatch: "Analyysin perusteella sinulle sopisi parhaiten:",
    otherOptions: "Muut varteenotettavat vaihtoehdot:",
    wheelTitle: "Onnenpyörä",
    wheelSubtitle: "Saat 3 pyöräytystä.",
    spin: "Pyöräytä",
    spinAgain: "Pyöräytä uudelleen",
    wheelContinue: "Jatka seuraavalle sivulle",
    wheelNeedSpin: "Pyöräytä ainakin kerran ennen jatkamista.",
    wheelPicked: "Onnenpyörä valitsi:",
    wheelDone: "Kolme pyöräytystä käytetty. Nyt on päätöksen aika.",
    chosenTitle: "Valinta tehty",
    chosenText:
      "Noniin {name}, valitsit siis {activity}. Loistava päätös — en olisi itse osannut valita paremmin. Olet selvästi päätöksentekijä!",
    contactMethodTitle: "Treffien aikataulu ja tiedonkulku",
    contactMethodSubtitle: "Valitse yhteydenpitotapa.",
    smokeText: "Savumerkit katosivat savun lailla. Täysin epäluotettava, mutta tyylikäs yritys.",
    contactInputTitle: "Anna yhteystieto",
    contactInputSubtitle: "Valitsit yhteydenpitotavaksi: {method}",
    final1Title: "Tämä on viimeinen sivu",
    final1Text:
      "Kiva kun pääsit tänne asti, {name}! Voit odottaa yhteydenottoa minulta muutaman arkipäivän kuluessa. Valittu aktiviteetti oli: {activity}.",
    final2Title: "P.s. vielä yksi juttu",
    final2Text:
      "Tiedän tiedän — sanoin että äskeinen sivu oli viimeinen, mutta ei ollut. Halusin vain sanoa, että odotan innolla treffejämme {activity} merkeissä, joten valmistaudu: siitä tulee kivaa!",
    realFinish: "Oikeasti lopeta",
    finishedTitle: "Kiitos!",
    finishedText: "Sivu on nyt oikeasti lopussa."
  },
  en: {
    continue: "Continue",
    chooseLanguage: "Choose language",
    languageSubtitle: "Let’s begin in a calm and civilized manner.",
    unsupportedLanguage:
      "Haha, let’s not get too adventurous with the language settings — we’ll continue in English.",
    whoAreYou: "Who are you?",
    whoAreYouSubtitle: "Please type your name.",
    namePlaceholder: "Type your name",
    nameRequired: "Please enter your name before continuing.",
    colorTitle: "Hello {name}, let’s adjust a few final settings",
    colorSubtitle: "After that, we can begin.",
    colorRequired: "Please choose a color before continuing.",
    fontTitle: "Let’s choose a font",
    fontSubtitle: "Think carefully — this choice says a lot about you as a person.",
    fontRequired: "Please choose a font before continuing.",
    fontFactTitle: "Fun fact!",
    interestTitle: "Now we get to the actual point",
    interestText:
      "Hi {name}, here’s the situation: the sender of this website finds you interesting and charming and would like to take you out. Please choose how you’d like to proceed.",
    declineBtn: "Thanks, but no thanks",
    acceptBtn: "Well… why not?",
    declineTitle: "Understood",
    declineText:
      "Thank you for the honest answer. This page politely acknowledges your choice and wishes you a lovely day.",
    introTitle: "Nice to see that curiosity won",
    introText:
      "Excellent. But before we get to the big questions, allow me to introduce myself a little better. On the next page I’ll show you a mini CV and we’ll play a light game.",
    cvTitle: "Quick introduction",
    cvAgeText: "Cheek’s Jippikayjei was a hit when I was in basic school",
    cvJobText: "highly educated specialist gentleman",
    cvNatureText: "logical, but always with a sparkle in the eye",
    truthTitle: "4 truths and 1 lie… or something close to that",
    truthSubtitle: "Pick the one you think is the lie.",
    truthTryAgain: "This one is actually true. Try again.",
    truthFinal:
      "Oops, this one is true too. Apparently I do not fully understand the rules of this game… but at least now you know a few interesting facts about me.",
    methodTitle: "Now let’s find the best date activity",
    methodText:
      "You now have two options: 1) answer a few questions to narrow down the best activities, or 2) spin the wheel of fate and see where destiny takes you.",
    qRequired: "Please choose yes or no before continuing.",
    questionResultTitle: "Best activity for you",
    bestMatch: "Based on the analysis, your best match would be:",
    otherOptions: "Other strong options:",
    wheelTitle: "Wheel of Fortune",
    wheelSubtitle: "You get 3 spins.",
    spin: "Spin",
    spinAgain: "Spin again",
    wheelContinue: "Continue to next page",
    wheelNeedSpin: "Please spin at least once before continuing.",
    wheelPicked: "The wheel chose:",
    wheelDone: "All 3 spins used. Time to embrace your destiny.",
    chosenTitle: "Choice confirmed",
    chosenText:
      "Alright {name}, you chose {activity}. Excellent decision — I honestly couldn’t have chosen better myself. You clearly know how to make decisions.",
    contactMethodTitle: "Date logistics and communication",
    contactMethodSubtitle: "Choose your preferred contact method.",
    smokeText: "Smoke signals disappeared like smoke. Stylish, but not especially practical.",
    contactInputTitle: "Enter your contact detail",
    contactInputSubtitle: "You selected: {method}",
    final1Title: "This is the final page",
    final1Text:
      "Lovely that you made it this far, {name}! You can expect to hear from me within a few business days. The chosen activity was: {activity}.",
    final2Title: "P.S. one more thing",
    final2Text:
      "I know, I know — I said the previous page was the final one, but it was not. I just wanted to say I’m genuinely looking forward to our date in the spirit of {activity}, so prepare yourself: it’s going to be fun.",
    realFinish: "Actually finish",
    finishedTitle: "Thank you!",
    finishedText: "The page has now actually ended."
  }
};

// ======================================================
// FONT FACTS
// ======================================================
const fontFacts = {
  fi: {
    "Arial, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Arialin, on yleensä suoraviivainen, vähäeleinen ja todennäköisesti green flag.",
    "'Times New Roman', serif":
      "Tiesitkö! Henkilö, joka valitsee Times New Romanin, on yleensä hieman old school, hieman intensiivinen, mutta kiistatta luotettava valinta.",
    "Calibri, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Calibrin, on yleensä mukava, hurmaava ja vaarallisen helppo tykätä.",
    "'Aptos', Arial, sans-serif":
      "Tiesitkö! Henkilö, joka valitsee Aptosin, on yleensä moderni, sulava ja vaivattoman viehättävä ilman että yrittää liikaa."
  },
  en: {
    "Arial, sans-serif":
      "Fun fact! A person who chooses Arial is usually straightforward, low-drama, and most likely a green flag.",
    "'Times New Roman', serif":
      "Fun fact! A person who chooses Times New Roman is usually a little old-school, a little intense, but undeniably reliable.",
    "Calibri, sans-serif":
      "Fun fact! A person who chooses Calibri is usually warm, charming, and dangerously easy to like.",
    "'Aptos', Arial, sans-serif":
      "Fun fact! A person who chooses Aptos is usually modern, smooth, and effortlessly attractive without trying too hard."
  }
};

// ======================================================
// COLOR THEMES
// ======================================================
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

// ======================================================
// ACTIVITIES
// ======================================================
const activities = {
  sports: {
    fi: "Urheilua, kuten laskettelu, hiihto tai kuntosali",
    en: "Sports, such as skiing, gym, or other active fun"
  },
  restaurantLunch: {
    fi: "Lounas / illallinen ravintolassa",
    en: "Lunch / dinner at a restaurant"
  },
  cookDinner: {
    fi: "Lounas / illallinen itse kokaten",
    en: "Cooking lunch / dinner together"
  },
  winePaint: {
    fi: "Wine and paint",
    en: "Wine and paint"
  },
  standup: {
    fi: "Stand up show",
    en: "Stand-up show"
  },
  theatre: {
    fi: "Teatteri / musikaali",
    en: "Theatre / musical"
  },
  studentEvent: {
    fi: "Opiskelijatapahtuma",
    en: "Student event"
  },
  bakeCake: {
    fi: "Leivotaan kakku",
    en: "Let’s bake a cake"
  },
  roadTrip: {
    fi: "Road trip",
    en: "Road trip"
  },
  dance: {
    fi: "Paritanssitunti / lavatanssit",
    en: "Partner dancing / dance hall"
  },
  pubQuiz: {
    fi: "Pubivisa",
    en: "Pub quiz"
  },
  arcticSwim: {
    fi: "Uintireissu Jäämerelle",
    en: "Swimming trip to the Arctic Ocean"
  },
  halti: {
    fi: "Vaellus Haltille",
    en: "Hike to Halti"
  },
  games: {
    fi: "Keilaus / minigolf / biljardi",
    en: "Bowling / mini golf / billiards"
  },
  movieNight: {
    fi: "Leffailta kotona",
    en: "Movie night at home"
  }
};

const wheelActivityIds = Object.keys(activities);

// ======================================================
// LOGIC TABLE
// ======================================================
const logicTable = [
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "arcticSwim", score: -4, reason: "kastuminen haittaa selvästi" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "halti", score: -1, reason: "märkä ulkoilu ei houkuttele" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "restaurantLunch", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "cookDinner", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "winePaint", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "standup", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "theatre", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "bakeCake", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "games", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "yes", activity_id: "movieNight", score: 1, reason: "sisäaktiviteetti sopii paremmin" },
  { question_id: "gettingWetBothers", answer_value: "no", activity_id: "arcticSwim", score: 4, reason: "kastuminen ei haittaa" },
  { question_id: "gettingWetBothers", answer_value: "no", activity_id: "halti", score: 1, reason: "ulkona olo voi sopia" },
  { question_id: "gettingWetBothers", answer_value: "no", activity_id: "roadTrip", score: 1, reason: "vaihtelevat olosuhteet eivät haittaa" },

  { question_id: "afraidHeights", answer_value: "yes", activity_id: "halti", score: -3, reason: "korkeat paikat eivät tunnu hyvältä" },
  { question_id: "afraidHeights", answer_value: "no", activity_id: "halti", score: 1, reason: "korkeat maisemat eivät pelota" },
  { question_id: "afraidHeights", answer_value: "no", activity_id: "roadTrip", score: 1, reason: "retkimeininki voi sopia" },

  { question_id: "staysUpLate", answer_value: "yes", activity_id: "standup", score: 3, reason: "iltaohjelma sopii" },
  { question_id: "staysUpLate", answer_value: "yes", activity_id: "pubQuiz", score: 3, reason: "iltaohjelma sopii" },
  { question_id: "staysUpLate", answer_value: "yes", activity_id: "dance", score: 2, reason: "myöhäinen meno ei haittaa" },
  { question_id: "staysUpLate", answer_value: "yes", activity_id: "theatre", score: 2, reason: "iltaohjelma sopii" },
  { question_id: "staysUpLate", answer_value: "yes", activity_id: "studentEvent", score: 2, reason: "myöhäinen meno ei haittaa" },
  { question_id: "staysUpLate", answer_value: "yes", activity_id: "movieNight", score: 1, reason: "myöhäisempi rento ilta sopii" },
  { question_id: "staysUpLate", answer_value: "no", activity_id: "restaurantLunch", score: 2, reason: "päivätreffi sopii paremmin" },
  { question_id: "staysUpLate", answer_value: "no", activity_id: "sports", score: 2, reason: "päivätreffi sopii paremmin" },
  { question_id: "staysUpLate", answer_value: "no", activity_id: "cookDinner", score: 1, reason: "rauhallisempi aikaisempi tekeminen sopii" },
  { question_id: "staysUpLate", answer_value: "no", activity_id: "bakeCake", score: 2, reason: "päivällä toimiva tekeminen sopii" },
  { question_id: "staysUpLate", answer_value: "no", activity_id: "games", score: 2, reason: "ei vaadi myöhäistä iltaa" },

  { question_id: "readyToTravel", answer_value: "yes", activity_id: "roadTrip", score: 4, reason: "matkustaminen onnistuu" },
  { question_id: "readyToTravel", answer_value: "yes", activity_id: "halti", score: 3, reason: "retkikohteet ovat mahdollisia" },
  { question_id: "readyToTravel", answer_value: "yes", activity_id: "arcticSwim", score: 3, reason: "kauempikin elämys onnistuu" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "roadTrip", score: -4, reason: "pitkä matkustaminen ei houkuttele" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "halti", score: -4, reason: "pitkä matkustaminen ei houkuttele" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "arcticSwim", score: -4, reason: "pitkä matkustaminen ei houkuttele" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "restaurantLunch", score: 1, reason: "läheltä löytyvä tekeminen sopii" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "theatre", score: 1, reason: "läheltä löytyvä tekeminen sopii" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "games", score: 1, reason: "läheltä löytyvä tekeminen sopii" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "bakeCake", score: 1, reason: "kotona tai lähellä toimiva vaihtoehto sopii" },
  { question_id: "readyToTravel", answer_value: "no", activity_id: "cookDinner", score: 1, reason: "kotona tai lähellä toimiva vaihtoehto sopii" },

  { question_id: "likesFancyClothes", answer_value: "yes", activity_id: "restaurantLunch", score: 2, reason: "siisti pukeutuminen sopii" },
  { question_id: "likesFancyClothes", answer_value: "yes", activity_id: "winePaint", score: 3, reason: "esteettinen fiilis sopii" },
  { question_id: "likesFancyClothes", answer_value: "yes", activity_id: "theatre", score: 3, reason: "hienompi tunnelma sopii" },
  { question_id: "likesFancyClothes", answer_value: "yes", activity_id: "dance", score: 2, reason: "tyylikkäämpi ilta voi toimia" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "sports", score: 3, reason: "käytännöllinen tekeminen sopii" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "cookDinner", score: 2, reason: "rento tekeminen sopii" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "bakeCake", score: 2, reason: "rento tekeminen sopii" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "halti", score: 2, reason: "käytännölliset vaatteet sopivat" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "roadTrip", score: 1, reason: "rento lähteminen sopii" },
  { question_id: "likesFancyClothes", answer_value: "no", activity_id: "games", score: 2, reason: "ei tarvitse pynttäytyä" },

  { question_id: "drinksAlcohol", answer_value: "yes", activity_id: "winePaint", score: 2, reason: "alkoholillinen konsepti ei haittaa" },
  { question_id: "drinksAlcohol", answer_value: "yes", activity_id: "pubQuiz", score: 2, reason: "pubimiljöö voi toimia" },
  { question_id: "drinksAlcohol", answer_value: "yes", activity_id: "studentEvent", score: 1, reason: "rennompi iltameno voi toimia" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "winePaint", score: -3, reason: "alkoholipainotteinen idea ei sovi" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "pubQuiz", score: -2, reason: "pubimiljöö ei ehkä ole paras" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "studentEvent", score: -1, reason: "ei ehkä tunnu omalta" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "bakeCake", score: 1, reason: "selkeä tekeminen sopii" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "cookDinner", score: 1, reason: "selkeä tekeminen sopii" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "theatre", score: 1, reason: "ei perustu alkoholiin" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "sports", score: 1, reason: "ei perustu alkoholiin" },
  { question_id: "drinksAlcohol", answer_value: "no", activity_id: "movieNight", score: 1, reason: "rauhallinen vaihtoehto sopii" },

  { question_id: "prefersDay", answer_value: "yes", activity_id: "restaurantLunch", score: 3, reason: "päivätreffi sopii" },
  { question_id: "prefersDay", answer_value: "yes", activity_id: "sports", score: 3, reason: "päiväaktiviteetti sopii" },
  { question_id: "prefersDay", answer_value: "yes", activity_id: "roadTrip", score: 2, reason: "päiväretki sopii" },
  { question_id: "prefersDay", answer_value: "yes", activity_id: "halti", score: 2, reason: "päiväretki sopii" },
  { question_id: "prefersDay", answer_value: "yes", activity_id: "bakeCake", score: 1, reason: "päivällä toimiva tekeminen sopii" },
  { question_id: "prefersDay", answer_value: "yes", activity_id: "arcticSwim", score: 1, reason: "päiväreissu sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "cookDinner", score: 2, reason: "ilta sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "standup", score: 3, reason: "ilta sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "theatre", score: 3, reason: "ilta sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "pubQuiz", score: 3, reason: "ilta sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "dance", score: 2, reason: "ilta sopii paremmin" },
  { question_id: "prefersDay", answer_value: "no", activity_id: "movieNight", score: 2, reason: "ilta sopii paremmin" },

  { question_id: "moneyMeansQuality", answer_value: "yes", activity_id: "theatre", score: 2, reason: "elämykseen panostaminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "yes", activity_id: "roadTrip", score: 2, reason: "elämykseen panostaminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "yes", activity_id: "arcticSwim", score: 2, reason: "elämykseen panostaminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "yes", activity_id: "winePaint", score: 1, reason: "elämyksellinen tekeminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "yes", activity_id: "restaurantLunch", score: 1, reason: "laadukkaampi ravintola sopii" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "cookDinner", score: 3, reason: "edullisempi tekeminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "bakeCake", score: 3, reason: "edullisempi tekeminen sopii" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "studentEvent", score: 2, reason: "budjettiin sopiva meno" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "games", score: 2, reason: "kohtuullisen edullinen vaihtoehto" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "restaurantLunch", score: 1, reason: "lounas voi olla kevyt budjettivaihtoehto" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "theatre", score: -2, reason: "voi tuntua liian hintavalta" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "arcticSwim", score: -2, reason: "reissu voi olla kallis" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "halti", score: -1, reason: "varusteet tai matka voivat maksaa" },
  { question_id: "moneyMeansQuality", answer_value: "no", activity_id: "roadTrip", score: -1, reason: "matkakulut voivat tuntua turhilta" },

  { question_id: "afraidAnimals", answer_value: "yes", activity_id: "halti", score: -1, reason: "luontopainotteinen tekeminen voi jännittää" },
  { question_id: "afraidAnimals", answer_value: "yes", activity_id: "roadTrip", score: -1, reason: "luontopainotteinen tekeminen voi jännittää" },
  { question_id: "afraidAnimals", answer_value: "yes", activity_id: "sports", score: -1, reason: "ulkopainotteinen tekeminen voi jännittää" },
  { question_id: "afraidAnimals", answer_value: "no", activity_id: "halti", score: 1, reason: "luonto ei pelota" },
  { question_id: "afraidAnimals", answer_value: "no", activity_id: "roadTrip", score: 1, reason: "luontoon liittyvä tekeminen voi sopia" },
  { question_id: "afraidAnimals", answer_value: "no", activity_id: "sports", score: 1, reason: "ulkona tekeminen voi sopia" },

  { question_id: "canDoCartwheel", answer_value: "yes", activity_id: "sports", score: 3, reason: "liikunnallinen tekeminen sopii" },
  { question_id: "canDoCartwheel", answer_value: "yes", activity_id: "dance", score: 2, reason: "kehollinen tekeminen sopii" },
  { question_id: "canDoCartwheel", answer_value: "yes", activity_id: "studentEvent", score: 1, reason: "aktiivinen meno voi sopia" },
  { question_id: "canDoCartwheel", answer_value: "no", activity_id: "theatre", score: 1, reason: "rauhallisempi elämys voi sopia" },
  { question_id: "canDoCartwheel", answer_value: "no", activity_id: "restaurantLunch", score: 1, reason: "rauhallisempi vaihtoehto voi sopia" },
  { question_id: "canDoCartwheel", answer_value: "no", activity_id: "winePaint", score: 1, reason: "rauhallisempi luova tekeminen voi sopia" },
  { question_id: "canDoCartwheel", answer_value: "no", activity_id: "cookDinner", score: 1, reason: "rauhallisempi yhteinen tekeminen voi sopia" },
  { question_id: "canDoCartwheel", answer_value: "no", activity_id: "movieNight", score: 1, reason: "rauhallisempi yhteinen tekeminen voi sopia" }
];

// ======================================================
// WHEEL
// ======================================================
const wheelCanvas = $("wheelCanvas");
const wheelCtx = wheelCanvas.getContext("2d");
let wheelRotation = 0;
let wheelSpinning = false;

// ======================================================
// DYNAMIC UI
// ======================================================
function currentTexts() {
  return i18n[state.lang];
}

function applyLanguageTexts() {
  const txt = currentTexts();

  $("languageTitle").textContent = txt.chooseLanguage;
  $("languageSubtitle").textContent = txt.languageSubtitle;
  $("languageContinueBtn").textContent = txt.continue;

  $("nameTitle").textContent = txt.whoAreYou;
  $("nameSubtitle").textContent = txt.whoAreYouSubtitle;
  $("nameInput").placeholder = txt.namePlaceholder;
  $("nameContinueBtn").textContent = txt.continue;

  $("colorTitle").textContent = fill(txt.colorTitle, { name: state.name || (state.lang === "fi" ? "ystävä" : "friend") });
  $("colorSubtitle").textContent = txt.colorSubtitle;
  $("colorContinueBtn").textContent = txt.continue;

  $("fontTitle").textContent = txt.fontTitle;
  $("fontSubtitle").textContent = txt.fontSubtitle;
  $("fontFactTitle").textContent = txt.fontFactTitle;
  $("fontContinueBtn").textContent = txt.continue;

  $("interestTitle").textContent = txt.interestTitle;
  $("interestText").textContent = fill(txt.interestText, { name: state.name || "" });
  $("declineBtn").textContent = txt.declineBtn;
  $("acceptBtn").textContent = txt.acceptBtn;

  $("declineTitle").textContent = txt.declineTitle;
  $("declineText").textContent = txt.declineText;
  $("declineFinishBtn").textContent = txt.realFinish;

  $("introTitle").textContent = txt.introTitle;
  $("introText").textContent = txt.introText;
  $("introContinueBtn").textContent = txt.continue;

  $("cvTitle").textContent = txt.cvTitle;
  $("cvAgeText").textContent = txt.cvAgeText;
  $("cvJobText").textContent = txt.cvJobText;
  $("cvNatureText").textContent = txt.cvNatureText;
  $("truthTitle").textContent = txt.truthTitle;
  $("truthSubtitle").textContent = txt.truthSubtitle;
  $("cvContinueBtn").textContent = txt.continue;

  $("methodTitle").textContent = txt.methodTitle;
  $("methodText").textContent = txt.methodText;
  $("methodQuestionsBtn").textContent = state.lang === "fi" ? "1) Vastaan kysymyksiin" : "1) Answer the questions";
  $("methodWheelBtn").textContent = state.lang === "fi" ? "2) Spin the wheel" : "2) Spin the wheel";

  $("q1Title").textContent = state.lang === "fi" ? "Kysymys 1 / 10" : "Question 1 / 10";
  $("q1Text").textContent = state.lang === "fi" ? "Haittaako jos kastut?" : "Does getting wet bother you?";
  $("q1ContinueBtn").textContent = txt.continue;

  $("q2Title").textContent = state.lang === "fi" ? "Kysymys 2 / 10" : "Question 2 / 10";
  $("q2Text").textContent = state.lang === "fi" ? "Pelkäätkö korkeita paikkoja?" : "Are you afraid of heights?";
  $("q2ContinueBtn").textContent = txt.continue;

  $("q3Title").textContent = state.lang === "fi" ? "Kysymys 3 / 10" : "Question 3 / 10";
  $("q3Text").textContent = state.lang === "fi" ? "Ruukkaatko valvoa myöhään?" : "Do you usually stay up late?";
  $("q3ContinueBtn").textContent = txt.continue;

  $("q4Title").textContent = state.lang === "fi" ? "Kysymys 4 / 10" : "Question 4 / 10";
  $("q4Text").textContent = state.lang === "fi" ? "Oletko valmis matkustamaan 150 km säteellä kodistasi?" : "Are you willing to travel within 150 km from home?";
  $("q4ContinueBtn").textContent = txt.continue;

  $("q5Title").textContent = state.lang === "fi" ? "Kysymys 5 / 10" : "Question 5 / 10";
  $("q5Text").textContent = state.lang === "fi"
    ? "Suositko tyylikkäitä ja hienoja vaatteita enemmän kuin rentoja käytännöllisiä vaatteita?"
    : "Do you prefer stylish clothes over relaxed practical clothes?";
  $("q5ContinueBtn").textContent = txt.continue;

  $("q6Title").textContent = state.lang === "fi" ? "Kysymys 6 / 10" : "Question 6 / 10";
  $("q6Text").textContent = state.lang === "fi" ? "Alkoholi?" : "Alcohol?";
  $("q6ContinueBtn").textContent = txt.continue;

  $("q7Title").textContent = state.lang === "fi" ? "Kysymys 7 / 10" : "Question 7 / 10";
  $("q7Text").textContent = state.lang === "fi" ? "Onko päivä parempi kuin ilta?" : "Is daytime better than evening?";
  $("q7ContinueBtn").textContent = txt.continue;

  $("q8Title").textContent = state.lang === "fi" ? "Kysymys 8 / 10" : "Question 8 / 10";
  $("q8Text").textContent = state.lang === "fi" ? "Onko rahankäyttö hyvän treffin tunnusmerkki?" : "Is spending money a sign of a good date?";
  $("q8ContinueBtn").textContent = txt.continue;

  $("q9Title").textContent = state.lang === "fi" ? "Kysymys 9 / 10" : "Question 9 / 10";
  $("q9Text").textContent = state.lang === "fi" ? "Pelkäätkö eläimiä?" : "Are you afraid of animals?";
  $("q9ContinueBtn").textContent = txt.continue;

  $("q10Title").textContent = state.lang === "fi" ? "Kysymys 10 / 10" : "Question 10 / 10";
  $("q10Text").textContent = state.lang === "fi" ? "Osaatko tehdä kuperkeikan tai kärrynpyörän?" : "Can you do a forward roll or a cartwheel?";
  $("q10ContinueBtn").textContent = state.lang === "fi" ? "Näytä tulos" : "Show result";

  $("questionResultTitle").textContent = txt.questionResultTitle;
  $("questionResultContinueBtn").textContent = txt.continue;

  $("wheelTitle").textContent = txt.wheelTitle;
  $("wheelSubtitle").textContent = txt.wheelSubtitle;
  $("wheelSpinBtn").textContent = txt.spin;
  $("wheelSpinAgainBtn").textContent = txt.spinAgain;
  $("wheelContinueBtn").textContent = txt.wheelContinue;

  $("chosenTitle").textContent = txt.chosenTitle;
  $("chosenText").textContent = fill(txt.chosenText, {
    name: state.name || "",
    activity: state.selectedActivity || "-"
  });
  $("chosenContinueBtn").textContent = txt.continue;

  $("contactMethodTitle").textContent = txt.contactMethodTitle;
  $("contactMethodSubtitle").textContent = txt.contactMethodSubtitle;

  $("contactInputTitle").textContent = txt.contactInputTitle;
  $("contactInputSubtitle").textContent = fill(txt.contactInputSubtitle, {
    method: state.contactMethod || "-"
  });
  $("contactInputContinueBtn").textContent = txt.continue;

  $("final1Title").textContent = txt.final1Title;
  $("final1Text").textContent = fill(txt.final1Text, {
    name: state.name || "",
    activity: state.selectedActivity || "-"
  });
  $("final1ContinueBtn").textContent = state.lang === "fi" ? "Lopeta" : "Finish";

  $("final2Title").textContent = txt.final2Title;
  $("final2Text").textContent = fill(txt.final2Text, {
    activity: state.selectedActivity || "-"
  });
  $("realFinishBtn").textContent = txt.realFinish;

  $("finishedTitle").textContent = txt.finishedTitle;
  $("finishedText").textContent = txt.finishedText;

  updateFontFact();
  drawWheel(wheelRotation);
}

function applyThemeColor(key) {
  const theme = colorThemes[key] || ["#ffffff", "#ffffff"];
  document.documentElement.style.setProperty("--bg1", theme[0]);
  document.documentElement.style.setProperty("--bg2", theme[1]);
}

function applyFont(fontValue) {
  document.documentElement.style.setProperty("--font-main", fontValue || "Arial, sans-serif");
}

function updateFontFact() {
  const val = $("fontSelect").value;
  if (!val) {
    $("fontFactBox").classList.add("hidden");
    return;
  }
  $("fontFactBox").classList.remove("hidden");
  $("fontFactText").textContent = fontFacts[state.lang][val];
}

// ======================================================
// FONT + COLOR
// ======================================================
$("colorSelect").addEventListener("change", (e) => {
  state.favoriteColor = e.target.value;
  applyThemeColor(state.favoriteColor);
});

$("fontSelect").addEventListener("change", (e) => {
  state.favoriteFont = e.target.value;
  applyFont(state.favoriteFont);
  updateFontFact();
});

// ======================================================
// STEP FLOW
// ======================================================
$("languageContinueBtn").addEventListener("click", () => {
  const selected = $("languageSelect").value;

  if (["fi", "en"].includes(selected)) {
    state.lang = selected;
    hideMessage("languageMessage");
  } else {
    state.lang = "en";
    setMessage("languageMessage", i18n.en.unsupportedLanguage, "info");
  }

  applyLanguageTexts();
  showStep("step-name");
});

$("nameContinueBtn").addEventListener("click", () => {
  const value = $("nameInput").value.trim();
  if (!value) {
    setMessage("nameMessage", currentTexts().nameRequired, "error");
    return;
  }
  hideMessage("nameMessage");
  state.name = value;
  $("colorTitle").textContent = fill(currentTexts().colorTitle, { name: state.name });
  $("interestText").textContent = fill(currentTexts().interestText, { name: state.name });
  showStep("step-color");
});

$("colorContinueBtn").addEventListener("click", () => {
  if (!$("colorSelect").value) {
    setMessage("colorMessage", currentTexts().colorRequired, "error");
    return;
  }
  hideMessage("colorMessage");
  showStep("step-font");
});

$("fontContinueBtn").addEventListener("click", () => {
  if (!$("fontSelect").value) {
    setMessage("fontMessage", currentTexts().fontRequired, "error");
    return;
  }
  hideMessage("fontMessage");
  showStep("step-interest");
});

$("declineBtn").addEventListener("click", () => {
  showStep("step-decline");
});

$("declineFinishBtn").addEventListener("click", () => {
  showStep("step-finished");
});

$("acceptBtn").addEventListener("click", () => {
  showStep("step-intro");
});

$("introContinueBtn").addEventListener("click", () => {
  showStep("step-cv");
});

// ======================================================
// TRUTH GAME
// ======================================================
document.querySelectorAll(".truth-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;

    btn.disabled = true;
    btn.classList.add("clicked");
    state.truthClicks += 1;

    if (state.truthClicks < 4) {
      setMessage("truthMessage", currentTexts().truthTryAgain, "error");
    } else {
      setMessage("truthMessage", currentTexts().truthFinal, "success");
      $("cvContinueBtn").classList.remove("hidden");
    }
  });
});

$("cvContinueBtn").addEventListener("click", () => {
  showStep("step-method");
});

// ======================================================
// METHOD CHOICE
// ======================================================
$("methodQuestionsBtn").addEventListener("click", () => {
  showStep("step-q1");
});

$("methodWheelBtn").addEventListener("click", () => {
  showStep("step-wheel");
});

// ======================================================
// QUESTION FLOW
// ======================================================
function getRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : "";
}

function bindQuestion(stepId, radioName, stateKey, nextStepId, messageId) {
  $(`${stepId}ContinueBtn`).addEventListener("click", () => {
    const value = getRadioValue(radioName);
    if (!value) {
      setMessage(messageId, currentTexts().qRequired, "error");
      return;
    }
    hideMessage(messageId);
    state.answers[stateKey] = value;
    showStep(nextStepId);
  });
}

bindQuestion("q1", "q1", "gettingWetBothers", "step-q2", "q1Message");
bindQuestion("q2", "q2", "afraidHeights", "step-q3", "q2Message");
bindQuestion("q3", "q3", "staysUpLate", "step-q4", "q3Message");
bindQuestion("q4", "q4", "readyToTravel", "step-q5", "q4Message");
bindQuestion("q5", "q5", "likesFancyClothes", "step-q6", "q5Message");
bindQuestion("q6", "q6", "drinksAlcohol", "step-q7", "q6Message");
bindQuestion("q7", "q7", "prefersDay", "step-q8", "q7Message");
bindQuestion("q8", "q8", "moneyMeansQuality", "step-q9", "q8Message");
bindQuestion("q9", "q9", "afraidAnimals", "step-q10", "q9Message");

$("q10ContinueBtn").addEventListener("click", () => {
  const value = getRadioValue("q10");
  if (!value) {
    setMessage("q10Message", currentTexts().qRequired, "error");
    return;
  }
  hideMessage("q10Message");
  state.answers.canDoCartwheel = value;
  calculateAndRenderResult();
  showStep("step-question-result");
});

// ======================================================
// ACTIVITY CALCULATION
// ======================================================
function calculateAndRenderResult() {
  const scores = {};
  const reasons = {};

  Object.keys(activities).forEach(id => {
    scores[id] = 0;
    reasons[id] = [];
  });

  logicTable.forEach(rule => {
    if (state.answers[rule.question_id] === rule.answer_value) {
      scores[rule.activity_id] += rule.score;
      reasons[rule.activity_id].push(rule.reason);
    }
  });

  const ranked = Object.keys(activities)
    .map(id => ({
      id,
      name: activities[id][state.lang],
      score: scores[id],
      reasons: [...new Set(reasons[id])]
    }))
    .sort((a, b) => b.score - a.score);

  state.selectedActivity = ranked[0].name;
  $("chosenText").textContent = fill(currentTexts().chosenText, {
    name: state.name || "",
    activity: state.selectedActivity
  });
  $("final1Text").textContent = fill(currentTexts().final1Text, {
    name: state.name || "",
    activity: state.selectedActivity
  });
  $("final2Text").textContent = fill(currentTexts().final2Text, {
    activity: state.selectedActivity
  });

  const best = ranked[0];
  const others = ranked.slice(1, 4);

  $("questionResultContent").innerHTML = `
    <div class="result-card">
      <h2>${currentTexts().bestMatch}</h2>
      <p><strong>${best.name}</strong></p>
      <p>${best.reasons.slice(0, 3).join(" • ")}</p>
      <p><small>${state.lang === "fi" ? "Pisteet" : "Score"}: ${best.score}</small></p>
    </div>

    <div class="result-list">
      <h3>${currentTexts().otherOptions}</h3>
      ${others.map(item => `
        <div class="result-card">
          <strong>${item.name}</strong>
          <p>${item.reasons.slice(0, 3).join(" • ")}</p>
          <p><small>${state.lang === "fi" ? "Pisteet" : "Score"}: ${item.score}</small></p>
        </div>
      `).join("")}
    </div>
  `;
}

$("questionResultContinueBtn").addEventListener("click", () => {
  showStep("step-chosen");
});

// ======================================================
// WHEEL
// ======================================================
function drawWheel(rotation = 0) {
  const ctx = wheelCtx;
  const labels = wheelActivityIds.map(id => activities[id][state.lang]);
  const total = labels.length;
  const slice = (Math.PI * 2) / total;
  const cx = wheelCanvas.width / 2;
  const cy = wheelCanvas.height / 2;
  const radius = 240;

  ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);

  labels.forEach((label, i) => {
    const start = i * slice;
    const end = start + slice;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, start, end);
    ctx.closePath();

    const hue = Math.round((360 / total) * i);
    ctx.fillStyle = `hsl(${hue}, 80%, 78%)`;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#111111";
    ctx.font = "15px Arial";
    wrapText(ctx, label, radius - 18, 0, 115, 16);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(0, 0, 42, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.restore();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  const lines = [];

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const width = ctx.measureText(testLine).width;
    if (width > maxWidth && i > 0) {
      lines.push(line.trim());
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());

  const totalHeight = lines.length * lineHeight;
  const startY = y - totalHeight / 2;

  lines.forEach((ln, idx) => {
    ctx.fillText(ln, x, startY + idx * lineHeight);
  });
}

function getWinningIndex(rotation) {
  const total = wheelActivityIds.length;
  const slice = (Math.PI * 2) / total;
  const normalized = rotation % (Math.PI * 2);
  const pointerAngle = (Math.PI * 2 - normalized + Math.PI / 2) % (Math.PI * 2);
  let index = Math.floor(pointerAngle / slice);
  index = (total - index) % total;
  return index;
}

function spinWheel() {
  if (wheelSpinning || state.wheelSpins >= 3) return;
  wheelSpinning = true;

  const total = wheelActivityIds.length;
  const slice = (Math.PI * 2) / total;
  const targetIndex = Math.floor(Math.random() * total);
  const extraSpins = 5 + Math.random() * 2;
  const targetAngle =
    (Math.PI * 2 * extraSpins) + ((Math.PI * 2) - (targetIndex * slice) - slice / 2);

  const start = wheelRotation;
  const end = start + targetAngle;
  const duration = 3200;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    wheelRotation = start + (end - start) * eased;
    drawWheel(wheelRotation);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelSpinning = false;
      state.wheelSpins += 1;

      const winningIndex = getWinningIndex(wheelRotation);
      const winnerId = wheelActivityIds[winningIndex];
      const winnerName = activities[winnerId][state.lang];
      state.selectedActivity = winnerName;

      $("chosenText").textContent = fill(currentTexts().chosenText, {
        name: state.name || "",
        activity: state.selectedActivity
      });
      $("final1Text").textContent = fill(currentTexts().final1Text, {
        name: state.name || "",
        activity: state.selectedActivity
      });
      $("final2Text").textContent = fill(currentTexts().final2Text, {
        activity: state.selectedActivity
      });

      if (state.wheelSpins < 3) {
        $("wheelSpinAgainBtn").classList.remove("hidden");
      } else {
        $("wheelSpinAgainBtn").classList.add("hidden");
      }

      $("wheelContinueBtn").classList.remove("hidden");

      if (state.wheelSpins >= 3) {
        setMessage("wheelMessage", `${currentTexts().wheelPicked} ${winnerName}. ${currentTexts().wheelDone}`, "success");
      } else {
        setMessage("wheelMessage", `${currentTexts().wheelPicked} ${winnerName}`, "success");
      }
    }
  }

  requestAnimationFrame(animate);
}

$("wheelSpinBtn").addEventListener("click", spinWheel);

$("wheelSpinAgain
// STATE
// ======================================================
const state = {
  lang: "fi",
  name: "",
  favoriteColor: "",
  favoriteFont: "Arial, sans-serif",
