/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 4: Uso de map para recorrer los elementos de una lista y 
 * crear una nueva lista.
 *  */ 


const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map(function(num) { return num * num })
//const numbersSquare = numbers.map(num => return num * num)
console.log(numbersSquare)