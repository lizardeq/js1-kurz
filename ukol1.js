/*ZAOKROUHLENI
Math.round();
Math.floor();
Math.ceil();
*/

let jmeno = 'Jana';
let vek = 24;
let vaha = 52;
let vyska = 1.78;
let bmi = vaha / vyska ** 2;

console.log(
  'Jmenuji se ' + jmeno + ', je mi ' + vek + ' let, vazim ' + vaha + 'kg, merim ' + vyska + 'm a moje BMI je ' + bmi.toFixed(1) + '.'
  );
