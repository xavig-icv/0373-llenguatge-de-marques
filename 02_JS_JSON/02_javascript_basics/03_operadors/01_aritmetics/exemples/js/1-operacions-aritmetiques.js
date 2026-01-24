// Calcular dany d'un atac
let forca = 15;
let multiplicadorArma = 2;
let dany = forca * multiplicadorArma;
console.log(`Dany causat: ${dany}`); // 15*2 = 30

// Calcular vida restant
let vida = 100;
let danyRebut = dany;
vida = vida - danyRebut;
console.log(`Vida restant: ${vida}`); // 100 - 30 = 70

// Curar-se
let vidaActual = vida; // 70
let curacio = 30;
vida = vidaActual + curacio; // 100
console.log(`Vida després de curar: ${vida}`); // 100

// Dividir experiència entre jugadors
let expTotal = 1000;
let numJugadors = 4;
let expIndividual = expTotal / numJugadors;
console.log(`Experiència per jugador obtinguda: ${expIndividual}`); // 250

// Calcular puntuació final - Operació composta
let punts = 500;
let bonus = 2;
let nivell = 4;
let puntsTotal = punts + bonus * nivell;
console.log(`Punts totals del nivell 4: ${puntsTotal}`); // 4000
