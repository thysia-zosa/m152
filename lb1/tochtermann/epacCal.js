/**
 * gibt alle Klassenelemente von "Mine" zurück.
 */
let mine = document.getElementsByClassName("Mine");
let date;
let isSet = false;
let isSetDay;
let isDay;
let weekdays = [
  "Herendag",
  "Tweedag",
  "Driedag",
  "Vierdag",
  "Vijfdag",
  "Vorbereidingsdag",
  "Sabbat",
]
let months = [
  "Twaalfmaand",
  "Lentemaand",
  "Tweemand",
  "Driemand",
  "Viermaand",
  "Vijfmaand",
  "Zesmaand",
  "Zevenmaand",
  "Achtmaand",
  "Negenmaand",
  "Tienmaand",
  "Elfmaand",
  "Schrikkelmaand",
];
let arabMonths = [
  "Moeharram",
  "Safar",
  "Rabi 1",
  "Rabi 2",
  "Djoemada 1",
  "Djoemada 2",
  "Radjab",
  "Sjaban",
  "Ramadan",
  "Sjauwal",
  "Doelkada",
  "Doelhidja",
]
// nördliche Breite
const phi = 47.475683 * Math.PI / 180;
const sineInvSun = - Math.sin(Math.PI / 360);
// Abweichung von der mittleren Zeitzone
const delay = 1973388;
let eqOfTime;
let dayInYear;
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
let partTime;
let hours;
let stundenzeiger = document.getElementById('stunde');
let minutenzeiger = document.getElementById('minute');

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
  if ((date.getTime() % 86400000) > sunSet) {
    date.setDate(date.getDate() + 1);
  }
  let myYear = date.getFullYear();
  let myMonth = date.getMonth() + 1;
  let myDay = date.getDate();
  let result = getMyDate(myYear, myMonth, myDay);
  let arabResult = getArabResult(date, result[0]);
  return [weekdays[date.getDay()] + ", " + result[0] + "." + result[1], arabMonths[arabResult[0]] + " " + arabResult[1]];
}

function getArabResult(date, dayOfMoon) {
  let daysSinceEpoch = date.getTime() / 86400000 + 492148 - dayOfMoon;
  let moonsSinceEpoch = (daysSinceEpoch*360/10631).toFixed();
  let moon = moonsSinceEpoch % 12;
  let year = (moonsSinceEpoch / 12 + 1).toFixed();
  return [moon, year];
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
  let epactMonth = getEpactMonth(epact, dayInYear, epactDay, epactGrowth);
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
  let ly = isLeapYear(year);
  let t = ly ? 1 : 2;
  let firstTerm = floor((275 * month) / 9);
  let secondTerm = t * floor((month + 9) / 12);
  let result = firstTerm - secondTerm + day - 30;
  result -= ly && result > 55 ? 1 : 0;
  return result;
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
    if (epactGrowth > 11) {
      initial += 11 - epactGrowth;
      if (epact < 2 && goldenNumber === 1 || epact === 0) {
        initial += 1;
      }
    }
    // Zieht im 1 Jahr des 19erZyklusses 1 ab, da dann die Epakte 12 statt 11 erhöht wird.
    return initial;
  }

  // Zwei sukzessive Mondmonate dauern 30 + 29 = 59 Tage. Berechnet wird der Rest nach Abzug der geraden Anzahl Monate.
  let twoMonthRest = (initial - 31) % 59 + 1;
  // Falls die Epakte < 25 oder die "schwarze 25" ist, hat der ungerade Monat 30, der gerade Monat 29 Tage; ansonsten ist es umgekehrt.
  if (epact < 25 || (epact = 25 && goldenNumber > 11)) {
    if (twoMonthRest < 30) {
      return twoMonthRest;
    } else {
      return twoMonthRest - 29;
    }
  } else {
    return (twoMonthRest - 1) % 30 + 1;
  }
}

/**
 * Gibt den Mondmonat im Lunisolarjahr an, beginnend mit dem Paschamond.
 */
