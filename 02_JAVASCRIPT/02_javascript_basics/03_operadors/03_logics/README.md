## Operadors Lògics 🔀

Els operadors lògics combinen múltiples condicions booleanes.

`&&` (AND): Verifica si les condicions són certes. Retorna cert o fals en cas contrari.
`\|\|` (OR): Verifica si com a mínim una condició és certa. Retorna cert o fals en cas contrari.
`!` (NOT): Inverteix el valor d'una condició. Retorna cert si la condició és falsa i viceversa.

| Operador | Nom      | Descripció                                | Exemple                    |
| -------- | -------- | ----------------------------------------- | -------------------------- |
| `&&`     | AND (I)  | True si **TOTES** les condicions són true | `true && true` → `true`    |
| `\|\|`   | OR (O)   | True si **ALMENYS UNA** condició és true  | `true \|\| false` → `true` |
| `!`      | NOT (NO) | Inverteix el valor booleà                 | `!true` → `false`          |

### Operador AND `&&`

Retorna `true` **només si TOTES** les condicions són certes.

```javascript
let vida = 80;
let municio = 10;
// El jugador pot atacar si disposa de prou (vida I munició)
let potAtacar = vida > 0 && municio > 0;
console.log(`Pot atacar? ${potAtacar}`); // true

let teClau = false;
let portaTancada = true;
// Pot obrir la porta si (disposa de clau I la porta està tancada)
let potObrirPorta = teClau && portaTancada;
console.log(`Pot obrir la porta? ${potObrirPorta}`); // false
```

### Operador OR `||`

Retorna `true` si **COM A MÍNIM UNA** condició és certa.

```javascript
let nivell = 7;
let teTiquet = true;
// Pot entrar si és (nivell 10 o major O disposa d'un tiquet)
let potEntrar = nivell >= 10 || teTiquet;
console.log(`Pot entrar? ${potEntrar}`); // true

let vida = 0;
let vidaExtra = true;
// Game over si la (vida menor o igual a 0 I NO disposa de vides extra)
let gameOver = vida <= 0 && !vidaExtra;
console.log(`Game Over? ${gameOver}`); // false --> Pot continuar jugant amb vidaExtra
```

### Operador NOT `!`

Inverteix el valor booleà. (cert --> fals) i (fals --> cert)

```javascript
let enemicsActius = false;
let zonaSegura = !enemicsActius;
console.log(`Zona segura? ${zonaSegura}`); // true

let jocPausa = true;
let permetMoviment = !jocEnPausa;
console.log(`Es permet moviment? ${permetMoviment}`); // false
```

### Combinar operadors lògics

```javascript
let monedes = 50;
let nivell = 4;
let objEspasaMagica = true;

// Pot lluitar contra el FINAL BOSS si:
// - Disposa de més de 30 monedes
// - I també (nivell més gran o igual 5 O té espasa màgica)
let lluitarBoss = monedes > 30 && (nivell >= 5 || objEspasaMagica);
console.log(`Pot lluitar contra el boss? ${lluitarBoss}`); // true
```
