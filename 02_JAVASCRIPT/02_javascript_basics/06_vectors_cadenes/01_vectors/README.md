## 01. Vectors (Arrays)

Un **vector** és una llista de valors (com una caixa de compartiments). Per accedir a cada valor de la llista aquest disposa d'una **posició** (índex) assignat que comença a comptar des de 0.

### Declaració de vectors (Creació)

```javascript
// Vector buit
let inventari = [];

// Vector amb una dimensió concreta i valors inicials establerts
let fruites = ['poma', 'plàtan', 'taronja'];

// Vector de números
let puntuacions = [1500, 1200, 980, 750, 500];

// Vector mixt (diferents tipus de dades)
let dades = ['Mario', 35, true, 100.5];
```

### Accedir als elements (mitjançant els índexs)

Recordeu que els vectors (arrays) la primera posició o el primer índex és el **0**.

```javascript
let armes = ['espasa', 'arc', 'màgia', 'dagues'];

console.log(armes[0]); // "espasa" (primer element)
console.log(armes[1]); // "arc"
console.log(armes[2]); // "màgia"
console.log(armes[3]); // "dagues"
```

### Propietat `length` dels vectors (característica)

Retorna el **nombre d'elements** de l'array.

```javascript
let enemics = ['goblin', 'orc', 'troll', 'dragon'];

console.log("Número d'enemics:", enemics.length); // 4

let ultim = enemics.length - 1;
console.log(enemics[ultim]); // Últim element --> "dragon"
```

## Mètodes bàsics dels vectors (accions/funcions)

### Afegir nous elements al vector

```javascript
let inventari = ['poció', 'clau'];

// Afegir al FINAL
inventari.push('espasa');
console.log(inventari); // ["poció", "clau", "espasa"]

// Afegir al PRINCIPI
inventari.unshift('escut');
console.log(inventari); // ["escut", "poció", "clau", "espasa"]
```

### Eliminar elements existents del vector

```javascript
let objectes = ['poció', 'clau', 'espasa', 'escut'];

// Eliminar del FINAL
objectes.pop();
console.log(objectes); // ["poció", "clau", "espasa"]

// Eliminar del PRINCIPI
objectes.shift();
console.log(objectes); // ["clau", "espasa"]
```

### Buscar elements dins del vector

```javascript
let personatges = ['Mario', 'Link', 'Zelda', 'Pikachu'];

// Trobar la posició (indexOf)
let posicio = personatges.indexOf('Zelda');
console.log(`Posició de Zelda: ${posicio}`); // 2

// Comprovar si existeix (includes)
let existeix = personatges.includes('Link');
console.log(`Link és al joc: ${existeix}`); // true

let noExisteix = personatges.includes('Sonic');
console.log(`Sonic és al joc: ${noExisteix}`); // false
```

### Modificar elements del vector

```javascript
let armes = ['espasa', 'arc', 'daga'];

// Canviar un element (l'arc per la ballesta)
armes[1] = 'ballesta';
console.log(armes); // ["espasa", "ballesta", "daga"]
```

## Recórrer vectors amb bucles

### Amb bucle `for` clàssic (mètode tradicional)

```javascript
let enemics = ['goblin', 'orc', 'troll'];

for (let i = 0; i < enemics.length; i++) {
  console.log(`Enemic ${i + 1}: ${enemics[i]}`);
}

// Sortida:
// Enemic 1: goblin
// Enemic 2: orc
// Enemic 3: troll
```

### Amb el mètode dels vectors `forEach` (format modern)

El mètode **`forEach`** executa una funció per a **cada element** d'un vector.

### Sintaxi

```javascript
array.forEach((element, index, array) => {
  // Codi a executar per cada element
});
```

**Paràmetres de la funció callback:**

- `element`: El valor actual del vector
- `index`: L'índex actual (és opcional el seu ús)
- `array`: L'array complet (és opcional el seu ús)

### Comparació amb for tradicional

```javascript
const enemics = ['Goblin', 'Orc', 'Troll', 'Dragon'];

// Forma més utiltizada de forEach
enemics.forEach(enemic => {
  console.log(`Enemic: ${enemic}`);
});

// Ús de forEach amb índex
enemics.forEach((enemic, index) => {
  console.log(`Enemic #${index + 1}: ${enemic}`);
});
```

### Exemple pràctic FOR: Inventari del joc

```javascript
let inventari = ['poció de vida', 'clau daurada', 'espasa de foc', 'escut màgic'];

console.log('=== INVENTARI ===');
console.log(`Total Objectes: ${inventari.length}`);

for (let i = 0; i < inventari.length; i++) {
  console.log(`${i + 1}. ${inventari[i]}`);
}
```

### Exemple pràctic FOR: Generar coordenades aleatòries pels enemics

```javascript
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
```

#### Exemple pràctic FOREACH: Actualitzar la vida de tots els enemics

Al següent exemple podeu veure un nou tipus de dada (`object literal`) que permet crear, de manera simple, objectes amb JavaScript.

El següent vector "enemics" disposa de 3 objectes que tenen les propietats/característiques `nom` i `vida`.

```javascript
const enemics = [
  { nom: 'Goblin', vida: 50 },
  { nom: 'Orc', vida: 100 },
  { nom: 'Troll', vida: 150 },
];

let atacJugador = 40;

console.log('Atacant tots els enemics!');

enemics.forEach(enemic => {
  enemic.vida -= atacJugador;
  console.log(`${enemic.nom} - Vida restant: ${enemic.vida}`);
});
```

#### Exemple pràctica FOREACH: Mostrar tots els objectes de l'inventari

```javascript
const inventari = [
  { nom: 'Poció', quantitat: 5 },
  { nom: 'Espasa', quantitat: 1 },
  { nom: 'Escut', quantitat: 1 },
  { nom: 'Monedes', quantitat: 150 },
];

console.log('=== INVENTARI ===');

inventari.forEach((item, index) => {
  console.log(`${index + 1}. ${item.nom} x${item.quantitat}`);
});
```
