# Tema 02 – XML: Sintaxi i estructura

## Estructura bàsica d'un document XML

Un document XML és un fitxer de text pla amb una estructura jeràrquica. Per que es consideri ben format, ha de seguir aquestes regles:

Han de tenir una **declaració** inicial i un **element arrel** que contingui tota la resta d'elements.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<arrel>
  <!-- contingut del document -->
</arrel>
```

### 1. La Declaració XML

La primera línia d'un document XML defineix les metadades del document (la versió que utilitza, la codificació de caràcters, etc.).

- `<?xml version="1.0" encoding="UTF-8"?>` → declaració XML (versió normalment 1.0 i codificació de caràcters, recomanem UTF-8)

### 2. L'element Arrel

Els documents XML han de tenir UN i NOMÉS UN element arrel que contingui la resta d'elements.

- `<arrel>` → El primer element del document és diu arrel, només pot haver 1 element arrel en tot el document.
- `<!-- comentari -->` → comentari (Text d'ajuda pels desenvolupadors ignorat pel processador).

### 3. Elements, Atributs i Jerarquia

Els **elements** són la unitat bàsica d'informació. Cada element disposa d'una etiqueta d'obertura, el contingut de text i una etiqueta de tancament:

```xml
<nom>Auriculars sense fil</nom>
<preu>29.99</preu>
<disponible>true</disponible>
```

El **niuament** (estructura en arbre): Els elements es poden incloure uns dins d'altres, respectant l'ordre de tancament:

```xml
<producte>
  <nom>Ratolí sense fils</nom>
  <preu>34.99</preu>
  <categories>
    <categoria>Informàtica</categoria>
    <categoria>Perifèrics</categoria>
  </categories>
</producte>
```

Els **atributs** aporten informació addicional sobre un element. S'escriuen dins de l'etiqueta d'obertura amb el format nom="valor" i el seu valor sempre va entre cometes:

```xml
<alumne id="1">
  <nom>Pep Guardiola</nom>
  <cicle>DAM</cicle>
  <curs>1</curs>
  <matricula moneda="EUR">100</matricula>
</alumne>
```

Elements **buits** (sense contingut) es poden tancar en la mateixa etiqueta (escriptura de forma curta):

```xml
<imatge src="foto.jpg"></imatge>
<!-- és equivalent a -->
<imatge src="foto.jpg" />
```

**Quan fer servir elements o atributs?**

| Utilitza **elements**                | Utilitza **atributs**                                       |
| ------------------------------------ | ----------------------------------------------------------- |
| Elements que poden tenir subelements | Quan el valor és simple (sense subelements)                 |
| Per representar contingut principal  | Metadades simples (informació complementària del contingut) |
| Text llarg o complex                 | Per a valors curts                                          |
| Les dades poden repetir-se           | Identificadors únics (`id`, `version`, `sku`, `iban`)       |

> Regla d'or: Si dubtes, utilitza un element. Els elements són molt més fàcils d'ampliar en el futur si la teva estructura de dades canvia.

### 4. Entitats

Les **entitats** permeten representar caràcters reservats en XML, és a dir, caràcters que tenen un significat dins del document i que s'interpretarien per l'analitzador (parser).

| Entitat  | Caràcter | Quan cal utilitzar-la                                    |
| -------- | -------- | -------------------------------------------------------- |
| `&amp;`  | `&`      | Sempre que s'escrigui &                                  |
| `&lt;`   | `<`      | Dins del text (s'interpreta com a l'obertura d'etiqueta) |
| `&gt;`   | `>`      | Dins del text (s'interpreta com el tancament d'etiqueta) |
| `&quot;` | `"`      | Dins d'atributs amb cometes dobles                       |
| `&apos;` | `'`      | Dins d'atributs amb cometes simples                      |

```xml
<!-- Error: el parser interpretarà < com inici d'etiqueta -->
<condicio>preu < 100</condicio>

<!-- Correcte -->
<condicio>preu &lt; 100</condicio>
<empresa>Informàtica &amp; Telecos S.L.</empresa>
```

### 5. Seccions CDATA (Character Data)

Les seccions CDATA permeten incloure contingut amb caràcters especials (com codi HTML o JavaScript) sense necessitat d'escapar-los.

La secció s'escriu amb la sintaxi `<![CDATA[ ... ]]>` i tot el contingut s'interpreta com text literal, no com XML.