function getEpactMonth(epact, dayInYear, epactDay, epactGrowth) {
  // Der Tag im Jahr, an dem der Monat begonnen hat.
  let beginOfMonth = dayInYear - epactDay;
  let month;
  if (beginOfMonth > 65) {
    month = Math.round((beginOfMonth - 66 + (epact + 6) % 30) / 29.5);
  } else {
    var oldEpact = (epact + 30 - epactGrowth) % 30;
    month = Math.round((beginOfMonth + 299 + (oldEpact + 6) % 30) / 29.5);
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
function getGreeting() {
  let greetings = [
    "Nachtgebed",
    "Dagsluiting",
    "Middernacht",
    "Morgengebed",
    "Voormiddag",
    "Middaggebed",
    "Avondgebed",
  ]
  let greeting;
  let dayNightHour = isDay ? 12 : 0;
  switch (hours + dayNightHour) {
    case 0:
      greeting = greetings[0];
      break;
    case 1:
      greeting = greetings[1];
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      greeting = greetings[2];
      break;
    case 11:
      greeting = greetings[3];
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      greeting = greetings[4];
      break;
    case 18:
    case 19:
    case 20:
      greeting = greetings[5];
      break;
    case 21:
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
  return Math.acos((sineInvSun - Math.sin(epsilon) * Math.sin(phi)) /  (Math.cos(epsilon) * Math.cos(phi))) * 43200000 / Math.PI;
}

function getEqOfTime(day) {
  return - 615600 * Math.sin(0.0337 * day + 0.465) - 442440 * Math.sin(0.01787 * day - 0.168);
}

/**
 * Schreibt das niederländische Datum, den Gruss und das griechische Datum in die entsprechenden Felder.
 * Wird alle 60 Sekunden ausgeführt.
 */
function setDate() {
  isSet = true;
  let newDate = date;
  dayInYear = getDayInYear(date.getFullYear(), date.getMonth() + 1, date.getDate());
  // Länge eines Halbtags zwischen Mittag und Sonnenauf/untergang
  halfDay = getHalfDay(dayInYear);
  eqOfTime = getEqOfTime(dayInYear);
  sunRise = 43200000 - delay - eqOfTime - halfDay;
  sunSet = 43200000 - delay - eqOfTime + halfDay;
  sunSetBefore = 43200000 - delay - eqOfTime + getHalfDay(dayInYear - 1);
  sunRiseNext = 43200000 - delay - eqOfTime - getHalfDay(dayInYear + 1);
  greekDate = getToday(date);
  mine[0].innerHTML = greekDate[0];
  mine[1].innerHTML = greekDate[1];
}

/**
 * Schreibt die Zeit in das entsprechende Feld.
 * Wird alle 200 Milisekunden ausgeführt.
 */
function setTime() {
  date = new Date();
  miliSeconds = date.getTime() % 86400000;
  setDate();
  getSunTime();
  mine[2].innerHTML = getGreeting();
  setTimeout(setTime, 1000);
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
  stundenzeiger.setAttribute('transform', 'rotate(' + 360 * partTime + ', 3080, 9709)')
  minutenzeiger.setAttribute('transform', 'rotate(' + 4320 * partTime + ', 3080, 9709)')
}

function beforeSunRise() {
  isDay = false;
  let halfNight = 86400000 - halfDay - getHalfDay(dayInYear - 1);
  miliSecsSinceSun = miliSeconds - sunSetBefore + 86400000;
  partTime = miliSecsSinceSun / halfNight;
  nightDayTime = floor(43200 * miliSecsSinceSun / halfNight);
}

function atDayTime() {
  isDay = true;
  miliSecsSinceSun = miliSeconds - sunRise;
  partTime = miliSecsSinceSun / halfDay / 2;
  nightDayTime = floor(21600 * miliSecsSinceSun / halfDay);
}

function afterSunSet() {
  isDay = false;
  let halfNight = 86400000 - halfDay - getHalfDay(dayInYear + 1);
  miliSecsSinceSun = miliSeconds - sunSet;
  partTime = miliSecsSinceSun / halfNight;
  nightDayTime = floor(43200 * miliSecsSinceSun / halfNight);
}

setTime();

function getPrayerTimes() {
  const gebedenTijden = new Map([
    ['morgenGebed', sunRise + halfDay / 6],
    ['middagGebed', sunRise + halfDay + 7200000],
    ['avondGebed', sunRise + 3 * halfDay / 2 + 7200000],
    ['nachtGebed', sunSet + 7200000],
    ['dagsluiting', sunSet - halfDay / 6 + 14400000],
  ]);
  gebedenTijden.forEach((value, key) => {
    console.log(key + ': ' + getTimeFromStamp(value));
  });
}

function toFix(number, length) {
  let numbString = parseInt(number).toString();
  let zeroes = '0'.repeat(length - numbString.length);
  return zeroes + numbString;
}

function to2fix(number) {
  return toFix(number, 2);
}

function getTimeFromStamp(timeStamp) {
  return to2fix(timeStamp / 3600000) + ':' + to2fix(timeStamp % 3600000 / 60000) + ':' + to2fix(timeStamp % 60000 / 1000);
}
