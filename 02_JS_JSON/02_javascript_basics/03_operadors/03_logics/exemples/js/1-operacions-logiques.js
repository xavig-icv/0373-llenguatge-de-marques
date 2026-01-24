// Operador AND (&&)
let vida = 80;
let municio = 10;
// El jugador pot atacar si disposa de prou (vida I munició)
let potAtacar = vida > 0 && municio > 0;
console.log(`Pot atacar? ${potAtacar}`); // true

// Operador OR (||)
let nivell = 7;
let teTiquet = true;
// Pot entrar si és (nivell 10 o major O disposa d'un tiquet)
let potEntrar = nivell >= 10 || teTiquet;
console.log(`Pot entrar? ${potEntrar}`); // true

// Operador NOT (!)
let enemicsActius = false;
let zonaSegura = !enemicsActius;
console.log(`Zona segura? ${zonaSegura}`); // true
