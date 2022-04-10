# Launch X Node JS Playbook 🚀 de @explorername

<img width="1247" alt="image" src="https://user-images.githubusercontent.com/17634377/159151704-8949639b-ae5f-405a-a8b8-8d97f3f150cd.png">

## Módulos

### Qué son los módulos en NodeJs?
Un módulo no es nada más que una unidad de código organizado en archivos o directorios. El objetivo principal de crear o trabjar con modulos es que se pueda  exportar con facilidad para poder reutilizarse en otras partes de la aplicación o ser utilizado por terceros.

### Tipos de módulos 

Hay 3 tipos de módulos.
- **Built-in modules:** Son los módulos nativos de la API de Node.js. No hace falta que se instalen, ya que vienen incluidos por defecto con Node.js.
- **Local modules:** Son los módulos escritos por los desarrolladores y forman en su conjunto gran parte de la aplicación.
- **External modules:** Son, en esencia, los paquetes de terceros distribuidos a través de npm. Estos paquetes se instalan como dependencias.

### CommonJS

Node.JS usa el sistema de módulos CommonJS, pero hay otros tipos de módulos usados ​​en el ecosistema JavaScript. Los más destacados son los siguientes:
- Asynchronous Module Definition (AMD)
- ECMAScript 6 (ES6).

Teniendo en cuenta que antes de la llegada de ES6, Javascript no soportaba de forma nativa el uso de módulos, los programadores se las ingenieron para desarrollar sus propios module systems, aprovechando características del mismo lenguaje.

**CommonJS** es un proyecto que define una serie de especificaciones para el ecosistema de Javascript, fuera del navegador (por ejemplo, en el lado del servidor o para aplicaciones de escritorio).

Los desarrolladores de Node.js originalmente intentaron seguir la especificación de CommonJS, pero luego cambiaron de decisión.

Tanto en Node como en CommonJS, existen 2 palabras esenciales para interactuar con los módulos: require y exports.

`require` 
- **Implementación en CommonJS:** es una función que se puede usar para importar símbolos desde otro módulo al ámbito actual. El parámetro pasado a *require* es el *id del módulo*. 
- **Implementación en Node:** en Node el parametro pasado a la función *require* es el nombre del módulo dentro de la carpeta node_modules (o, en todo caso, la ruta hacia su ubicación).

`exports` 
Es un objeto especial: todo lo que es puesto en él se puede exportar como un elemento público (conservando el nombre de los elementos).

### Module object

Module es un objeto global en NodeJs que se encuentra asociado a cada archivo. Y se ve más o menos así:

```js
// file: main.js
Module { 
    id: '.',
    path: '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2',
    exports: {},
    parent: null,
    filename: '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2/main.js',
    loaded: false,
  children: [],
  paths: [
    '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/example2/node_modules',
    '/mnt/d/Proyectos Dev/playbook/weekly_mission_1/node_modules',
    '/mnt/d/Proyectos Dev/playbook/node_modules',
    '/mnt/d/Proyectos Dev/node_modules',
    '/mnt/d/node_modules',
    '/mnt/node_modules',
    '/node_modules'
  ]
}
```

Y de este objeto la propiedad que más no interesa es  `exports`, nos permitirá exportar nuestras funciones o variables y poder usarlas en cualquier parte del proyecto.

Si eres curioso y quieres visualizar por tu cuenta lo que devuelve el objeto `Module {...}`en tu máquina solo basta con hacer un `console.log(module)`. 


#### 3 Formas de exportar código 

#### Usando la forma abreviada o alias para exportar código 
