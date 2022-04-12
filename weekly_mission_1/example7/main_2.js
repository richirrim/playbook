import { log, LEVELS, Logger } from './logger.js'
console.log(log)
console.log(LEVELS)
log('Hello world')

console.log(Logger)
const ninja = new Logger('Obito')
console.log(ninja.log('Miembro del clan Uchiha, amigo de Kakashi y Rin.'))