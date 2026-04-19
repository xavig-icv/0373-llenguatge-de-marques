# Tema 03 – Validació de documents XML amb XSD

## Què és un esquema XSD?

Un **XSD (XML Schema Definition)** és un document que defineix l'estructura que ha de tenir un fitxer XML: quins elements i atributs existeixen, en quin ordre apareixen, quins tipus de dades accepten, si són obligatoris o opcionals i indicar un mínim i màxim de vegades que poden aparèixer.

L'objectiu és passar d'un document **ben format** a un document **vàlid**: que compleixi unes regles definides per nosaltres.

## Estructura bàsica d'un XSD

Un fitxer XSD és un document XML que segueix una sintaxi específica. Ens permet definir els elements i atributs que volem que el nostre XML contingui, així com les seves restriccions.

Els fiters XSD comencen sempre amb l'etiqueta `<xs:schema>`. El prefix xs: indica que estem utilitzant elements propis de XML Schema i no del nostre XML personalitzat.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <!-- Aquí definim els elements -->

</xs:schema>
```

Perquè un document XML es pugui validar segons les regles establertes, l'hem de "connectar" al seu fitxer XSD mitjançant uns atributs especials a l'element arrel del nostre XML.

- `xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"` indica que estem fent referència a un esquema XML.
- `xsi:noNamespaceSchemaLocation="cataleg.xsd"` indica que el nostre XML ha de ser validat contra l'esquema definit al fitxer `cataleg.xsd`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<cataleg xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="cataleg.xsd">
  <!-- Contingut del catàleg XML -->
</cataleg>
```

## Tipus de dades bàsics

XSD ofereix tipus de dades simples predefinits (Simple Types) que podem utilitzar per assegurar-nos que els valors dels nostres elements i atributs tenen el format correcte.

Aquests tipus tenen un format estricte que s'ha de respectar per passar la validació.

| Tipus XSD            | Equivalent                                      | Exemple               |
| -------------------- | ----------------------------------------------- | --------------------- |
| `xs:string`          | Text genèric                                    | `"Pep Guardiola"`     |
| `xs:integer`         | Enter (positius o negatius )                    | `42`, `-10`           |
| `xs:positiveInteger` | Enter positiu                                   | `1`, `100`            |
| `xs:decimal`         | Decimal (amb punt)                              | `19.99`               |
| `xs:boolean`         | Booleà (valors lògics amn minúscula)            | `true` / `false`      |
| `xs:date`            | Data (YYYY-MM-DD)                               | `2026-04-19`          |
| `xs:dateTime`        | Data i hora                                     | `2026-04-19T10:30:00` |
| `xs:ID`              | Identificador únic (comença lletra o guió baix) | `joc1`                |

## Elements simples

Un **element simple** és aquell que només conté text, sense subelements ni atributs (res aniuat al seu interior).

Imagina que en el teu XML tens aquestes dades:

```xml
<nom>Slimbook FEDORA Black 16"</nom>
<preu>1934.00</preu>
<any>2026</any>
<disponible>false</disponible>
```

Per definir-les a l'esquema XSD, utilitzem l'etiqueta `<xs:element>` especificant el seu nom i el seu tipus

```xml
<xs:element name="nom" type="xs:string" />
<xs:element name="preu" type="xs:decimal" />
<xs:element name="any" type="xs:integer" />
<xs:element name="disponible" type="xs:boolean" />
```

### Restriccions en elements simples

Quan un element disposa d'un tipus bàsic (com string o decimal) però volem limitar els seus valors, definim un tipus personalitzat mitjançant restriccions.

**Rangs numèrics:** Podem establir un rang de valors per a números amb `minInclusive` i `maxInclusive`.

```xml
<!-- Valor amb decimals entre 0 i 10 -->
<xs:element name="nota">
  <xs:simpleType>
    <xs:restriction base="xs:decimal">
      <xs:minInclusive value="0" />
      <xs:maxInclusive value="10" />
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

**Longitud de text:** Podem limitar la longitud d'una cadena (string) amb `length`, `maxLength` o `minLength`.

```xml
<!-- Longitud màxima d'un text -->
<xs:element name="codi">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:maxLength value="10" />
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

**Llista de valors permesos:** Podem definir un conjunt de valors per a un element fent ús de les enumeracions.

```xml
<!-- Llista tancada de valors (enumeració) -->
<xs:element name="genere">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:enumeration value="RPG" />
      <xs:enumeration value="Aventura" />
      <xs:enumeration value="Esports" />
      <xs:enumeration value="Estratègia" />
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

## Elements complexos

Un **element complex** conté altres elements (fills), atributs o ambdues coses. S'utilitza l'etiqueta `<xs:complexType>`.

Partint del següent XML:

```xml
<joc id="1" plataforma="PC">
  <titol>Hollow Knight</titol>
  <genere>Metroidvania</genere>
  <any>2017</any>
  <preu>19.99</preu>
  <disponible>true</disponible>
</joc>
```

Podem definir l'element `joc` com un element complex que conté altres elements i atributs, fent ús de `<xs:sequence>` per establir l'ordre dels elements fills i `<xs:attribute>` per definir els atributs.

