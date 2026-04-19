const personatge = document.querySelector('#personatge');
const textPosicio = document.querySelector('#posicio');

let posX = 0;
let posY = 0;
const VELOCITAT = 10;

function actualitzarPosicio() {
  personatge.style.setProperty('transform', `translate(${posX}px, ${posY}px)`);
  //personatge.style.setProperty('top', `${posY}px`);
  textPosicio.textContent = `Posició: (${posX}, ${posY})`;
}

document.addEventListener('keydown', event => {
  const tecla = event.code;

  switch (tecla) {
    case 'ArrowUp': // Moure al jugador cap a amunt
      posY -= VELOCITAT;
      console.log('Tecla amunt (ArrowUp) premuda.');
      break;
    case 'ArrowDown': // Moure al jugador cap a avall
      posY += VELOCITAT;
      console.log('Tecla avall (ArrowDown) premuda.');
      break;
    case 'ArrowLeft': // Moure al jugador a l'esquerra
      posX -= VELOCITAT;
      console.log('Tecla esquerra (ArrowLeft) premuda.');
      break;
    case 'ArrowRight': // Moure al jugador a la dreta
      posX += VELOCITAT;
      console.log('Tecla dreta (ArrowRight) premuda.');
      break;
  }

  actualitzarPosicio();
});
