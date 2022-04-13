/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * 
 * Ejemplo 1: for Each para imprimir elementos de una lista
 *  */ 

const ninjas = ['Obito', 'Sasuke', 'Nagato', 'Itachi', 'Maito Gay']

console.log('Shinobis de Konoha:')
ninjas.forEach(shinobi => console.log(shinobi))

console.log('\nUsando el segundo argumento que es devuelto al callback: index')
ninjas.forEach((shinobi, index) => console.log(index + '. ' + shinobi))
