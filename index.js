// Import stylesheets
import './style.css';
import './podminka.js';
import './ukol3.js';
import './cykly.js';
// Tady zaciname
console.log('start');
/* 
alert('baf');
prompt('Jak je?');


let jmeno = 'Yaca';
let vek = 14;
let vlastnost = 'zlaticko';
let jeZima = true;

let a = 5;
let b = 11;
let c = 4 > 1;
let d = 11 % 3;
let e = 2 ** 5;

console.log(e);
console.log(d);
console.log(c);
console.log(a + b);

let nasobeni = a * b;
console.log('Vysledek je: ' + nasobeni);
console.log(a / 5);

console.log('Me jmeno je ' + jmeno + ' a je mi ' + vek + ' let.');
console.log(jmeno);
console.log(vek);
console.log(vlastnost);
*/

/*
let odpoved = Number(prompt('Kolik Ti je?'));

console.log(odpoved);

Number("445");
*/

let jeZima = true;
let svitiSlunicko = true;
let jeNadNulou = false;

// A ZAROVEN &&
let zaroven = jeZima && svitiSlunicko && jeNadNulou;
console.log(zaroven);

// NEBO ||

let nebo = jeNadNulou || svitiSlunicko;
console.log(nebo);


import './ukol1.js';
import './ukol2.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
