# 📦 Bloc 02. Contingut textual i elements bàsics

En aquest bloc treballarem les etiquetes HTML més comunes per representar **text**, **llistes**, **enllaços** i **taules**. Són les eines bàsiques per mostrar informació estructurada dins d’una pàgina web.

---

## ✍️ Etiquetes de text

Les etiquetes de text ens permeten definir el contingut textual dins del document HTML, donant-li una jerarquia i una estructura clara.

| Etiqueta      | Funció                                                                     |
| ------------- | -------------------------------------------------------------------------- |
| `<h1>`-`<h6>` | Títols de nivell 1 a 6. Jerarquia de contingut segons la seva importància. |
| `<p>`         | Paràgraf. Bloc de text genèric (es pot escriure qualsevol contingut).      |
| `<strong>`    | Text important (amb significat semàntic i es veu en negreta).              |
| `<em>`        | Text amb èmfasi (indica un canvi d'entonació  i es veu en cursiva).        |
| `<code>`      | Fragment de codi font o comandes de sistema (tipografia "monospace").      |
| `<pre>`       | Text preformatat (manté els espais i els salts de línia del text).         |
| `<blockquote>`| S'utilitza per citar una font externa.                                     |
| `<br>`        | Substituida amb CSS: Salt de línia.                                        |
| `<hr>`        | Substituida amb CSS: Línia horitzontal que separa seccions.                |

---

## `<h1> – <h6>`
```html
<h1>Títol de Nivell 1</h1>
<h2>Títol de Nivell 2</h2>
<h3>Títol de Nivell 3</h3>
<h4>Títol de Nivell 4</h4>
<h5>Títol de Nivell 5</h5>
<h6>Títol de Nivell 6</h6>
```
## `<p>`
```html
<p>Això és un paràgraf de text. Conté informació general i es mostra en bloc (en una línia independent).</p>
```

## `<strong>`
```html
<p>Aquest text és <strong>molt important</strong> dins del context.</p>
```

## `<em>`
```html
<p>Volem <em>ressaltar aquesta idea</em> amb èmfasi.</p>
```

## `<code>`
```html
<p>Connecta't remotament escrivint <code>ssh pepet@172.20.10.199</code> al terminal.</p>
```

## `<pre>`
```html
<pre>
const jugador = {
  nom: "Pepet",
  punts: 999,
  nivell: 5,
  vides: 3
};
</pre>
```

## `<blockquote>`
```html
<blockquote>
  "És perillós anar sol! Agafa això." - L'ancià, The Legend of Zelda (1986)
</blockquote>
```

## `<br>`
```html
<p>Línia 1<br>Línia 2</p>
```

## `<hr>`
```html
<p>Secció 1</p>
<hr>
<p>Secció 2</p>
```

---

## 📝 Etiquetes de llistes

Les llistes permeten agrupar informació de forma ordenada o desordenada.

### 🔹 Llistes no ordenades (`<ul>`)
Són llistes on l’ordre no és rellevant. Els elements es representen amb punts.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### 🔸 Llistes ordenades (`<ol>`)
Són llistes numerades, on l’ordre dels elements té importància.

```html
<ol>
  <li>Obrir l'editor</li>
  <li>Escriure el codi</li>
  <li>Desar l'arxiu</li>
  <li>Tanca l'editor</li>
</ol>
```

## 🔗 Etiquetes d'enllaç (hipervincles)
Els enllaços són l’essència del web, ja que permeten navegar entre pàgines o llocs web.

### Etiqueta (`<a>`)

```html
<a href="https://www.lamevaweb.cat">Visita el lloc web</a>
<a href="#videojocs">Ves a la secció Videojocs</a>
<a href="https://latevaweb.cat" target="_blank">Obre una nova pestanya</a>
<a href="./README.md" download>Descarrega el fitxer README.md</a>
```

- `href`: indica la destinació de l’enllaç.
- Els enllaços poden ser a pàgines externes (https://...) o internes (./fitxer.html).
- L’atribut `target="_blank"` permet obrir l’enllaç en una pestanya nova del navegador.

## Etiquetes de taules

Les taules s’utilitzen per mostrar dades estructurades en **files i columnes**.

| Etiqueta     | Funció                                                                                      |
|--------------|---------------------------------------------------------------------------------------------|
| `<table>`    | Defineix la taula. És l’element principal que engloba tot el contingut de la taula.         |
| `<caption>`  | Títol de la taula que s'ha de situar a continuació de l'etiqueta `<table>`.                 |
| `<thead>`    | Secció de capçaleres de la taula. Conté una o diverses files `<tr>` amb cel·les `<th>`.     |
| `<tbody>`    | Secció principal amb dades de la taula. Està composat de files `<tr>` i cel·les `<td>`.     |
| `<tfoot>`    | Opcional. Peu de taula. Pot contenir (sumatoris) totals, notes o informació resumida.       |
| `<tr>`       | Defineix una **fila** (Table Row). Pot estar dins de `<thead>`, `<tbody>` o `<tfoot>`.      |
| `<th>`       | Cel·la de **capçalera** (Table Heading) dins d’una fila. Text en **negreta** i **centrat**. |
| `<td>`       | Cel·la de **dades** (Table Data) dins d’una fila. Pot contenir informació genèrica.         |


```html
<table>
  <caption>Llenguatges Web</caption>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Tipologia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Estructura</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Estils</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Dinamisme</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Curs d'introducció al desenvolupament web</td>
    </tr>
  </tfoot>
</table>
```