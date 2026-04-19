// Estructura de control iteratiu WHILE
let monedes = 0;
const MONEDES_OBJECTIU = 100;
const MONEDES_PER_ENEMIC = 15;
let enemicsDerrotats = 0;

console.log('Derrotant enemics i Recollint monedes...');

while (monedes < MONEDES_OBJECTIU) {
  enemicsDerrotats++;
  monedes += MONEDES_PER_ENEMIC;
  console.log(`Enemic derrotat! Monedes actuals: ${monedes}`);
}

console.log('Objectiu assolit!');
console.log(`Enemics derrotats: ${enemicsDerrotats}`);
console.log(`Monedes totals: ${monedes}`);
