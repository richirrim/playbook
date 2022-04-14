/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.filter(element => condition)
 * 
 * El método filter() crea un nuevo array con todos los elementos que cumplan la condición
 * implementada por la función dada.
 * --------------------------
 * 
 * Ejemplo 7:  Uso de filter para filtrar una lista de elementos 
 * a mayúsculas.
 *  */ 


const mexico = ['Campeche', 'Tamaulipas', 'Guanajuato', 'Jalisco', 'Oaxaca', 'Yucatán', 'Tabasco']

// Filtra los estados que incluyan "ca" o otra como sub-strig.
const statesContainLetters = function (stateList, letter) {
    if (stateList.length && letter) {
        return stateList.filter(state => state.toLowerCase().includes(letter))
    } else {
        return '⚠️Olvidates pasar el parametro stateLis o letter.'
    }
}
console.log(statesContainLetters(mexico, 'ca'))

console.log('\n', '----'.repeat(10), '\n')

// Filtra los paises que terminan en una letra o más de una letra.
const statesEndsBy = function (stateList, letter) {
    if (stateList.length && letter) {
        return stateList.filter(state => state.toLowerCase().endsWith(letter.toLowerCase()))
    } else {
        return '⚠️Olvidates pasar el parametro stateLis o letter.'
    }
}
console.log(statesEndsBy(mexico, 'co'))
 
console.log('\n', '----'.repeat(10), '\n')

// Filtra los paises que empiezan con una letra o más de una letra.
const statesStartsBy = function (stateList, letter) {
    if (stateList.length && letter) {
        return stateList.filter(state => state.toLowerCase().startsWith(letter.toLowerCase()))
    } else {
        return '⚠️Olvidates pasar el parametro stateLis o letter.'
    }
}
console.log(statesStartsBy(mexico, 'ta'))