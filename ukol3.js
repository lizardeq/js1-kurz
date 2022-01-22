let jmeno = prompt('Zadej jmeno');
let vek = prompt('Zadej vek');
let auto = vek >= 18;

if (vek >= 18) {
  let text = ' mate pravo ridit auto.'
  console.log(
    'Vase jmeno je ' + jmeno + ', je vam ' + vek + ' let a tak' + text
    )
} else {
  let text = ' musite pockat jeste ' + (18 - vek) + ' let, nez budete ridit auto.'
  console.log(
    'Vase jmeno je ' + jmeno + ', je vam ' + vek + ' let a tak' + text
    )
} 


