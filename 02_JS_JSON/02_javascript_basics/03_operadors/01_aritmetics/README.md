## 01. Operadors Aritmètics

Els operadors aritmètics realitzen **operacions matemàtiques**.

`+` (Suma): Suma dos valors.
`-` (Resta): Resta dos valors.
`*` (Multiplicació): Multiplica dos valors.
`/` (Divisió): Divideix dos valors.
`%` (Mòdul): Retorna el residu de la divisió entre dos valors.
`**` (Exponent): Eleva un valor a una potència.
`++` (Increment): Augmenta el valor d'una variable en 1.
`--` (Decrement): Disminueix el valor d'una variable en 1.

| Operador | Operació       | Exemple  | Resultat |
| -------- | -------------- | -------- | -------- |
| `+`      | Suma           | `5 + 3`  | `8`      |
| `-`      | Resta          | `10 - 4` | `6`      |
| `*`      | Multiplicació  | `6 * 2`  | `12`     |
| `/`      | Divisió        | `15 / 3` | `5`      |
| `%`      | Mòdul (residu) | `10 % 3` | `1`      |
| `**`     | Potència       | `2 ** 3` | `8`      |

### Exemples d'operacions aritmètiques

```javascript
// Calcular dany d'un atac
let forca = 15;
let multiplicadorArma = 2;
let dany = forca * multiplicadorArma;
console.log(`Dany causat: ${dany}`); // 15*2 = 30

// Calcular vida restant
let vida = 100;
let danyRebut = dany;
vida = vida - danyRebut;
console.log(`Vida restant: ${vida}`); // 100 - 30 = 70

// Curar-se
let vidaActual = vida; // 70
let curacio = 30;
vida = vidaActual + curacio; // 100
console.log(`Vida després de curar: ${vida}`); // 100

// Dividir experiència entre jugadors
let expTotal = 1000;
let numJugadors = 4;
let expIndividual = expTotal / numJugadors;
console.log(`Experiència per jugador obtinguda: ${expIndividual}`); // 250

// Calcular puntuació final - Operació composta
let punts = 500;
let bonus = 2;
let nivell = 4;
let puntsTotal = punts + bonus * nivell;
console.log(`Punts totals del nivell 4: ${puntsTotal}`); // 4000
```

### L'operador mòdul `%`

El **mòdul** retorna el **residu** d'una divisió. És molt útil per saber si un número és parell o senar.

També és interessant per fer animacions per cicles (animar un sprite 2D d'un jugador), fer que apareguin enemics cada X torns, reiniciar un comptador quan arribi a un cert valor, etc.

```javascript
console.log(10 % 2); // 0 (10 és parell
console.log(11 % 2); // 1 (11 és senar)

let frame = 0;
const totalFrames = 6; //total de fotogrames de l'sprite
// Cada fps del joc es realitza:
frame = (frame + 1) % totalFrames;
```

### Operadors d'increment i decrement

```javascript
let punts = 10;

// Increment (sumar 1)
punts++;
console.log(punts); // 11

// Decrement (restar 1)
punts--;
console.log(punts); // 10

// L'increment i Decrement és equivalent a fer:
punts = punts + 1;
punts = punts - 1;
```

### Operadors d'assignació combinada

```javascript
let vida = 100;

vida += 20; // vida = vida + 20  →  120
vida -= 15; // vida = vida - 15  →  105
vida *= 2; // vida = vida * 2   →  210
vida /= 3; // vida = vida / 3   →  70
```
