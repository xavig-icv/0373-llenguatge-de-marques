// Estructura SWITCH CASE en JavaScript
let opcio = 2;

console.log('=== MENÚ PRINCIPAL ===');
console.log('1. Jugar');
console.log('2. Opcions');
console.log('3. Puntuacions');
console.log('4. Sortir');
console.log('');

switch (opcio) {
  case 1:
    console.log('Iniciant una nova partida...');
    break;
  case 2:
    console.log("Obrint el menú d'opcions...");
    break;
  case 3:
    console.log('Mostrant les puntuacions...');
    break;
  case 4:
    console.log('Sortint del joc...');
    break;
  default:
    console.log('Opció no vàlida');
}
