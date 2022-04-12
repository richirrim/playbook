/* Importando el módulo */
import * as loggerModule from './logger.js'

console.log(loggerModule) // Devuelve un function Logger
// const SoyUnaNuevaInstance = new loggerModule.Logger('Itachi') // error, no es un cosntructor.

console.log(loggerModule.default)
// const soyUnaInstance = new loggerModule.default.Logger('Itachi') // errror.

