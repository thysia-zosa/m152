// var EpaktFeld = new Array(
//     "XXIII",
//     "XXII", 
//     "XXI", 
//     "XX", 
//     "XIX", 
//     "XVIII", 
//     "XVII", 
//     "XVI", 
//     "XV", 
//     "XIV", 
//     "XIII", 
//     "XII", 
//     "XI", 
//     "X", 
//     "IX", 
//     "VIII", 
//     "VII", 
//     "VI", 
//     "V", 
//     "IV", 
//     "III", 
//     "II", 
//     "I", 
//     " * ", 
//     "XXIX", 
//     "XXVIII", 
//     "XXVII", 
//     "XXVI", 
//     "XXV", 
//     "XXIV", 
//     "25"
// );

// var ChrMonth = new Array(
//     "christl. Monate", 
//     "Januar", 
//     "Februar", 
//     "März", 
//     "April", 
//     "Mai", 
//     "Juni", 
//     "Juli", 
//     "August", 
//     "September", 
//     "Oktober", 
//     "November", 
//     "Dezember"
// );

// var WoTage = new Array(
//     "Montag", 
//     "Dienstag", 
//     "Mittwoch", 
//     "Donnerstag", 
//     "Freitag", 
//     "Samstag", 
//     "Sonntag"
// );

// var Littera = new Array("f", "e", "d", "c", "b", "A", "g");

// var GZ, GD, GM, EP, KK, SB, Luna;

function floor(x) {
    return Math.floor(x)
}

function mod(n, d) {
    var q = n % d;
    if (q < 0) {
        q = d + q;
    }
    return q
}

// function Datum(Tag, WoTa, Monat, MonStr, Jahr) {
//     this.Tag = Tag;
//     this.WoTa = WoTa;
//     this.Monat = Monat;
//     this.MonStr = MonStr;
//     this.Jahr = Jahr
// }

// function DatStringLang(Dat) {
//     var a = Dat.WoTa;
//     var b = Dat.Tag;
//     var c = Dat.MonStr;
//     var d = Dat.Jahr;
//     var x = a + ", " + b + ". " + c + " " + d;
//     return x
// }


// // *****DatumsFunktionen*****
// function getDay(d, m, y) {
//     m -= 3;
//     if (m < 0) { m += 12; y--; }
//     var x = floor(y * 365.25) + floor(m * 30.6 + 0.5) + d + 1721117;
//     x = x - (floor(y / 100) - floor(y / 400) - 2);
//     return x
// }


// //*********DatumsFunktionenAus*****

// function makeDate(jd) {
//     var wo = WoTage[mod(jd, 7)];
//     var tz = jd - 1721119;
//     tz += floor(tz / 36524.25) - floor(tz / 146097) - 2;
//     tz += 2;
//     var y = floor((tz - 0.2) / 365.25);
//     var r = tz - floor(y * 365.25);
//     var m = floor((r - 0.5) / 30.6);
//     var d = r - floor(m * 30.6 + 0.5);
//     m += 3;
//     if (m > 12) { m -= 12; y++ }
//     var ms = ChrMonth[m];
//     var x = new Datum(d, wo, m, ms, y);
//     return x;
// }


//xxxxxxxxOsterformelnxxxxxxxx

function EastCalc(y) {
    var m, q;
    var H1 = floor(y / 100);
    var H2 = floor(y / 400);

    m = 15 + H1 - H2 - floor((8 * H1 + 13) / 25);
    q = 4 + H1 - H2;

    var a = mod(y, 19);
    var b = mod(y, 4);
    var c = mod(y, 7);
    var d = mod((19 * a + m), 30);
    var e = mod((2 * b + 4 * c + 6 * d + q), 7);
    var ost = 22 + d + e;
    if (ost == 57) {
        ost = 50;
    }
    if ((d == 28) && (e == 6) && (a > 10)) {
        ost = 49;
    }

    var x = ost;                      // Ostern  als Märzdatum


    // GZ = a + 1;                     //Goldene Zahl
    // GD = d;                         // Gauss d
    // GM = mod(m, 30);                // Gauss m
    // KK = mod(2 - (2 * b + 4 * c + q), 7) + 1;      // Konkurrente
    // SB = Littera[KK - 1];

    // Luna = 21 + GD;
    // var epa = GD;
    // if (GD == 29) { Luna = Luna - 1; }
    // if ((epa == 28) && (a > 10)) { epa = 30; Luna = Luna - 1; }
    // EP = EpaktFeld[epa];            // Epakte


    return x;
}


// function getEasterDay(y) {
//     var ostern = EastCalc(y);
//     var x = getDay(ostern, 3, y);
//     return x;
// }

// //xxxxxxxxxxxxxxxxxHauptschleifexxxxxxxxxxxx

// //*****************Ergebnis*************************
// /**
//  * 
//  * @param {object} f: Formular
//  * @param {number} y: Jaar
//  * @param {number} s: Stileingabe 
//  */
// function Ergebnis(y) {
//     var JD = getEasterDay(y);
//     var DatOst = makeDate(JD);
//     var result = DatStringLang(DatOst);
//     console.log(result);
// }

function computeEpactas(_annum) {
      var numerusAureus = mod(_annum, 19) + 1
    var aequatioSolaris = floor(floor(_annum / 100 + 1) * 3 / 4);
    var aequatioLunaris = floor(floor(_annum / 100 + 11) * 8 / 25 - 3);
    result = mod(26 - 11 * numerusAureus - aequatioLunaris + aequatioSolaris, 30);
    if (result == 29 || result == 28 && numerusAureus > 10) {
        result--;
    }
    return result;
}

var years = new Array(1894, 1913, 1902, 1891, 1910, 1899, 1888, 1907, 1896, 1915, 1904, 1893, 1912, 1901, 1890, 1909, 1898, 1887, 1906, 1895, 1914, 1903, 1892, 1911, 1900, 1889, 1908, 1897, 1916, 1886, 1905);