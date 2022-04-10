//exports es un objeto, entonces lo que estamos haciendo es
// añadir una nueva propiedad, cuyo valor es la function message.
console.log('Objeto exports vacío: ', module.exports)
module.exports.verbose = message => {
    console.log(`verbose: ${message}`)
}

console.log('Objeto exports ahora contiene la propiedad verbose: ')
console.log(module.exports)
console.log('\n', '-'.repeat(30), '\n')