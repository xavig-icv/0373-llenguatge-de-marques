// Estructura de control condicional amb l'operador ternari
let vida = 50;
let estat = vida > 0 ? 'Viu' : 'Mort';
console.log(estat); // "Viu"

let esDia = true;
let missatge = esDia ? 'Bon dia!' : 'Bona nit!';
console.log(missatge);

let punts = 80;
let rang = punts >= 100 ? 'PRO' : 'Novell';
console.log(rang);

let nomInput;
let nom = nomInput !== undefined ? nomInput : 'Jugador';
console.log(nom);
