## L'estructura condicional de casos `switch`

Si hem d'avaluar **diverses condicions** basades en el **mateix valor**, `switch` és una estructura més llegible "polida" que utilitza múltiples `if` i `else if`

### Sintaxi

```javascript
switch (valor) {
  case opcio1:
    // Codi si valor === opcio1
    break;
  case opcio2:
    // Codi si valor === opcio2
    break;
  default:
  // Codi si no coincideix amb cap cas
}
```

### Exemple: Menú del joc

```javascript
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
```

### Exemple: Resposta a esdeveniment de teclat

```javascript
tecla = 'ArrowUp';

switch (tecla) {
  case 'ArrowUp': // Moure al jugador cap a amunt
    teclesCounter.ArrowUp++;
    console.log('Tecla amunt (ArrowUp) premuda.');
    break;
  case 'ArrowDown': // Moure al jugador cap a avall
    teclesCounter.ArrowDown++;
    console.log('Tecla avall (ArrowDown) premuda.');
    break;
  case 'Space': // Disparar o atacar
    teclesCounter.Space++;
    console.log('Tecla espai (Space) premuda.');
    break;
}
```

**Important:** No oblidis el `break`! Si no el poses, continuarà executant els següents casos.

## Operador ternari `? :`

Permet assignar un valor si es compleix un condició sinó assigna un altre valor. És una forma **compacta** d'escriure un `if...else` simple en una sola línia per assignar valors a variables.

És aconsellable utiltizar l'operador ternari per assignacions simples basades en una condició (quan el codi és curt i llegible).

### Sintaxi

```javascript
let resultat = condició ? valorSiTrue : valorSiFalse;
```

### Exemples

```javascript
let vida = 50;
let estat = vida > 0 ? 'Viu' : 'Mort';
console.log(estat); // "Viu"

let esDia = true;
let missatge = esDia ? 'Bon dia!' : 'Bona nit!';
console.log(missatge);

let punts = 80;
let rang = punts >= 100 ? 'PRO' : 'Novell';
console.log(rang);

let nomInput;
let nom = nomInput !== undefined ? nomInput : 'Jugador';
console.log(nom);
```
