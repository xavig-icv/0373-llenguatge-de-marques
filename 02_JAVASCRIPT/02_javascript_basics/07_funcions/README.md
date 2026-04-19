# 07. Funcions

## Què són les funcions?

Les funcions són blocs de codi reutilitzable que realitzen una tasca concreta, poden rebre paràmetres d'entrada i rentornar un resultat. Són independents del programa i es poden "cridar" en qualsevol punt del programa. En lloc d'escriure el mateix codi diverses vegades, creem una funció i la cridem (executem) quan la necessitem.

En el desenvolupament de videojocs:

- Cada vegada que el jugador ataca, es calcula el dany, es resta vida a l'enemic, es mostra l'animació, etc.
- En lloc d'escriure tot aquest codi cada vegada, creem una funció `atacar()` i la cridem quan sigui necessari.

**Avantatges de les funcions:**

- ✅ **Reutilització** - Escrius el codi una vegada, l'utilitzes moltes vegades
- ✅ **Organització** - El codi principal és més net i llegible
- ✅ **Manteniment** - Si has de modificar alguna cosa, ho fas en un únic lloc
- ✅ **Modularitat** - Cada funció fa una tasca específica (o així hauria de ser quan programeu)

## Declaració i Crida de funcions

Hi ha diverses maneres de crear funcions a JavaScript.

### 1. Declaració de funció (clàssica)

```javascript
function saludar() {
  console.log('Hola, Jugador!');
}

// Cridar (executar) la funció
saludar(); // "Hola, Jugador!"
```

### 2. Funció amb paràmetres

Els **paràmetres** són valors que passem a la funció i es poden utilitzar al seu interior.

```javascript
function saludarJugador(nom) {
  console.log(`Hola, ${nom}!`);
}

saludarJugador('Mario'); // "Hola, Mario!"
saludarJugador('Link'); // "Hola, Link!"
saludarJugador('Zelda'); // "Hola, Zelda!"
```

### 3. Funció amb múltiples paràmetres

```javascript
function calcularDany(atac, nivell, defensa) {
  let dany = atac + nivell - defensa;
  console.log(`Dany causat: ${dany}`);
}

calcularDany(30, 5, 10); // "Dany causat: 25"
calcularDany(50, 10, 25); // "Dany causat: 35"
```

### 4. Funció que retorna un valor

Utilitzem `return` per **retornar** (enviar de tornada) un valor.

```javascript
let vida = 100;
let dany = 0;

function calcularDany(atac, nivell, defensa) {
  let dany = atac + nivell - defensa;
  console.log(`Dany causat: ${dany}`);
  return dany;
}

function calculaVidaRestant(vida, dany) {
  let vidaRestant = vida - dany;
  console.log(`Vida restant: ${vidaRestant}`);
  return vidaRestant;
}

dany = calcularDany(30, 5, 10); // Dany causat: 25
vida = calculaVidaRestant(vida, dany); // Vida restant: 75
dany = calcularDany(50, 10, 25); // Dany causat: 35
vida = calculaVidaRestant(vida, dany); // Vida restant: 40
```

**Important:** El codi després de `return` **NO s'executa**.

```javascript
function exemple() {
  console.log('Això es mostra');
  return 42;
  console.log('Això NO es mostra mai');
}
```

### Exemple pràctic FUNCTION: Comprovar si un jugador està viu

```javascript
function estaViu(vida) {
  return vida > 0;
}

let vidaJugador = 50;

if (estaViu(vidaJugador)) {
  console.log('El jugador està viu');
} else {
  console.log('Game Over');
}
```

### Exemple pràctic FUNCTION: Curar la vida del jugador amb pocions

```javascript
function curarVida(vidaActual, vidaMaxima, curacio) {
  let vidaFinal = vidaActual + curacio;

  if (vidaFinal > vidaMaxima) {
    vidaFinal = vidaMaxima;
  }

  return vidaFinal;
}

let vida = 60;
const VIDA_MAXIMA = 100;
let pocioCura = 30;

console.log(`Vida actual: ${vida}`); // 60

vida = curarVida(vida, VIDA_MAXIMA, pocioCura);
console.log(`Vida després de curar-se: ${vida}`); // 90

vida = curarVida(vida, VIDA_MAXIMA, pocioCura);
console.log(`Vida després de curar-se: ${vida}`); // 100 (no passa del màxim)
```

### Exemple pràctic FUNCTION: Mostrar "barra de vida" per consola

```javascript
const VIDES_MAX = 10;
let vides = 0;

function mostrarBarraVida(vides, videsMaximes) {
  let barraVida = '';
  for (let i = 0; i < videsMaximes; i++) {
    if (i < vides) {
      barraVida += '❤️';
    } else {
      barraVida += '🖤';
    }
  }

  console.log(`Vides: ${barraVida} ${vides}/${videsMaximes}`);
}

mostrarBarraVida(8, 10); // ❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤 8/10
mostrarBarraVida(5, 10); // ❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤 5/10
mostrarBarraVida(2, 10); // ❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤 2/10
```

## Paràmetres per defecte

Podem establir **valors per defecte** als paràmetres.

