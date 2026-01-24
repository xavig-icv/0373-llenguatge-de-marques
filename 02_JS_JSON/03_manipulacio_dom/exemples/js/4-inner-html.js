// Inicialment el DIV inventari es buit i després s'afegeix l'HTML.
const inventari = document.querySelector('#inventari');
console.log(inventari.innerHTML);
inventari.innerHTML = `
  <ul>
    <li>Poció de vida</li>
    <li>Clau daurada</li>
    <li>Espasa de foc</li>
  </ul>
`;
console.log(inventari.innerHTML);
