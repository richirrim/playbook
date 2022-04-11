const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger.
logger.log('This is an informational message')


//  También pueder instanciar uno nuevo de esta manera:
const customLogger = new logger.constructor('CUSTOM')
customLogger.log('Soy un nuevo objeto, colega :3')
