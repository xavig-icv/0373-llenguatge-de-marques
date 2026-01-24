// Seleccionar l'element de Punts de Vida i la Barra de Vida
const puntsVida = document.querySelector('#punts-vida');
const barraVida = document.querySelector('.vida');

// Assigna un valor de 0-100 als punts de vida
let hp = 0;

// Eliminar les possibles classes assignades previament
barraVida.classList.remove('normal', 'alerta', 'critic');

// Descomenta la línia de codi segons el % de vida.

//barraVida.classList.add('normal'); //Modifica hp per un valor entre 50-100

//barraVida.classList.add('alerta'); //Modifica hp per un valor entre 21-49

//barraVida.classList.add('critic'); //Modifica hp per un valor entre 0-20

// Modificar el contingut de text dels Punts de Vida i el CSS (%) de la barra de vida
puntsVida.textContent = `Punts de Vida - ${hp} HP`;
barraVida.style.setProperty('width', `${hp}%`);
