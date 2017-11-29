var stawka = 10;
var dzien = 8;
var dniRobocze = 4 * (stawka) * (dzien);
var weekend = (stawka) * (dzien) * 2;
var wyplata = 3 * (weekend) + 4 * (dniRobocze);
console.log(wyplata);
if (wyplata = 1000) {
    console.log("zarobiles tysiac zloty, gratulacje");
} else if (wyplata < 1000) {
    console.log("jak na tyle godzin to strasznie slaba stawka, zarob wiecej");
} else {
    console.log("Zarobiles " + wyplata + "zl, stac cie na wiecej.");
}
