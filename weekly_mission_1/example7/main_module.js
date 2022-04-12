/* Importando el módulo */
// Todas las propiedades que trae el módulo
// importado las envuelve en un alias llamado loggerModule.
import * as loggerModule from './logger.js'

console.log(loggerModule.DEFAULT_LEVEL)

console.log(loggerModule.LEVELS)
console.log('debug: ', loggerModule.LEVELS.debug)

console.log(loggerModule.Logger)
const SoyUnaNuevaInstance = new loggerModule.Logger('Itachi')
console.log(
    SoyUnaNuevaInstance.log('Miembro del clan Uchiha y portador del Mangekyou sharingan.')
)


console.log(loggerModule.log(loggerModule.DEFAULT_LEVEL))
