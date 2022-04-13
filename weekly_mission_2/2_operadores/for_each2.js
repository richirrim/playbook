/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 2: for Each para calcular la suma de todos los elementos 
 * de una lista.
 *  */ 

let expression = ''
let sum = 0;
const numbers = [1, 2, 3, 4, 5];

const renderExpression = function(number, index, array) {
    index < (array.length) - 1
        ? expression += number + ' + '
        : expression += number
}

numbers.forEach((num, index, array) => {
    renderExpression(num, index, array)
    return sum += num
})

console.log(`${expression} = ${sum}`)