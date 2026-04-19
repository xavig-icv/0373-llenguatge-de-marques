// Seleccionar el l'element H3 i modificar el contingut de text
const jugadorNom = document.querySelector('.jugador h3');
jugadorNom.textContent = 'MARIO POWERUP';

// Seleccionar l'element IMG i modificar l'atribut SRC.
const jugadorImg = document.querySelector('.jugador img');
jugadorImg.setAttribute('src', './img/mario-power.webp');

// Seleccionar l'element BUTTON i eliminar l'atribut DISABLED.
const jugadorAtac = document.querySelector('.jugador button');
jugadorAtac.removeAttribute('disabled');
