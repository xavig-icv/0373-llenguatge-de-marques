const pantalla = document.querySelector('#pantalla');
const textPosicio = document.querySelector('#posicio');
const cursor = document.querySelector('#cursor');

pantalla.addEventListener('click', eventRatoli => {
  textPosicio.textContent = `Clic a la posició (${eventRatoli.clientX}, ${eventRatoli.clientY})`;
  //Posicionar l'element on s'ha fet clic
  cursor.style.setProperty('left', `${eventRatoli.clientX}px`);
  cursor.style.setProperty('top', `${eventRatoli.clientY}px`);
  //Podem veure el contingut de l'objecte de l'esdeveniment
  console.log(eventRatoli);
});