```javascript
function atacar(dany = 10) {
  console.log(`Atac! Dany: ${dany}`);
}

atacar(25); // "Atac! Dany: 25"
atacar(); // "Atac! Dany: 10" (utilitza el valor per defecte)
```

### Exemple pràctic FUNCTION: Amb Paràmetres per defecte

```javascript
function crearPersonatge(nom = 'Jugador', vida = 100, nivell = 1) {
  console.log('=== PERSONATGE CREAT ===');
  console.log(`Nom: ${nom}`);
  console.log(`Vida: ${vida}`);
  console.log(`Nivell: ${nivell}`);
}

crearPersonatge('Link', 120, 5);
// Nom: Link
// Vida: 120
// Nivell: 5

crearPersonatge('Mario');
// Nom: Mario
// Vida: 100 (per defecte)
// Nivell: 1 (per defecte)

crearPersonatge();
// Nom: Jugador (per defecte)
// Vida: 100 (per defecte)
// Nivell: 1 (per defecte)
```

## Arrow Functions (funcions fletxa)

Una manera **moderna i compacta** d'escriure funcions.

### Sintaxi

```javascript
// Funció clàssica
function atacar(jugador, enemic) {
  return `${jugador} ataca a ${enemic}!`;
}

// Arrow function
const atacarArrow = (jugador, enemic) => {
  return `${jugador} ataca a ${enemic}!`;
};

// Arrow function compacta (return implícit)
const atacarCompacte = (jugador, enemic) => `${jugador} ataca a ${enemic}!`;

console.log(atacar('Mario', 'Goomba'));
console.log(atacarArrow('Luigi', 'Koopa'));
console.log(atacarCompacte('Peach', 'Bowser'));
```

### Exemples pràctic d'ARROW FUNCTION

```javascript
// Un sol paràmetre (no calen parèntesis)
// Doblar punts d'experiència d'un jugador
const duplicarXP = exp => exp * 2;

console.log(`Punts d'EXP inicials: 5 → Duplicats: ${duplicarXP(5)}`); // 10

// Múltiples paràmetres (amb parèntesis)
// Calcular dany d'una arma segons la força base i el factor multiplicador
const calcularDany = (atacBase, multiplicador) => atacBase * multiplicador;

console.log(`Dany de l'arma: ${calcularDany(10, 3)}`); // 15

// Sense paràmetres
// Missatge d'inici de partida
const iniciarPartida = () => console.log('Comença la partida!');

iniciarPartida(); // "Comença la partida!"
```

### Exemple pràctic ARROW FUNCTION: Funcions de joc

```javascript
const estaViu = vida => vida > 0;

const calcularDany = (atac, defensa) => {
  let dany = atac - defensa;
  return dany > 0 ? dany : 0;
};

const mostrarMissatge = missatge => {
  console.log(missatge);
};

// Crida a les funcions de manera combinada
let vida = 50;
mostrarMissatge(estaViu(vida) ? 'Jugador està viu' : 'Game Over');

let dany = calcularDany(30, 15);
mostrarMissatge(`Dany causat: ${dany}`);
```

## L'àmbit de les variables (scope)

Les variables declarades **dins d'una funció** només existeixen dins d'aquesta funció.

```javascript
function exemple() {
  let variableLocal = 'Només existeixo aquí dins';
  console.log(variableLocal); // Funciona
}

exemple();
console.log(variableLocal); // ERROR: variableLocal no està definida
```

### Variables globals vs locals

```javascript
let puntuacioGlobal = 0; // Variable global

function afegirPunts(punts) {
  let bonus = 10; // Variable local
  puntuacioGlobal += punts + bonus;
}

afegirPunts(50);
console.log(puntuacioGlobal); // 60 --> És correcte i s'actualitza (VARIABLE GLOBAL travessa àmbits)
console.log(bonus); // ERROR: bonus no existeix fora de la funció (VARIABLE LOCAL)
```

## Funcions dins de funcions

Podem cridar una funció des d'una altra funció. Això ens permet organitzar, ordenar i fer el codi més llegible.

```javascript
function calcularDany(atac, defensa) {
  let resultat = atac - defensa;
  return resultat > 0 ? resultat : 0;
}

function atacarEnemic(nomEnemic, atac, defensa) {
  let dany = calcularDany(atac, defensa);
  console.log(`Atacant a l'enemic ${nomEnemic}...`);
  console.log(`Dany causat: ${dany}`);
}

function atacarEnemics(enemics, atac) {
  for (let i = 0; i < enemics.length; i++) {
    atacarEnemic(enemics[i].nom, atac, enemics[i].defensa);
  }
}

const llistaEnemics = [
  { nom: 'Goblin', defensa: 10 },
  { nom: 'Elf', defensa: 50 },
  { nom: 'Goblin', defensa: 20 },
];
let atacJugador = 30;
atacarEnemics(llistaEnemics, atacJugador);
// Atacant a l'enemic Goblin... Dany causat: 20
// Atacant a l'enemic Elf... Dany causat: 0
// Atacant a l'enemic Nan... Dany causat: 10
```
