## L'estructura SI `if`

La forma més bàsica de decisió és **`if`** (si). Executa un bloc de codi **només si** la condició és certa.

### Sintaxi

```javascript
if (condició a avaluar) {
  // Codi que s'executa SI la condició és true
}
```

### Exemples bàsics

```javascript
let vida = 0;
// Si la vida és més petit o igual a 0 s'executa el bloc de codi
if (vida <= 0) {
  console.log('GAME OVER :(');
}

let punts = 150;
// Si el número de punts és més gran o igual a 100 s'executa el bloc de codi
if (punts >= 100) {
  console.log('Has pujat de nivell!');
}

let teClau = false;
// Si teClau és true s'executa el bloc de codi
if (teClau) {
  console.log("La porta s'obre");
}
```

### Exemple pràctic: Sistema de vida

```javascript
const VIDA_BAIXA = 30;
let vidaActual = 20;

console.log(`Vida actual: ${vidaActual}`);

// Si vidaActual és més petit o igual a 0 s'executa el bloc de codi
if (vidaActual <= 0) {
  console.log('Game Over');
}

// Si vidaActual és més gran que 0 I vidaActual és més petit o igual que VIDA_BAIXA
if (vidaActual > 0 && vidaActual <= VIDA_BAIXA) {
  console.log('Vida baixa! Utilitza una poció!');
}

// Si vidaActual és més gran que VIDA_BAIXA s'executa el bloc de codi
if (vidaActual > VIDA_BAIXA) {
  console.log('Vida en bon estat');
}
```

## L'estructura SI/SINÓ `if...else`

Si volem executar un codi quan la condició es compleix **true** i un altre quan no es compleix **false**, utilitzem l'estructura condicional **`if`** ... **`else`** (si/sinó).

### Sintaxi

```javascript
if (condició a avaluar) {
  // Codi si és true (condició es compleix)
} else {
  // Codi si és false (condició no es compleix
}
```

### Exemples bàsics

```javascript
let monedes = 30;
let preuEspasa = 50;
// Si el número de monedes és més gran o igual al preuEspasa (executa bloc IF)
// Si el número de monedes és mes petit al preuEspasa (executa bloc ELSE)
if (monedes >= preuEspasa) {
  console.log("Has comprat l'espasa!");
  monedes = monedes - preuEspasa;
} else {
  console.log('No disposes de prou monedes :(');
}

let esDeDia = true;
let nivellEnemic = 1;
// Si és de dia, esDeDia = true, (s'executa el bloc IF)
// Si és de nit, esDeDia = false, (s'executa el bloc ELSE)
if (esDeDia) {
  console.log('És de dia, els enemics són dèbils');
  nivellEnemic = 5;
} else {
  console.log('És de nit, els enemics són més forts');
  nivellEnemic = 10;
}
```

### Exemple pràctic: Validar atac

```javascript
let municio = 5;

console.log("Intent d'atacar...");

if (municio > 0) {
  console.log('Atac executat!');
  municio--;
  console.log(`Munició restant: ${municio}`);
} else {
  console.log('Sense munició! Recarrega!');
}
```

## L'estructura SI/SINÓ composta `if...else if...else`

Si volem avaluar **múltiples condicions** que depenen unes de les altres, fem ús de l'estructura **`if`** ... **`else if`** i pot finalitzar amb un **`else`** si és necessari.

### Sintaxi

```javascript
if (condició1) {
  // Codi si la condició1 és true
} else if (condició2) {
  // Codi si la condició2 és true
} else if (condició3) {
  // Codi si la condició3 és true
} else {
  // Codi si cap condició és true
}
```

### Exemple: Classificació de puntuació

```javascript
let puntuacio = 690;
// Quin bloc s'executarà?
if (puntuacio >= 1000) {
  console.log('Rang: LLEGENDA');
} else if (puntuacio >= 750) {
  console.log('Rang: OR');
} else if (puntuacio >= 500) {
  console.log('Rang: PLATA');
} else if (puntuacio >= 250) {
  console.log('Rang: BRONZE');
} else {
  console.log('Rang: PRINCIPIANT');
}
```

### Exemple: Sistema de salut

```javascript
let vida = 45;
const VIDA_MAXIMA = 100;

console.log(`Vida: ${vida} / ${VIDA_MAXIMA}`);
// Quin bloc de codi s'executarà?
if (vida <= 0) {
  console.log('Partida finalitzada :(');
} else if (vida < 20) {
  console.log("Crític! Cura't amb una Súper Poció!");
} else if (vida < 50) {
  console.log('Vida baixa, vés amb compte.');
} else if (vida < 80) {
  console.log('Vida correcta');
} else {
  console.log('Vida excel·lent :)');
}
```

### Exemple: Sistema de clima en el joc

```javascript
let temperatura = -5;
let velocitat = 100;
let vida = 100;

console.log(`Temperatura: ${temperatura}°C`);
// Modifica el valor de la temperatura i observa tots els casos
if (temperatura < -10) {
  console.log('Congelat! -50% velocitat i -25% vida');
  velocitat = velocitat - velocitat / 2;
  vida = vida - vida / 4;
} else if (temperatura < 0) {
  console.log('Molt fred! -25% velocitat');
  velocitat = velocitat - velocitat / 4;
} else if (temperatura < 15) {
  console.log('Fred, però suportable -10% velocitat');
  velocitat = velocitat - velocitat / 10;
} else if (temperatura < 30) {
  console.log('Temperatura ideal');
} else {
  console.log('Massa calor! -10% vida/min');
  vida = vida - vida / 10;
}
```

## Estructures Condicionals niuades (nested conditions)

Si una condició és compleix i s'executa un bloc de codi d'un IF, però posteriorment volem avaluar altres condicions ens trobem que hem de crear una estructura d'un **`if` dins d'un altre `if`** o un **`if` dins d'un `else`**.

```javascript
let teClau = true;
let portaTancada = true;

if (portaTancada) {
  console.log('La porta està tancada');
  if (teClau) {
    console.log("Utilitzes la clau i s'obre la porta!");
  } else {
    console.log('Necessites una clau');
  }
} else {
  console.log('La porta ja està oberta');
}
```

### Exemple: Accés a masmorra

```javascript
let nivell = 8;
let tePasse = false;
let haCompletatQuestPrevia = true;

console.log('Intentant accedir a la masmorra...');

if (nivell >= 5) {
  console.log("Disposes d'un nivell mínim per accedir.");

  if (tePasse) {
    console.log("Disposes d'un passe. Accés concedit!");
  } else if (haCompletatQuestPrevia) {
    console.log('No tens passe però, has completat la quest prèvia. Accés concedit!');
  } else {
    console.log('Necessites completar la quest prèvia o tenir un passe');
  }
} else {
  console.log('Nivell insuficient per accedir a la massmorra.');
}
```
