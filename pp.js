function celsijiUzFarenhaitiem(celsijas) {
    let farenhaiti = (celsijas * 9/5) + 32;
    console.log(celsijas + "°C ir " + farenhaiti + "°F");
    return farenhaiti;
}

// Lietotāja ievade
let celsijustemp = parseFloat(prompt("Ievadi temperatūru pēc Celsija:"));
if (!isNaN(celsijustemp)) {
    celsijiUzFarenhaitiem(celsijustemp);
} else {
    console.log("Lūdzu ievadi skaitli!");
}