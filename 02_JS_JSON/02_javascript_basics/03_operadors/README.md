# 03. Operadors aritmètics, relacionals i lògics

## Què són els operadors?

Els **operadors** són símbols que ens permeten realitzar **operacions** amb les dades: càlculs matemàtics, comparacions i decisions lògiques. Disposem de 3 tipus d'operadors:

- `Operadors Aritmètics`: Permeten realitzar operacions matemàtiques amb valors numèrics, constants i variables.
- `Operadors Relacionals`: Permeten comparar valors. Determina si el resultat de l'operació és cert o fals.
- `Operadors Lògics`: Permeten combinar condicions i determinar el seu resultat final (cert o fals).

Per poder desenvolupador un videojoc hem de fer servir els diferents operadors que ens permetran:

- Comprovar si un atac fa efecte o no
- Calcular el dany d'un atac
- Comprovar si un jugador té prou monedes
- Verificar si s'ha superat un nivell
- Combinar múltiples condicions

## Prioritat d'operadors

Els operadors tenen un **ordre de prioritat** semblant al que es fa servir a matemàtiques.

**Operadors Ordrenats (de major a menor prioritat):**

1. `()` Parèntesis
2. `**` Potència
3. `*` `/` `%` Multiplicació, divisió, mòdul
4. `+` `-` Suma, resta
5. `>` `<` `>=` `<=` Comparacions
6. `==` `===` `!=` `!==` Igualtat
7. `&&` AND lògic
8. `||` OR lògic

```javascript
// Sense parèntesis
let resultat = 10 + 5 * 2;
console.log(resultat); // 20 (primer 5*2, després +10)

// Amb parèntesis
let resultat2 = (10 + 5) * 2;
console.log(resultat2); // 30 (primer 10+5, després *2)

// Exemple de joc
let atacBase = 10;
let bonus = 5;
let multiplicador = 2;

let danyTotal = (atacBase + bonus) * multiplicador;
console.log('Dany total:', danyTotal); // 30
```

**Consell:** Tot i l'ordre de prioritats, utilitza sempre els **parèntesis** per deixar clara la teva intenció alhora de programar, encara que no siguin necessaris.
