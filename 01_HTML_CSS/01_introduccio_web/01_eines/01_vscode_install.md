# 💻 Instal·lació de Visual Studio Code a Debian/Ubuntu

## 🔽 Descàrrega manual del paquet `.deb`

1. Ves a la pàgina oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Descarrega el paquet `.deb` (versió per Debian/Ubuntu).
3. Obre una terminal amb `CTRL + ALT + T` i mou-te a la carpeta de Baixades.
4. Executa la comanda:
```bash
sudo dpkg -i code_versio_XXX.deb
```
5. Crea la carpeta del mòdul amb la comanda:
```bash
cd && mkdir 0373_llenguatge_marques
```
6. Obre l'editor VSCode a la carpeta del mòdul:
```bash
code 0373_llenguatge_marques