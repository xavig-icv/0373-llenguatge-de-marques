// Seleccionem la pantalla (element pare) on afegirem el nou element que crearem
const pantalla = document.querySelector('#pantalla');

// Crear un Segon enemic amb JS
// Crear un nou element HTML, aplica estils CSS i afegir-lo al DOM
const enemic2 = document.createElement('div');
enemic2.classList.add('enemic');
pantalla.append(enemic2);

// Crear un Tercer enemic amb JS
// Crear un nou element HTML, aplica estils CSS i afegir-lo al DOM
const enemic3 = document.createElement('div');
enemic3.classList.add('enemic');
pantalla.append(enemic3);

//Eliminar el Primer enemic amb JS
enemic2.remove();
