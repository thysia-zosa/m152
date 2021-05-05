/**
 * gibt alle Klassenelemente von "Mine" zurück.
 */
let mine = document.getElementsByClassName("Mine");
let weekdays = [
  "Κυριακή",
  "Δευτέρα",
  "Τρίτη",
  "Τετάρτη",
  "Πέμπτη",
  "Παρασκευη",
  "Σάββατον",
]
let months = [
  "Νισᾶνος",
  "Εἰᾶρος",
  "Σιουᾶνος",
  "Θαμμούζου",
  "Ἐλούλου",
  "Ἀβάδος",
  "Θησρῖτος",
  "Μαρσουάνου",
  "Χασελεύου",
  "Τηβήθου",
  "Σαβάτεως",
  "Δευτεραδᾶρος",
];
// nördliche Breite
const phi = 47.475683 * Math.PI / 180;
// Abweichung von der mittleren Zeitzone
const delay = 1973388;
let dayInYear;
// // Abweichung vom mittleren Sonnenauf- / -untergangswinkel
// let epsilon;
// Länge eines Halbtags zwischen Mittag und Sonnenauf/untergang
let halfDay;
// Zeitpunkt von Sonnenauf-/untergang
let sunSetBefore;
let sunRise;
let sunSet;
let sunRiseNext;
// Milisekunden seit Mitternacht
let miliSeconds;
let greekDate;
let miliSecsSinceSun;
let nightDayTime;
let hours;
let minutes;
let seconds;

/**
 * eine vereinfachte Form für die Abrundung.
 */
function floor(x) {
  return Math.floor(x);
}

/**
 * Gibt das Lunisolardatum zurück in Form von "01.01.7525". Der Tag beginnt um 18:00 am Vorabend (mittlerer Sonnenuntergang).
 */
function getToday(date) {
  date.setHours(date.getHours() + 6);
  let myYear = date.getFullYear();
  let myMonth = date.getMonth();
  let myDay = date.getDate();
  let result = getMyDate(myYear, myMonth, myDay);
  return [weekdays[date.getDay()] + ", ἡ " + greek(result[0]) + " τοῦ " + months[result[1] - 1], "ἔτῃ τῇ τοῦ κόσμου " + greek(result[2])];
}

/**
 * Konvertiert eine sechsstellige arabische Zahl in das griechische Äquivalent.
 */
function greek(number) {
  let numberString = "";
  let chiliades = floor(number / 1000);
  let hypoChiliades = number % 1000;
  if (chiliades > 0) {
    numberString += "͵";
    numberString += getGreekNum(chiliades);
  }
  // if (chiliades > 0 && hypoChiliades > 0) {
  //   numberString += ".";
  // }
  if (hypoChiliades > 0) {
    numberString += getGreekNum(hypoChiliades);
    numberString += "ʹ";
  }
  return numberString;
}

/**
 * Konvertiert eine dreistellige arabische Zahl in das griechische Äquivalent.
 */
function getGreekNum(number) {
  let numberString = "";
  let hekatoi = floor(number / 100);
  let dekades = floor(number / 10) % 10;
  let enades = number % 10;

  switch (hekatoi) {
    case 1:
      numberString += "ρ";
      break;
    case 2:
      numberString += "σ";
      break;
    case 3:
      numberString += "τ";
      break;
    case 4:
      numberString += "υ";
      break;
    case 5:
      numberString += "φ";
      break;
    case 6:
      numberString += "χ";
      break;
    case 7:
      numberString += "ψ";
      break;
    case 8:
      numberString += "ω";
      break;
    case 9:
      numberString += "ϡ";
      break;
    default:
  }

  switch (dekades) {
    case 1:
      numberString += "ι";
      break;
    case 2:
      numberString += "κ";
      break;
    case 3:
      numberString += "λ";
      break;
    case 4:
      numberString += "μ";
      break;
    case 5:
      numberString += "ν";
      break;
    case 6:
      numberString += "ξ";
      break;
    case 7:
      numberString += "ο";
      break;
    case 8:
      numberString += "π";
      break;
    case 9:
      numberString += "ϟ";
      break;
    default:
  }

  switch (enades) {
    case 1:
      numberString += "α";
      break;
    case 2:
      numberString += "β";
      break;
    case 3:
      numberString += "γ";
      break;
    case 4:
      numberString += "δ";
      break;
    case 5:
      numberString += "ε";
      break;
    case 6:
      numberString += "ϝ";
      break;
    case 7:
      numberString += "ζ";
      break;
    case 8:
      numberString += "η";
      break;
    case 9:
      numberString += "θ";
      break;
    default:
  }

  return numberString;
}

