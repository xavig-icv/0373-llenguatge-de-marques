class Player {
  constructor(nom) {
    this.nom = nom;
    this.posicioX = 0;

    // Crear l'element HTML
    this.element = document.createElement('div');
    this.element.classList.add('player');
    // Afegir l'element al DOM
    game.append(this.element);
    this.actualitzarPantalla();
  }

  moure() {
    this.posicioX += 20;
    this.actualitzarPantalla();
  }

  actualitzarPantalla() {
    this.element.style.setProperty('left', this.posicioX + 'px');
  }
}

// Crear objecte
const game = document.querySelector('#game');
const jugador = new Player('Jugador', 5, game);

// Botons
document.querySelector('#moure').addEventListener('click', () => {
  jugador.moure();
});
