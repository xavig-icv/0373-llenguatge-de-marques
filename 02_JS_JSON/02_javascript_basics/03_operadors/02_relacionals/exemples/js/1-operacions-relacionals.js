let vida = 0;
let estaViu = vida > 0;
console.log(`Està viu? ${estaViu}`); // false

let punts = 150;
let pujarNivell = punts >= 100;
console.log(`Pot pujar de nivell? ${pujarNivell}`); // true

let monedes = 50;
let preuEspasa = 75;
let potComprar = monedes >= preuEspasa;
console.log(`Pot comprar l'espasa? ${potComprar}`); // false

let nivell = 10;
let nivellMaxim = 100;
let arribarAlMaxim = nivell === nivellMaxim;
console.log(`Ha arribat al nivell màxim? ${arribarAlMaxim}`); // false