/**
 * Berechnet das Lunisolardatum.
 * goldenNumber: die Goldene Zahl.
 * epact: Die Epakte.
 * epactGrowth: der Unterschied zur Epakte des Vorjahres.
 * dayInYear: der Tag im Jahr.
 * epactDay: die Luna (Tag im Mondmonat).
 * epactMonth: der Mondmonat im Jahr.
 * epactYear: die Jahreszahl
 */
function getMyDate(year, month, day) {
  let goldenNumber = getGoldenNumber(year);
  let epact = getEpact(year, goldenNumber);
  let epactGrowth = (30 + epact - getEpact(year - 1, getGoldenNumber(year - 1))) % 30;
  let dayInYear = getDayInYear(year, month, day);
  let epactDay = getEpactDay(epactGrowth, goldenNumber, epact, dayInYear);
  let epactMonth = getEpactMonth(goldenNumber, epact, dayInYear, epactDay, epactGrowth);
  let epactYear = getEpactYear(year, dayInYear, epactDay);
  return [epactDay, epactMonth, epactYear];
}

/**
 * Gibt die Epakte des Jahres zurück.
 */
function getEpact(year, goldenNumber) {
  let aequatioSolaris = getAequatioSolaris(year);
  let aequatioLunaris = getAequatioLunaris(year);
  return (27 + 11 * goldenNumber + aequatioLunaris - aequatioSolaris) % 30;
}

/**
 * Gibt die Goldene Zahl des Jahres zurück: Die Jahreszahl geteilt durch 19, davon der Rest, plus 1. Ergibt eine Ganzzahl zwischen 1 und 19, beide inklusive.
 */
function getGoldenNumber(year) {
  return year % 19 + 1;
}

/**
 * Gibt die Æquatio solaris zurück: die Anzahl der Jahre seit der Zeitenwende, die durch 100, aber nicht durch 400 teilbar sind. In diesen wurde die Epakte um 1 reduziert.
 */
function getAequatioSolaris(year) {
  return floor(floor(year / 100 + 1) * 3 / 4);
}

/**
 * Gibt die Æquatio lunaris zurück: die Anzahl der Jahre seit der Zeitenwende, in denen die Epakte um 1 erhöht wurde. Dies geschieht 8 mal in 2500 Jahren.
 */
function getAequatioLunaris(year) {
  return floor(floor(year / 100 + 11) * 8 / 25 - 3);
}

/**
 * Gibt zurück, ob das Jahr ein Schaltjahr ist.
 */
function isLeapYear(year) {
  return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

/**
 * Gibt zurück, der wievielte Tag des Jahres das Datum ist. In Schaltjahren wird der 24. und 25. Februar als 1 Tag gezählt.
 */
function getDayInYear(year, month, day) {
  let months = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
  ];
  if (isLeapYear(year) && month === 1 && day > 24) {
    day--;
  }
  return months[month] + day;
}

/**
 * Berechnet die Luna des Datums.
 */