Podem combinar amb `<xs:choice>` si volem que només es pugui triar un element entre diversos possibles. Per exemple, si el gènere d'un joc només pot ser un entre "RPG", "Aventura", "Esports" o "Estratègia", utilitzem `<xs:choice>` dins de la definició del gènere.

```xml
<xs:element name="joc">
  <xs:complexType>
    <!-- SEQUENCE: Els elements fills en ordre obligatori -->
    <xs:sequence>
      <xs:element name="titol" type="xs:string" />
      <xs:element name="genere" type="xs:string" />
      <xs:element name="any" type="xs:integer" />
      <xs:element name="preu" type="xs:decimal" />
      <xs:element name="disponible" type="xs:boolean" />
    </xs:sequence>
    <!-- ATTRIBUTE: Els atributs de l'element es defineixen DESPRÉS de la seqüència -->
    <xs:attribute name="id" type="xs:integer" use="required" />
    <xs:attribute name="plataforma" type="xs:string" use="required" />
  </xs:complexType>
</xs:element>
```

- `<xs:sequence>` → els elements han d'aparèixer en l'ordre indicat (títol, gènere, any, preu, disponible)
- `<xs:choice>` → només es pot triar un element entre els que s'indiquen (per exemple, gènere)
- `<xs:attribute>` → defineix un atribut de l'element complex (com id i plataforma)
- `use="required"` → l'atribut és obligatori
- `use="optional"` → l'atribut és opcional

### Repetició d'elements

Per defecte, tots els elements definits en un XSD han d'aparèixer exactament una vegada. Per canviar aquest comportament, fem servir els atributs `minOccurs` i `maxOccurs` per indicar quantes vegades pot aparèixer un element:

```xml
<joc id="1" plataforma="PC">
  <titol>Hollow Knight</titol>
  <genere>Metroidvania</genere>
  <any>2017</any>
  <preu>19.99</preu>
  <disponible>true</disponible>
</joc>
<joc id="2" plataforma="PC">
  <titol>God of War</titol>
  <genere>Acció</genere>
  <any>2018</any>
  <preu>29.99</preu>
  <disponible>true</disponible>
</joc>
```

```xml
<!-- minOccurs i maxOccurs controlen les repeticions -->
<xs:element name="joc" minOccurs="1" maxOccurs="unbounded" />
```

- `minOccurs="0"` → element opcional (pot no aparèixer)
- `minOccurs="1"` → element obligatori (mínim 1 vegada)
- `maxOccurs="1"` → element per defecte (màxim 1 vegada)
- `maxOccurs="unbounded"` → l'element pot aparèixer sense límit màxim

## Exemple complet: XSD per al catàleg de jocs

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <!-- Element arrel -->
  <xs:element name="cataleg">
    <xs:complexType>
      <xs:sequence>
      <!-- Un catàleg pot tenir 1 o moltes etiquetes <joc> -->
        <xs:element name="joc" minOccurs="1" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="titol" type="xs:string" />
              <xs:element name="genere">
              <!-- Exemple d'enumeració per al gènere -->
                <xs:simpleType>
                  <xs:restriction base="xs:string">
                    <xs:enumeration value="RPG" />
                    <xs:enumeration value="Aventura" />
                    <xs:enumeration value="Esports" />
                    <xs:enumeration value="Estratègia" />
                    <xs:enumeration value="Metroidvania" />
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>
              <xs:element name="any" type="xs:integer" />
              <xs:element name="preu">
                <xs:simpleType>
                  <xs:restriction base="xs:decimal">
                    <xs:minInclusive value="0" />
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>
              <xs:element name="disponible" type="xs:boolean" />
            </xs:sequence>
            <!-- Atributs del joc -->
            <xs:attribute name="id" type="xs:positiveInteger" use="required" />
            <xs:attribute name="plataforma" type="xs:string" use="required" />
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>

</xs:schema>
```

## Validar amb xmllint

```bash
# Instal·lar xmllint
sudo apt install libxml2-utils   # Ubuntu/Debian

# Validar un XML contra un XSD
xmllint --noout --schema cataleg.xsd cataleg.xml
```

## Exercicis

**Exercici 1.** Crea l'esquema XSD `biblioteca.xsd` per validar el fitxer `biblioteca.xml` de l'exercici anterior. El camp `isbn` és un atribut obligatori de tipus `xs:string`, el `preu` ha de ser un decimal positiu i l'`any` un enter.

**Exercici 2.** Afegeix al teu XSD una restricció per al camp `preu`: ha de ser entre `0.01` i `999.99`.

**Exercici 3.** Intenta validar el teu XML amb un valor de `preu` negatiu. Observa el missatge d'error que dóna `xmllint`.

> **Nota:** XSD és una tecnologia potent però verbosa (requereix molt de codi). En entorns moderns, la validació de dades s'acostuma a fer amb JSON Schema (molt més concís) o amb llibreries de codi com Zod (TypeScript) o Pydantic (Python).

> **Nota2:** Tot i així, dominar XSD és important per a Sistemes crítics: Banca, assegurances i Administració Pública (on l'XML és l'estàndard). Serveis SOAP: Moltes aplicacions corporatives encara es comuniquen així. Configuracions complexes: On es necessita un control molt estricte que el JSON no sempre ofereix, etc.
