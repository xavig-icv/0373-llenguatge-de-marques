// Estructures de dades VECTORS (ARRAYS) gestió amb FOR
const NUM_ENEMICS = 5;
let posicionsX = [];
let posicionsY = [];

console.log('Generant enemics en posicions aleatòries...');

for (let i = 0; i < NUM_ENEMICS; i++) {
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  posicionsX.push(x);
  posicionsY.push(y);

  console.log(`Enemic ${i + 1}: (${x}, ${y})`);
}

console.log('');
console.log(`Coordenades X: ${posicionsX}`);
console.log(`Coordenades Y: ${posicionsY}`);
