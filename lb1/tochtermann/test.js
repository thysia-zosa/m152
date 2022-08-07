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

getMyDate(2022,0,4);

function getGoldenNumber(year) {
  return year % 19 + 1;
}
function getEpact(year, goldenNumber) {
  let aequatioSolaris = getAequatioSolaris(year);
  let aequatioLunaris = getAequatioLunaris(year);
  return (27 + 11 * goldenNumber + aequatioLunaris - aequatioSolaris) % 30;
}
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
function getEpactDay(epactGrowth, goldenNumber, epact, dayInYear) {
  if (dayInYear === 365 && epact === 19 && goldenNumber === 19) {
    return 1;
  }
  let initial = dayInYear + epact;
  if (initial < 31) {
    if (epactGrowth > 12 && epact > 2) {
      initial--;
    }
    return initial - (goldenNumber > 1 ? 0 : 1);
  }
  let twoMonthRest = (initial - 1) % 59 + 1;
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
function getEpactMonth(goldenNumber, epact, dayInYear, epactDay, epactGrowth) {
  let beginOfMonth = dayInYear - epactDay;
  let month;
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
function getAequatioSolaris(year) {
  return floor(floor(year / 100 + 1) * 3 / 4);
}
function getAequatioLunaris(year) {
  return floor(floor(year / 100 + 11) * 8 / 25 - 3);
}
function floor(x) {
  return Math.floor(x);
}
function getEpactYear(year, dayInYear, epactDay) {
  let epactYear = year + 5504;
  if ((dayInYear - epactDay) > 242) {
    epactYear++;
  }
  return epactYear;
}
function isLeapYear(year) {
  return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

