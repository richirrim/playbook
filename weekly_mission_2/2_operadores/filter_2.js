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
 * Ejemplo 8: Filtrar una lista por condicional.
 * a mayúsculas.
 *  */ 


const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter(item => item.score > 80)
  console.log(scoresGreaterEighty)  