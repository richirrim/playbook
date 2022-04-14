/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 5: Uso de Map para convertir todos los nombres de una 
 * lista a minúsculas.
 *  */ 


let templateNames = ''
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const converToUppercase = function (namesList) {
    return namesList.map(name => {
        templateNames += `${name} = ${name.toUpperCase()}\n`
        return name.toUpperCase()
    })
}

console.log(converToUppercase(names))
console.log(templateNames)