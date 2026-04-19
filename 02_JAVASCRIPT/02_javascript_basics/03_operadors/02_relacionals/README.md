## 02. Operadors de Relacionals (Comparacions)

Els operadors de comparació comparen dos valors i retornen **`true`** o **`false`**.

`==` (Igual a): Comprova si dos valors són iguals (només té en compte el valor).
`===` (Igual a estricte): Comprova si dos valors són exactament iguals (el valor i el tipus).
`!=` (Difererent de): Comprova si dos valors no són iguals (només té en compte el valor).
`!==` (Diferent de estricte): Comprova si dos valors no són iguals (el valor i el tipus).
`>` (Més gran que): Comprova si el primer valor és més gran que el segon valor.
`<` (Menys que): Comprova si el primer valor és més petit que el segon valor.
`>=` (Més gran o igual que): Comprova si el primer valor és més gran o igual que el segon valor.
`<=` (Menys o igual que): Comprova si el primer valor és menor o igual que el segon valor.

| Operador | Significat                         | Exemple     | Resultat |
| -------- | ---------------------------------- | ----------- | -------- |
| `==`     | Igual a (valor)                    | `5 == "5"`  | `true`   |
| `===`    | Estrictament igual (valor i tipus) | `5 === "5"` | `false`  |
| `!=`     | Diferent de (valor)                | `5 != 3`    | `true`   |
| `!==`    | Estrictament diferent              | `5 !== "5"` | `true`   |
| `>`      | Major que                          | `10 > 5`    | `true`   |
| `<`      | Menor que                          | `3 < 7`     | `true`   |
| `>=`     | Major o igual que                  | `5 >= 5`    | `true`   |
| `<=`     | Menor o igual que                  | `4 <= 8`    | `true`   |

### Diferència entre `==` i `===`

```javascript
// == compara NOMÉS el valor (converteix tipus si cal)
console.log(5 == '5'); // true (converteix "5" a número)
console.log(true == 1); // true (converteix true a 1)
console.log(false == 0); // true (converteix false a 0)

// === compara valor I tipus (més estricte) RECOMANAT!
console.log(5 === '5'); // false (número vs string)
console.log(true === 1); // false (boolean vs number)
console.log(5 === 5); // true (mateix valor i tipus)
```

**Recomanació:** Utilitza sempre `===` i `!==` per evitar errors de programacions inesperats.

### Exemples en jocs

```javascript
let vida = 0;
let estaViu = vida > 0;
console.log(`Està viu? ${estaViu}`); // false

let punts = 150;
let pujarNivell = punts >= 100;
console.log(`Pot pujar de nivell? ${pujarNivell}`); // true

let monedes = 50;
let preuEspasa = 75;
let potComprar = monedes >= preuEspasa;
console.log(`Pot comprar l'espasa? ${potComprar}`); // false

let nivell = 10;
let nivellMaxim = 100;
let arribarAlMaxim = nivell === nivellMaxim;
console.log(`Ha arribat al nivell màxim? ${arribarAlMaxim}`); // false
```