function getEpactDay(epactGrowth, goldenNumber, epact, dayInYear) {
  // Spezialregel für den 31. Dezember in einem Jahr mit Epakte und Goldener Zahl von 19.
  if (dayInYear === 365 && epact === 19 && goldenNumber === 19) {
    return 1;
  }

  // die Tage seit dem letzten Neumond des Vorjahres inklusive.
  let initial = dayInYear + epact;
  // Sonderregel für den ersten Mond.
  // TODO: Wofür das Ganze?
  if (initial < 31) {
    // bei einer doppelt erhöhten Epaktenerhöhung wird 1 zusätzlich abgezogen.
    if (epactGrowth > 12 && epact > 2) {
      initial--;
    }
    // Zieht im 1 Jahr des 19erZyklusses 1 ab, da dann die Epakte 12 statt 11 erhöht wird.
    return initial - (goldenNumber > 1 ? 0 : 1);
  }

  // Zwei sukzessive Mondmonate dauern 30 + 29 = 59 Tage. Berechnet wird der Rest nach Abzug der geraden Anzahl Monate.
  let twoMonthRest = (initial - 1) % 59 + 1;
  // Falls die Epakte < 25 oder die "schwarze 25" ist, hat der ungerade Monat 30, der gerade Monat 29 Tage; ansonsten ist es umgekehrt.
  if (epact < 25 || (epact = 25 && goldenNumber > 11)) {
    return (twoMonthRest - 1) % 30 + 1;
  } else {
    if (twoMonthRest < 30) {
      return twoMonthRest;
    } else {
      return twoMonthRest - 29;
    }
  }
}

/**
 * Gibt den Mondmonat im Lunisolarjahr an, beginnend mit dem Paschamond.
 */
function getEpactMonth(goldenNumber, epact, dayInYear, epactDay, epactGrowth) {
  // Der Tag im Jahr, an dem der Monat begonnen hat.
  let beginOfMonth = dayInYear - epactDay;
  let month;
  // Verteilung der Monatsanfänge im Normaljahr.
  switch (true) {
    case (beginOfMonth < -4):
      month = 10;
      break;
    case (beginOfMonth < 26):
      month = 11;
      break;
    case (beginOfMonth < 55):
      month = 12;
      break;
    case (beginOfMonth < 66):
      month = 13;
      break;
    case (beginOfMonth < 95):
      month = 1;
      break;
    case (beginOfMonth < 125):
      month = 2;
      break;
    case (beginOfMonth < 154):
      month = 3;
      break;
    case (beginOfMonth < 184):
      month = 4;
      break;
    case (beginOfMonth < 213):
      month = 5;
      break;
    case (beginOfMonth < 243):
      month = 6;
      break;
    case (beginOfMonth < 272):
      month = 7;
      break;
    case (beginOfMonth < 302):
      month = 8;
      break;
    case (beginOfMonth < 331):
      month = 9;
      break;
    default:
      month = 10;
  }

  // Sonderregeln für Sonderjahre
  if (beginOfMonth < 55) {
    switch (epactGrowth) {
      case 13:
        if (epact < 7 && epact > 4) {
          month++;
        }
        break;
      case 12:
        if (epact === 5) {
          month++;
        }
        break;
      case 10:
        if (epact === 4) {
          month--;
        }
        break;
      default:

    }
  }
  return month;
}

/**
 * Gibt die Jahreszahl des Lunisolarjahres gemäss Septuaginta zurück.
 * Epoche ist der 15. September 5505 v. Chr.
 */
function getEpactYear(year, dayInYear, epactDay) {
  let epactYear = year + 5504;

  // Nach Neujahr.
  if ((dayInYear - epactDay) > 242) {
    epactYear++;
  }
  return epactYear;
}

/**
 * Gibt das Datum in Form von "zondag 1 januari 2000" aus.
 */
function getDate(date) {
  let days = [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag"
  ];
  let months = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "october",
    "november",
    "december"
  ];
  return days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
}

/**
 * Wählt den für die Stunde passenden Gruss aus.
 */
