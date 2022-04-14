/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.reduce(element => action)
 * 
 * El método reduce() ejecuta una función reductora sobre cada elemento de 
 * un array, devolviendo como resultado un único valor.
 * --------------------------
 * 
 * Ejemplo 9: Uso del reduce.
 *  */ 


const numbers = [1, 2, 3, 4, 5]

const sumResult = function (listNumbers) {
    return numbers.reduce((acc, nextNumber) => { 
        console.log(`suma total actual: ${acc} + el sig. valor: ${nextNumber}`)
        return acc + nextNumber 
    })
}
console.log('suma total(final): ', sumResult(numbers))