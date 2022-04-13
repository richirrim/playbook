/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 3: forEach para imprimir los países en letras mayúsculas.
 *  */ 

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

countries.forEach(contrie => console.log(contrie.toUpperCase()))