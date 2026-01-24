## El bucle MENTRE `while`

El bucle **`while`** executa un bloc de codi repetidament `MENTRE` es compleix una condició establerta. S'utilitza quan **NO sabem** el número exacte de repeticions que s'han de realitzar, però disposem d'una **condició per aturar** el bucle.

### Sintaxi

```javascript
while (condició) {
  // Codi que es repeteix mentre la condició sigui true (en aquest cas)
}
```

### Exemple bàsic

```javascript
let comptador = 0;
// Comprova que el comptador sigui més petit a 5
// Mentre sigui més petit executa el bloc de codi
while (comptador < 5) {
  console.log(`Comptador: ${comptador}`);
  comptador++;
}
```

## Exemples pràctics amb `while`

### Exemple 1: Recollir monedes fins arribar a 100

```javascript
let monedes = 0;
const MONEDES_OBJECTIU = 100;
const MONEDES_PER_ENEMIC = 15;
let enemicsDerrotats = 0;

console.log('Derrotant enemics i Recollint monedes...');

while (monedes < MONEDES_OBJECTIU) {
  enemicsDerrotats++;
  monedes += MONEDES_PER_ENEMIC;
  console.log(`Enemic derrotat! Monedes actuals: ${monedes}`);
}

console.log('Objectiu assolit!');
console.log(`Enemics derrotats: ${enemicsDerrotats}`);
console.log(`Monedes totals: ${monedes}`);
```

### Exemple 2: Moure projectil fins sortir de pantalla

```javascript
let posicioX = 0;
const VELOCITAT = 10;
const LIMIT_PANTALLA = 100;

console.log('Disparant un projectil...');

while (posicioX < LIMIT_PANTALLA) {
  posicioX += VELOCITAT;
  console.log(`PosicióX Projectil: ${posicioX}`);
}

console.log('Projectil fora de pantalla!');
```

### Exemple 3: Jugador vs Enemic

```javascript
let vidaEnemic = 100;
let atacJugador = 20;
let enemicDerrotat = false;
let torn = 1;

console.log('Comença el combat...');

while (enemicDerrotat === false && torn < 5) {
  console.log('Jugador ataca...');
  vidaEnemic -= atacJugador;
  console.log(`Vida enemic: ${vidaEnemic}`);
  if (vidaEnemic <= 0) {
    enemicDerrotat = true;
  }
  torn++;
}

//Quin creieu que és el resultat?
console.log(`Enemic derrotat? ${enemicDerrotat}`);
```
