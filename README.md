# Mock de modal para Chat

Una pequeña prueba con Vue que muestra una conversación; con su historial, mensajes nuevos, y la posibilidad de enviar archivos...
No hay un backend al que llamar para que almacene los datos ni para abrir un web socket, así que todo esto es mock.

Este proyecto está hecho con Vue 3 (preview), con componentes de clase y typescript.
Aparte de eso, sólo he añadido las librerías de font-awesome y uuid.

- ⚓ [Requerimientos](#-requerimientos)
- 🚥 [Instalación](#-instalación)
- 🏁 [Ejecución](#-ejecución)
- 👨‍💻 [Tests](#-tests)

---

## ⚓ Requerimientos

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org)

---

## 🚥 Instalación

#### · PASO 0-A
##### No tienes instalado Git

No pasa nada, puedes darle al botoncito de arriba que pone "Code" y luego a "download zip", te descargarás un archivo comprimido con el código fuente.
Después de eso puedes saltar al paso 2.

#### · PASO 0-B
##### No tienes instalado Node

No can't do. TIENES que tener instalado node y npm.
No te preocupes, yo te espero aquí...

#### · PASO 1
##### Clona el repositorio

En una consola, en el lugar donde quieras crear la carpeta del proyecto y escribe:
```bash
git clone https://github.com/ConradoZA/prueba-vue.git
```

#### · PASO 2-A
##### Instala las dependencias

Ahora asegúrate de estar DENTRO de la carpeta del proyecto (Nos pasa a todos en algún momento!)
```bash
npm install
```

#### · PASO 2-B
##### Menos rollo, quiero ver la aplicación!

```bash
npm run init
```
De nada :wink:

---

## 🏁 Ejecución

Ok, ya tienes el proyecto con nuestro querido [node_modules](https://cdn-images-1.medium.com/max/1200/1*liNzl2MQKqg4tLMCF4jY5g.png), ahora lo que quieres es levantar el servidor y ver la página en el navegador...
```bash
npm run serve
```
Y en tu navegador ves a la dirección [http://localhost:8080/](http://localhost:8080/)

##### Ó

Si por lo que sea estás acostumbrado a otros frameworks que no son Vue (ejem, ejem), o prefieres este pequeño atajo que te he preparado...
Ejecuta:
```bash
npm start
```
---

## 👨‍💻 Tests

```bash
npm run test:unit
```
Garantizo que todos pasan :laughing: