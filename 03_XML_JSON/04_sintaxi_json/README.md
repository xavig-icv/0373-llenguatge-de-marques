# Tema 04 – JSON: Sintaxi i estructura

Un document JSON és un fitxer de text pla que representa dades amb una estructura basada en parelles clau-valor. A diferència d'XML, JSON és més compacte i està pensat per a l'intercanvi de dades entre aplicacions.

## Per què JSON és el format més utilitzat?

Quan una aplicació web demana dades a un servidor (una API), la resposta arriba gairebé sempre en **JSON**. GitHub, Spotify, OpenWeather, Google Maps, Telegram, OpenAI, etc., totes les APIs modernes treballen amb JSON.

El principal motiu es que JSON és **lleuger, llegible i directament compatible amb JavaScript** i amb tots els altres llenguatges de programació actuals.

## Estructura bàsica d'un document JSON

Un document JSON ha de tenir un element arrel que contingui tota la resta d'elements.

L'element arrel pot ser un **objecte** `{}` o un **vector** `[]`, i ha de contenir la resta de dades en forma de parelles clau-valor o elements d'una llista.

```json
{
  "clau": "valor"
}
```

Les regles bàsiques de sintaxi JSON:

- Les **claus** (`"clau"`) sempre van entre cometes dobles
- Cada parell clau-valor se separa per `:` (dos punts)
- Cada element se separa per `,` (coma)
- **No** es permet posar coma a l'últim element
- **No** hi ha comentaris en JSON

## Tipus de dades

JSON defineix **sis tipus de dades** nadius:

| Tipus de dada | Exemple      | Notes                                              |
| ------------- | ------------ | -------------------------------------------------- |
| String        | "Hola món"   | Sempre amb cometes dobles.                         |
| Number        | 29.99 o 42   | Sense cometes. Inclou enters i decimals.           |
| Boolean       | true o false | En minúscules i sense cometes.                     |
| Null          | null         | Indica absència de valor.                          |
| Object        | {"id": 1}    | Un conjunt de parells clau-valor entre claus {}.   |
| Array         | ["A", "B"]   | Una llista ordenada de valors entre claudàtors []. |

### String (cadenes de text)

Sempre han d'anar entre cometes dobles. Si necessites incloure cometes dins d'una cadena, has de escapar-la amb una barra invertida `\`:

```json
{
  "nom": "Pep",
  "cognom": "Guardiola",
  "email": "pep@domini.cat"
}
```

### Number (números entrers i decimals)

JSON no distingeix entre enters i decimals. Pels decimals cal utilitzar el punt `.` com a separador decimal, i no es permeten els separadors de milers. Per exemple: `1000` és correcte, però `1,000` no ho és.

```json
{
  "edat": 25,
  "nota": 8.5,
  "temperatura": -3.2
}
```

### Boolean (cert o fals lògic)

JSON fa servir els valors `true` i `false` per representar valors booleans. S'han d'escriure en minúscules i sense cometes, ja que són paraules reservades.

```json
{
  "aprovat": true,
  "matriculat": false
}
```

### Null

JSON utilitza el valor `null` per indicar que una clau existeix però no disposa de cap valor associat. S'utilitza per representar camps opcionals o buits. No és el mateix que una cadena buida `""` ja que aquesta si que es considera un valor vàlid.

```json
{
  "primerCognom": "Guardiola",
  "segonCognom": null,
  "telefon": null
}
```

### Vector (Array o llista ordenada)

Un vector o array és una llista ordenada de valors que poden ser de qualsevol tipus, inclosos altres arrays o objectes. Els elements d'un array es separen per comes i van entre claudàtors `[]`.

```json
{
  "moduls": ["HTML", "JavaScript", "XML"],
  "numeros": [1, 2, 3, 4, 5],
  "booleans": [true, false, true]
}
```

### Object (objecte niuat)

Un objecte és un conjunt de parelles clau-valor, on el valor (l'objecte niuat) es disposa entre claus `{}`. Les claus han de ser úniques dins de l'objecte i sempre han d'anar entre cometes dobles. Els valors poden ser de qualsevol tipus, inclosos altres objectes o arrays.

```json
{
  "alumne": {
    "id": 1,
    "nom": "Pep Guardiola",
    "cicle": "DAM",
    "curs": 1
  }
}
```

## Estructures complexes

La potència de JSON és poder **combinar** tots els tipus de dades per representar qualsevol estructura:

### Array d'objectes

JSON permet crear arrays que continguin objectes, s'utilitzen per representar llistes d'entitats reals com alumnes, productes, etc.

```json
{
  "alumnes": [
    {
      "id": 1,
      "nom": "Pep Guardiola",
      "cicle": "DAM",
      "curs": 1
    },
    {
      "id": 2,
      "nom": "Joan Mas",
      "cicle": "DAM",
      "curs": 1
    },
    {
      "id": 3,
      "nom": "Laia Ferrer",
      "cicle": "DAM",
      "curs": 1
    }
  ]
}
```

### Objectes niuats en profunditat

JSON permet crear objectes niuats en profunditat, és a dir, objectes que contenen altres objectes com a valors. Aquesta característica és molt útil per representar i organitzar dades jeràrquiques o relacionades.

```json
{
  "empresa": {
    "nom": "TechCorp SL",
    "seu": {
      "ciutat": "Barcelona",
      "adreca": {
        "carrer": "Gran Via",
        "numero": 42,
        "codiPostal": "08001"
      }
    },
    "departaments": ["Enginyeria", "Disseny", "Màrqueting"],
    "activa": true,
    "empleats": 150
  }
}
```

## Resposta real d'una API

Això és el que retorna l'API de GitHub quan demanem informació d'un usuari (`GET https://api.github.com/users/torvalds`):

