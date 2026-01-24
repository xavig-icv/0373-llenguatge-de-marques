## 02. Cadenes de Text (Strings)

Una **cadena** és una **seqüència o llista de caràcters** (lletres, números, símbols). A cada valor de la llista es pot accedir com si fos un vector mitjançant la posició (índex) dins de la cadena, on el primer índex és el número 0.

### Declaració de Cadenes (Creació)

```javascript
let nom = 'Link'; // Envoltat de cometes simples ' '
let salutacio = 'Hola món!'; // Evoltat de cometes dobes " "
let missatge = `Benvingut al joc`; // Envoltat d'accents ` `
let text = ''; // Cadena buida
```

### Accedir als caràcters (mitjançant els índexs)

Fem el mateix que amb els vectors, podem accedir a cada caràcter fent ús de l'índex.

```javascript
let paraula = 'ZELDA';

console.log(paraula[0]); // "Z"
console.log(paraula[1]); // "E"
console.log(paraula[4]); // "A"
```

### Propietat `length` de les cadenes (característica)

```javascript
let nom = 'Mario';
console.log(`Total caràcters: ${nom.length}`); // 5

let missatge = 'Game Over';
console.log(`Total caràcters: ${missatge.length}`); // 9
```

## Mètodes bàsics de les cadenes

### Convertir majúscules/minúscules

```javascript
let nom = 'mario';

console.log(nom.toUpperCase()); // "MARIO"
console.log(nom.toLowerCase()); // "mario"
```

### Buscar text dins de la cadena (includes)

```javascript
let frase = 'Us donem la benvinguda al món de JavaScript!';

// Comprovar si conté una paraula
console.log(frase.includes('JavaScript')); // true
console.log(frase.includes('Python')); // false

// Trobar posició
console.log(frase.indexOf('món')); // 26
console.log(frase.indexOf('Adéu')); // -1 (no trobat)

// Comprovar inici/final
console.log(frase.startsWith('Benvinguts')); // false
console.log(frase.endsWith('JavaScript!')); // true
```

### Extreure una part d'una cadena (substring)

```javascript
let text = 'JavaScript és genial :)';

// Extreure des d'índex 0 fins 10 (no inclòs)
console.log(text.substring(0, 10)); // "JavaScript"

// Extreure des d'índex 14 fins al final
console.log(text.substring(14)); // "genial :)"
```

### Modificar text d'una cadena (replace)

```javascript
let frase = 'Hola món';

let novaFrase = frase.replace('món', 'jugador!');
console.log(novaFrase); // "Hola jugador!"

// L'original no es modifica
console.log(frase); // "Hola món"
```

### Dividir strings (split) transformar a vector

```javascript
let llista = 'poma,plàtan,taronja,préssec';

let fruites = llista.split(',');
console.log(fruites); // ["poma", "plàtan", "taronja", "préssec"]

// Dividir per espais
let frase = 'Benvingut al joc';
let paraules = frase.split(' ');
console.log(paraules); // ["Benvingut", "al", "joc"]
```

### Unir diferents vectors (join)

```javascript
let paraules = ['Game', 'Over'];
let frase = paraules.join(' ');
console.log(frase); // "Game Over"

let objectes = ['poció', 'clau', 'espasa'];
let llista = objectes.join(', ');
console.log(llista); // "poció, clau, espasa"
```

### Eliminar espais (trim)

```javascript
let nom = '   Mario   ';

console.log(nom.trim()); // "Mario"
console.log(nom.trimStart()); // "Mario   "
console.log(nom.trimEnd()); // "   Mario"
```

## Template literals (backticks)

Permeten **incrustar variables** i **expressions** dins del string amb `${...}`.

```javascript
let nom = 'Link';
let vida = 80;
let vidaMaxima = 100;

// Format antic i no explicat
let missatge1 = 'El jugador ' + nom + ' té ' + vida + '/' + vidaMaxima + ' de vida';

// Format modern (RECOMANAT)
let missatge2 = `El jugador ${nom} té ${vida}/${vidaMaxima} de vida`;

console.log(missatge2);
// "El jugador Link té 80/100 de vida"

// Amb expressions
let percentatge = `Vida: ${((vida / vidaMaxima) * 100).toFixed(0)}%`;
console.log(percentatge); // "Vida: 80%"
```

### Strings multilínia (pots fer-lo servir per innerHTML)

```javascript
let dialeg = `
Benvingut, viatger!
Necessito que em portis la clau daurada.
La trobaràs al castell del nord.
`;

console.log(dialeg);
```

## Exemples pràctics amb strings

### Exemple amb Cadenes: Validar els nom del jugador

```javascript
let nomJugador = '  Pep123  ';

// Netejar espais
nomJugador = nomJugador.trim();

// Validar longitud
if (nomJugador.length < 3) {
  console.log(`El nom ha de tenir mínim 3 caràcters`);
} else if (nomJugador.length > 15) {
  console.log(`El nom ha de tenir màxim 15 caràcters`);
} else {
  console.log(`Nom vàlid: ${nomJugador}`);
}
```

### Exemple amb Cadenes: Sistema de diàlegs

```javascript
let npcNom = 'Senyor Gran';
let jugadorNom = 'Link';
let objecteNecessari = 'Espasa Mestra';

let dialeg1 = `${npcNom}: Benvingut/a, ${jugadorNom}.`;
let dialeg2 = `${npcNom}: Necessites l'${objecteNecessari} per derrotar l'enemic.`;
let dialeg3 = `${npcNom}: Busca l'objecte al Temple del Temps.`;

console.log(dialeg1);
console.log(dialeg2);
console.log(dialeg3);
```

### Exemple Cadenes: Processar comandes/accions del jugador

```javascript
let comanda = 'atacar,endavant';

console.log(`Comanda rebuda: ${comanda}`);

if (comanda.startsWith('atacar')) {
  let parts = comanda.split(',');
  let direccio = parts[1];
  console.log(`Atacant cap a: ${direccio}`);
} else if (comanda.startsWith('moure')) {
  console.log('Movent el personatge...');
} else if (comanda === 'inventari') {
  console.log('Obrint inventari...');
} else {
  console.log('Comanda no reconeguda');
}
```
