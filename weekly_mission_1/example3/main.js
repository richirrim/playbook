const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

console.log('logger1 function: ', logger1)
logger1('Otiaaa soy un msj procesado por logger1.')

console.log('\n', '-'.repeat(30), '\n')

console.log('logger2 objeto: ', logger2)
logger2.verbose('This is a verbose message')

// console.log('-'.repeat(5)+'\n')
// console.log(module)