Nota: He simplificat les dades per a que sigui més llegible, l'API real retorna molts més camps i informació addicional.

Nota2: Pots veure com tots els valors tenen tipus concrets: cadenes, números, i `null` si hi ha algun valor buit.

> **IMPORTANT:** Quan treballes amb APIs, el més important no és memoritzar tots els caps del JSON, ni l'estructura exacta, sinó saber localitzar la informació que necessites i saber com accedir-hi.

```json
{
  "login": "torvalds",
  "id": 1024025,
  "url": "https://api.github.com/users/torvalds",
  "html_url": "https://github.com/torvalds",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Linus Torvalds",
  "company": "Linux Foundation",
  "blog": "",
  "location": "Portland, OR",
  "email": null,
  "public_repos": 11,
  "public_gists": 1,
  "followers": 299342,
  "following": 0,
  "created_at": "2011-09-03T15:26:22Z",
  "updated_at": "2026-01-13T07:10:05Z"
}
```

Exemple de recuperació de dades de la API de Github i tractament d'aquesta informació.

```javascript
// JavaScript llegeix JSON de forma nativa
const resposta = await fetch('https://api.github.com/users/xavig-icv');
const dades = await resposta.json();
console.log(dades.name); // "Xavi Garcia"
console.log(dades.company); // "Institut Carles Vallbona"
```

## Bones pràctiques de nomenclatura

Tot i que JSON no imposa cap convenció de nomenclatura, és important seguir un estil consistent per a les claus dels objectes. Això facilita la lectura i mantenibilitat del codi, especialment quan es treballa en equip o es comparteixen dades entre diferents sistemes.

| Estil        | Exemple       | Ús recomanat            |
| ------------ | ------------- | ----------------------- |
| `camelCase`  | `nomComplet`  | ✅ APIs JavaScript/JSON |
| `snake_case` | `nom_complet` | APIs Python/Ruby        |
| `kebab-case` | `nom-complet` | ❌ No vàlid en JSON     |
| `PascalCase` | `NomComplet`  | Evitar en JSON          |

**Regles generals:**

- Fes servir noms **descriptius** i **en anglès** si el projecte és col·laboratiu
- Sigues **consistent**: si fas servir `camelCase`, fes-lo servir sempre i no canviis d'estil.
- Evita abreviatures crítiques: `usr` → `user`, `num` → `number`, etc.

## JSON vs XML amb la mateixa informació

Pots veure la gran diferència entre XML i JSON per a una llista de 2 productes:

**XML (52 línies):**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<productes>
  <producte id="1">
    <nom>Teclat mecànic</nom>
    <preu>89.99</preu>
    <disponible>true</disponible>
    <etiquetes>
      <etiqueta>perifèric</etiqueta>
      <etiqueta>gaming</etiqueta>
    </etiquetes>
  </producte>
  <producte id="2">
    <nom>Ratolí sense fils</nom>
    <preu>34.99</preu>
    <disponible>false</disponible>
    <etiquetes>
      <etiqueta>perifèric</etiqueta>
    </etiquetes>
  </producte>
</productes>
```

**JSON (25 línies):**

```json
{
  "productes": [
    {
      "id": 1,
      "nom": "Teclat mecànic",
      "preu": 89.99,
      "disponible": true,
      "etiquetes": ["perifèric", "gaming"]
    },
    {
      "id": 2,
      "nom": "Ratolí sense fils",
      "preu": 34.99,
      "disponible": false,
      "etiquetes": ["perifèric"]
    }
  ]
}
```

## Eines per treballar amb JSON

| Eina                   | Per a què serveix                                            |
| ---------------------- | ------------------------------------------------------------ |
| **VS Code**            | Autocompletar, formatejar (`Shift+Alt+F`), detectar errors   |
| **JSONLint**           | [jsonlint.com](https://jsonlint.com) – validador online      |
| **JSON Formatter**     | [jsonformatter.org](https://jsonformatter.org) – visualitzar |
| **Postman / Insomnia** | Provar APIs i veure respostes JSON                           |
| **jq** (terminal)      | Processar JSON des de la línia de comandes                   |

**jq: navegar JSON des del terminal:**

```bash
# Instal·lar jq
sudo apt install jq

# Veure JSON formatat
cat dades.json | jq .

# Accedir a un camp concret
cat dades.json | jq '.nom'

# Filtrar un array
cat dades.json | jq '.alumnes[] | select(.aprovat == true)'
```

## Exercicis

**Exercici 1.** Crea un fitxer `perfil.json` amb el teu perfil "fictici" com a desenvolupador/a. Ha d'incloure: `nom`, `edat`, `llenguatges` (array), `experiencia` (anys, decimal) i `xarxes` (objecte amb `github` i `linkedin`).

**Exercici 2.** Crea un fitxer `api_pelicules.json` que simuli la resposta d'una API de pel·lícules. Ha de contenir un array `pelicules` i com a mínim 3 objectes, cadascun amb: `id`, `titol`, `director`, `any`, `generes` (array), `puntuacio` (decimal), `disponible` (array) i aquest vector conté `fisic` (booleà) i `streaming` (booleà).

**Exercici 3.** Obre el fitxer al VSCode o a `jsonformatter.org`. Intenta afegir un error de sintaxi (una coma de sobra, una clau sense cometes). Observa el missatge d'error.
