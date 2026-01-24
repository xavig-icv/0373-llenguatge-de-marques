## El bucle PER CADA `for`

El bucle **`for`** executa un bloc de codi repetidament un número determinat de vegades. S'utilitza quan sabem exactament **quantes vegades** volem repetir una acció o bloc de codi.

### Sintaxi

```javascript
for (inicialització; condició; increment) {
  // Codi que es repeteix
}
```

**Elements que el composen:**

1. **Inicialització**: Valor inicial del comptador (ex: `let i = 0`)
2. **Condició**: Condició que s'avalua abans d'executar el bloc de codi (ex: `i < 10`)
3. **Increment**: Valor que augmenta el comptador per cada iteració (ex: `i++`)

### Exemple bàsic

```javascript
// Comptar de 0 a 4
for (let i = 0; i < 5; i++) {
  console.log('Iteració:', i);
}
```

### Com funciona el bucle `for`?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 1. Inicialització: i = 0
// 2. Comprova condició: 0 < 3? Sí → Executa codi → Mostra 0
// 3. Increment: i++ → i = 1
// 4. Comprova condició: 1 < 3? Sí → Executa codi → Mostra 1
// 5. Increment: i++ → i = 2
// 6. Comprova condició: 2 < 3? Sí → Executa codi → Mostra 2
// 7. Increment: i++ → i = 3
// 8. Comprova condició: 3 < 3? NO → Acaba el bucle
```

## Exemples pràctics amb `for`

### Exemple 1: Generar enemics

```javascript
const NUM_ENEMICS = 15;

console.log('Generant enemics...');

for (let i = 0; i < NUM_ENEMICS; i++) {
  console.log(`Enemic # ${i + 1} generat`);
}

console.log("Tots els enemics s'han generat correctament!");
```

### Exemple 2: Calcular dany total

```javascript
const DANY_PER_ATAC = 15;
const NUM_ATACS = 4;
let danyTotal = 0;

console.log("Combo d'atacs!");

for (let i = 0; i < NUM_ATACS; i++) {
  danyTotal += DANY_PER_ATAC;
  console.log(`Atac ${i + 1} - Dany acumulat: ${danyTotal}`);
}

console.log(`Dany total del combo: ${danyTotal}`);
```

## Instruccions `break` i `continue`

### `break` - Sortir del bucle

```javascript
// Buscar un número específic i trencar la condició del bucle quan es trobi
let numero = 5;
for (let i = 0; i < 10; i++) {
  console.log(`Comprovant número ${i} === ${numero}?`);

  if (i === numero) {
    console.log('Número trobat! Sortint del bucle...');
    break; // Surt del bucle immediatament
  }
}
```

### `continue` - Saltar a la següent iteració

```javascript
// Mostrar només els números senars
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta els parells
  }
  console.log(`Número senar: ${i}`);
}
```

## Exemples pràctics amb `break` i `continue`

### Exemple 1: Buscar objecte a l'inventari

```javascript
const inventari = ['poció', 'espasa', 'clau', 'escut', 'arc'];
let objecteCercat = 'clau';
let posicio = -1;

console.log(`Buscant l'objecte ${objecteCercat} a l'inventari...`);

for (let i = 0; i < inventari.length; i++) {
  console.log(`Comprovant la posició ${i} : ${inventari[i]}`);

  if (inventari[i] === objecteCercat) {
    posicio = i;
    console.log('Objecte trobat!');
    break;
  }
}

if (posicio !== -1) {
  console.log(`Posició: ${posicio + 1}`);
} else {
  console.log("L'objecte no s'ha trobat");
}
```

### Exemple 2: Atacar només als enemics vius!

```javascript
const vidaEnemics = [0, 50, 0, 30, 0];

console.log('Atacant enemics...');

for (let i = 0; i < vidaEnemics.length; i++) {
  if (vidaEnemics[i] === 0) {
    console.log(`L'enemic ${i} ja està mort, el saltem.`);
    continue;
  }

  console.log(`Atacant enemic ${i} (Vida: ${vidaEnemics[i]})`);
}
```
