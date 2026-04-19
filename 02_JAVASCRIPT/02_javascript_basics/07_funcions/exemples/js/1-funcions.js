// Funcions per la reutilització de codi
const VIDES_MAX = 10;
let vides = 0;

function mostrarBarraVida(vides, videsMaximes) {
  let barraVida = '';
  for (let i = 0; i < videsMaximes; i++) {
    if (i < vides) {
      barraVida += '❤️';
    } else {
      barraVida += '🖤';
    }
  }

  console.log(`Vides: ${barraVida} ${vides}/${videsMaximes}`);
}

mostrarBarraVida(8, 10); // ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 8/10
mostrarBarraVida(5, 10); // ❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 5/10
mostrarBarraVida(2, 10); // ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤 2/10
