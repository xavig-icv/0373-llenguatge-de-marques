// Selecciona el primer mario i canviar la vora
const jugador = document.querySelector('.jugador');
jugador.style.setProperty('border', 'solid 2px red');

// Selecciona el segon mario, canviar color de fons, la mida i color del text, arrodonir les vores i redimensionar l'element
const jugadorPower = document.querySelector('.jugador.power');
jugadorPower.style.setProperty('background-color', 'goldenrod');
jugadorPower.style.setProperty('color', 'white');
jugadorPower.style.setProperty('font-size', '1.5rem');
jugadorPower.style.setProperty('transform', 'scale(1.4)');
jugadorPower.style.setProperty('border-radius', '1rem');

// Selecciona el tercer mario, canviar color de fons, vores, opacitat, mida i color de lletra i redimensionar l'element
const jugadorDany = document.querySelector('.jugador.dany');
jugadorDany.style.setProperty('background-color', 'darkred');
jugadorDany.style.setProperty('color', 'white');
jugadorDany.style.setProperty('font-size', '1.5rem');
jugadorDany.style.setProperty('transform', 'scale(0.7)');

const jugadorDanyImg = document.querySelector('.jugador.dany img');
jugadorDany.style.setProperty('opacity', '1');

// Selecciona el quart mario, canviar color de fons, vores, color de lletra i mida de lletra
const jugadorAtac = document.querySelector('.jugador.atac');
jugadorAtac.style.setProperty('background-color', 'dodgerblue');
jugadorAtac.style.setProperty('color', 'white');
jugadorAtac.style.setProperty('font-size', '1.5rem');
