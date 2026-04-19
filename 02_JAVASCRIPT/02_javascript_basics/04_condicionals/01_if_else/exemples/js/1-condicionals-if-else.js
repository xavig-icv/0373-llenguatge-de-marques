// IF - condicional simple
let vida = 0;
// Si la vida és més petit o igual a 0 s'executa el bloc de codi
if (vida <= 0) {
  console.log('GAME OVER :(');
}

// IF/ELSE - condicional doble
let monedes = 30;
let preuEspasa = 50;
// Si el número de monedes és més gran o igual al preuEspasa (executa bloc IF)
// Si el número de monedes és mes petit al preuEspasa (executa bloc ELSE)
if (monedes >= preuEspasa) {
  console.log("Has comprat l'espasa!");
  monedes = monedes - preuEspasa;
} else {
  console.log('No disposes de prou monedes :(');
}

// IF/ELSE IF/ELSE - condicional múltiple
let puntuacio = 690;
// Quin bloc s'executarà?
if (puntuacio >= 1000) {
  console.log('Rang: LLEGENDA');
} else if (puntuacio >= 750) {
  console.log('Rang: OR');
} else if (puntuacio >= 500) {
  console.log('Rang: PLATA');
} else if (puntuacio >= 250) {
  console.log('Rang: BRONZE');
} else {
  console.log('Rang: PRINCIPIANT');
}
