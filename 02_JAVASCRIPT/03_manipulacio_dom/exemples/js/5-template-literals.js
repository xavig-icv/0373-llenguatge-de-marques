// Actualitzar nom
const nomJugador = document.querySelector('#nom');
nomJugador.textContent = 'Cloud Strife';

// Actualitzar vida
const vidaJugador = document.querySelector('#vida');
let vidaActual = 75;
vidaJugador.textContent = `Vida: ${vidaActual}`;

// Actualitzar puntuació
const puntuacioJugador = document.querySelector('#puntuacio');
let punts = 1250;
puntuacioJugador.textContent = `Puntuació: ${punts}`;

// Actualitzar nivell
const nivellJugador = document.querySelector('#nivell');
let nivell = 5;
nivellJugador.textContent = `Nivell: ${nivell}`;
