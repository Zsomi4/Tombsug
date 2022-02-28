/*
 * File: app.js
 * Author: Gubis Zsombor Dániel
 * Copyright: 2022, Gubis Zsombor Dániel
 * Group: Szoft_I_N
 * Date: 2022-02-21
 * Github: https://github.com/Zsomi4/
 * Licenc: GNU GPL  
 */

var oldalIn = document.getElementById("oldal");
var szogIn = document.getElementById("szog");
var szamitgomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitgomb.addEventListener("click", function() {
    let oldalStr = oldalIn.value;
    let szogStr = szogIn.value;
    let minta = /^[0-9]+$/;

    if (oldalStr.match(minta)) {
        console.log("OK")
    } else if (szogStr.match(minta)) {
        console.log("OK")
    } else {
        console.log("Nem ok.")
        alert("Hiba! Csak szám adható meg.")
        return;
    }

    let oldal = Number(oldalIn.value);
    console.log(oldal);
    let szog = Number(szogIn.value);
    console.log(szog);
    let sugar = 1 / 2 * oldal * Math.sin(szog * Math.PI / 180);
    console.log(sugar.toLocaleString());
    eredmenyIn.value = sugar.toLocaleString();
});