function getGreeting(date) {
  let greetings = [
    "Καλὸν ὕπνον",
    "Καλὰ ἡμερούδια",
    "Καλὴν ἡμέραν",
    "Χαῖρε",
    "Καλὸν ἀπόγευμα",
    "Καλὴν ἑσπέραν",
    "Καλὴν νύκτα"
  ]
  let greeting;
  switch (date.getHours()) {
    case 0:
    case 1:
    case 2:
      greeting = greetings[0];
      break;
    case 3:
    case 4:
    case 5:
      greeting = greetings[1];
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      greeting = greetings[2];
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      greeting = greetings[3];
      break;
    case 14:
    case 15:
    case 16:
    case 17:
      greeting = greetings[4];
      break;
    case 18:
    case 19:
    case 20:
    case 21:
      greeting = greetings[5];
      break;
    case 22:
    case 23:
      greeting = greetings[6];
      break;

    default:

  }
  return greeting;
}

function getHalfDay(day) {
  let epsilon = 23.43 * Math.PI / 180 * Math.sin((day - 80) * Math.PI / 182.5);
  return Math.acos(-Math.tan(epsilon) * Math.tan(phi)) * 43200000 / Math.PI;
}

/**
 * Schreibt das niederländische Datum, den Gruss und das griechische Datum in die entsprechenden Felder.
 * Wird alle 60 Sekunden ausgeführt.
 */
function setDate() {
  let date = new Date();
  dayInYear = getDayInYear(date.getFullYear(), date.getMonth(), date.getDate());
  // epsilon = getEpsilon(dayInYear);
  // Länge eines Halbtags zwischen Mittag und Sonnenauf/untergang
  halfDay = getHalfDay(dayInYear);
  sunRise = 43200000 - delay - halfDay;
  sunSet = 43200000 - delay + halfDay;
  sunSetBefore = 43200000 - delay + getHalfDay(dayInYear - 1);
  sunRiseNext = 43200000 - delay - getHalfDay(dayInYear + 1);
  mine[3].innerHTML = getGreeting(date);
  greekDate = getToday(date);
  mine[0].innerHTML = greekDate[0];
  mine[2].innerHTML = greekDate[1];
  setTimeout(setDate, 60000)
}

/**
 * Schreibt die Zeit in das entsprechende Feld.
 * Wird alle 200 Milisekunden ausgeführt.
 */
function setTime() {
  let date = new Date();
  miliSeconds = date.getTime() % 86400000;
  mine[1].innerHTML = getSunTime();
  setTimeout(setTime, 200);
}

function getSunTime() {
  switch (true) {
    case (miliSeconds < sunRise):
    beforeSunRise();
    break;
    case (miliSeconds < sunSet):
    atDayTime();
    break;
    default:
    afterSunSet();
  }
  hours = floor(nightDayTime / 3600);
  minutes = floor(nightDayTime / 60) % 60;
  seconds = nightDayTime % 60;
  return twoCijfers(hours) + ":" + twoCijfers(minutes) + ":" + twoCijfers(seconds);
}

function beforeSunRise() {
  // return "vor Sonnenaufgang";
  let halfNight = 86400000 - halfDay - getHalfDay(dayInYear - 1);
  miliSecsSinceSun = miliSeconds - sunSetBefore + 86400000;
  nightDayTime = floor(43200 * miliSecsSinceSun / halfNight);
}

function atDayTime() {
  // return "am Tag";
  miliSecsSinceSun = miliSeconds - sunRise;
  nightDayTime = floor(21600 * miliSecsSinceSun / halfDay);
}

function afterSunSet() {
  // return "nach Sonnenuntergang";
  let halfNight = 86400000 - halfDay - getHalfDay(dayInYear + 1);
  miliSecsSinceSun = miliSeconds - sunSet;
  nightDayTime = floor(43200 * miliSecsSinceSun / halfNight);
}

const twoCijfers = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

setDate();
setTime();
