// Estructures de dades VECTORS (ARRAYS) gestió amb FOREACH
const enemics = [
  { nom: 'Goblin', vida: 50 },
  { nom: 'Orc', vida: 100 },
  { nom: 'Troll', vida: 150 },
];

let atacJugador = 40;

console.log('Atacant tots els enemics!');

enemics.forEach(enemic => {
  enemic.vida -= atacJugador;
  console.log(`${enemic.nom} - Vida restant: ${enemic.vida}`);
});
