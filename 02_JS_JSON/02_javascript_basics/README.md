# Conceptes Bàsics de JavaScript

## Per què aprendre a programar amb JavaScript?

Imagina que vols crear un **joc web** on un personatge es mou per la pantalla, recull objectes, guanya punts i puja de nivell. O potser vols fer una **aplicació interactiva** que respongui als clics de l'usuari, mostri informació dinàmica o validi formularis.

Tot això és possible amb **JavaScript**, però primer necessitem aprendre els **fonaments de la programació**: com emmagatzemar informació, com prendre decisions segons les circumstàncies, com repetir accions i com organitzar el nostre codi.

En aquest bloc aprendràs a **pensar com un programador** i a escriure codi que faci que les teves pàgines web prenguin vida. Utilitzarem exemples inspirats en **videojocs** i **aplicacions interactives** perquè sigui més divertit i visual.

### 01. Variables i Constants

**Què són?** Espais de memòria on guardem informació que necessitem utilitzar al nostre programa.

**Exemple de joc:** Guardar la vida del jugador, la puntuació actual, el nom del personatge o el nivell en què estem.

**Exercici mental:** Si un jugador comença amb 100 punts de vida i rep 25 punts de mal, com guardem la vida inicial? Com actualitzem la vida després del mal?

### 02. Tipus de Dades

**Què són?** La naturalesa de la informació que emmagatzemem: números, text, valor cert o fals, etc.

**Exemple de joc:** La vida és un número (100), el nom és text ("Link"), el jugador està viu? s'avalua com cert/fals (true/false).

**Exercici mental:** Quin tipus de dada utilitzaries per guardar: la quantitat total d'enemics, el missatge de "Game Over", si el personatge està atacant o està parat.

### 03. Operadors

**Què són?** Símbols que ens permeten fer càlculs, comparacions i presa de decisions.

**Exemple de joc:** Calcular el mal d'un atac potent (força × 2), comprovar si tens prou monedes per comprar (monedes >= preu), combinar condicions (vida > 0 i munició > 0).

**Exercici mental:** Un enemic disposa de 50 punts de vida. El jugador fa un atac de 30 de mal i després un de 25. L'enemic està derrotat?

### 04. Estructures Condicionals

**Què són?** Instruccions que permeten al programa prendre decisions i executar un bloc de codi segons si es compleixen o no les condicions establertes.

**Exemple de joc:** Si la vida <= 0 → Game Over. Si el total de experiència >= 100 → Pujar de nivell. Si disposa d'una clau, està davant la porta i prem una tecla concreta → Obrir la porta.

**Exercici mental:** Descriu amb les teves paraules: què hauria de passar si un jugador arriba a 0 de vida? I si disposa del màxim de vides i troba un "cor"? I si ha arribat al final del nivell però no disposa dels punts o objectes necessaris? I si realitza un atac i l'enemic està en un rang superior al del seu abast?

### 05. Bucles (Estructures Iteratives)

**Què són?** Instruccions que permeten repetir accions múltiples vegades sense haver d'escriure el mateix codi una i altra vegada.

**Exemple de joc:** Generar 10 enemics a la pantalla, moure un projectil fins que surti de la pantalla, recórrer tots els objectes de l'inventari, comprovar si un projectil col·lisiona amb algun dels 10 enemics que hi ha a la pantalla, etc.

**Exercici mental:** Com faries que un enemic es mogués 5 posicions cap a l'esquerra? Hauries d'escriure 5 vegades (mouEsquerra, mouEsquerra, mouEsquerra, mouEsquerra, mouEsquerra) o hi ha una manera millor?

### 06. Vectors i Cadenes (Estructures de Dades)

**Què són?** Eina que ens permet organitzar múltiples dades relacionades en una única variable per una gestió mes fàcil i eficient.

**Exemple de joc:** Una llista d'objectes a l'inventari ["espasa", "poció", "clau"], les millors puntuacions [1500, 1200, 980], els enemics que hi ha actualment a la pantalla ["TIE Fighter", "Star Destroyer", "Star Destroyer", "Death Star"].

**Exercici mental:** Si tens un inventari amb 3 objectes i en reculls un més, com afegiríem aquest nou objecte a la llista? Si hi ha 100 enemics a la pantalla hauriem de tenir 100 variables per guardar la informació de cadascun d'ells o hi ha una millor opció?

### 07. Funcions

**Què són?** Blocs de codi reutilitzables que fan una tasca específica i que podem cridar quan els necessitem.

**Exemple de joc:** Una funció `atacar()` que calcula el mal, una funció `curar()` que consumeix 1 poció i restaura vida, una funció `moureDreta()` que mou el personatge "x Píxels" a la dreta.

**Exercici mental:** Si cada vegada que el jugador ataca has de calcular `mal = força × 1.5 - defensa_enemic`, enlloc d'escriure aquesta fórmula cada vegada poster seria millor crear una funció `calcularMal()` i utilitzar-la en les parts del programa que siguin necessàries.