```xml
<codi>
  <![CDATA[
    if (preu < 100 && disponible) {
      console.log("Oferta disponible!");
    }
  ]]>
</codi>
```

## Document ben format vs. Document vàlid

### Document ben format

Un document és **ben format** si respecta les regles sintàctiques universals de l'XML.

Si hi ha algun error, el processador XML el detecta i el reporta (normalment indicant la línia i la posició), i el document no es pot processar correctament.

✅ Comença amb la declaració `<?xml ... ?>`
✅ Disposa d'un únic element arrel  
✅ Totes les etiquetes estan tancades (o auto-tancades `<tag/>`).
✅ Les etiquetes estan correctament niuades (no es creuen, l'últim element que s'obre és el primer que es tanca)  
✅ Els valors dels atributs estan entre cometes  
✅ Case-Sensitive: Distingeix entre majúscules i minúscules (`<Nom>` != `<nom>`)

```xml
<!-- Mal format: etiquetes creuades -->
<a><b>text</a></b>
<!-- Ben format -->
<a><b>text</b></a>

<!-- Mal format: atribut sense cometes -->
<producte id=1>
<!-- Ben format -->
<producte id="1">
```

### Document vàlid

Un document XML és **vàlid** quan, a més d'estar ben format, compleix les regles definides en un esquema (**XSD** o **DTD**).

L'esquema defineix:

- Quins elements i atributs existeixen
- Quins elements son obligatoris i opcionals
- La jerarquia d'elements (el seu ordre)
- Els tipus de dades (si és un número, una data, un text, etc.).

Nota: Tot document vàlid és ben format, però no a l'inrevés.

## Exemple complet: catàleg de jocs

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cataleg>
  <joc id="1" plataforma="PC">
    <titol>The Witcher 3</titol>
    <genere>RPG</genere>
    <any>2015</any>
    <preu>19.99</preu>
    <disponible>true</disponible>
  </joc>
  <joc id="2" plataforma="PS5">
    <titol>Horizon Forbidden West</titol>
    <genere>Aventura</genere>
    <any>2022</any>
    <preu>49.99</preu>
    <disponible>true</disponible>
  </joc>
  <joc id="3" plataforma="Switch">
    <titol>The Legend of Zelda: Tears of the Kingdom</titol>
    <genere>Aventura</genere>
    <any>2023</any>
    <preu>59.99</preu>
    <disponible>false</disponible>
  </joc>
</cataleg>
```

## Eines per treballar amb XML

| Eina                     | Per a què serveix                                  |
| ------------------------ | -------------------------------------------------- |
| **VS Code**              | Editar XML amb extensions (XML de Red Hat)         |
| **xmllint** (terminal)   | Validar i formatejar des de la línia de comandes   |
| **Browser**              | Els navegadors mostren XML directament             |
| **Online XML Validator** | [xmlvalidation.com](https://www.xmlvalidation.com) |

**Validar XML amb `xmllint` (terminal):**

```bash
# Comprovar si un fitxer és ben format
xmllint --noout fitxer.xml

# Validar contra un esquema XSD
xmllint --noout --schema esquema.xsd fitxer.xml
```

## Exercicis bàsics

**Exercici 1.** Crea un fitxer `biblioteca.xml` que representi una biblioteca amb almenys 3 llibres. Cada llibre ha de tenir: `isbn` (atribut), `titol`, `autor`, `any` i `preu`.

**Exercici 2.** Identifica els errors del document següent i corregeix-los:

```xml
<alumnes>
  <alumne id=1>
    <nom>Pepet
    <nota>7,5</nota>
  </alumne>
  <curs>DAW</alumne>
</alumnes>
```

**Exercici 3.** Afegeix al catàleg de jocs un quart joc que contingui una descripció amb caràcters especials (`&`, `<`, `>`). Fes servir entitats o CDATA.

**Exercici 4.** Crea un fitxer `joc.xml` que representi la informació d'un videojoc i les dades dels seus nivells.

El document ha de tenir:

- Un element arrel `<joc>` amb els atributs: `nom` i `plataforma`
- Elements amb informació general del joc: `genere`, `any`
- Diversos elements `<nivell>` (mínim 3), cadascun amb: `numero` (atribut), `nom`, `numeroEnemics`, `puntsMaxims`, `completat` (true/false)
