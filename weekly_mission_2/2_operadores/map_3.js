/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 6: Uso de map para convertir todos los nombres de una lista 
 * a mayúsculas.
 *  */ 

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const countriesFirstThreeLetters = function (countries) {
    return countries.map(country => country.toUpperCase().slice(0, 3))
}

console.log('Devuelve las primeras 3 letras de cada elemento dentro de un array.')
console.log(countriesFirstThreeLetters(countries))
