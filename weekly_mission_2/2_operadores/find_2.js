/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.find(element => test)
 * 
 * El método find() devuelve el valor del primer elemento del array que cumple 
 * la función de prueba proporcionada.
 * 
 * ⚠️Si necesitas el índice del elemento encontrado en el array, utiliza findIndex().
 * 
 * Description:
 * El método find ejecuta la función callback una vez por cada índice del array 
 * hasta que encuentre uno en el que el callback devuelva un valor verdadero. Si 
 * es así, find devuelve inmediatamente el valor del elemento. En caso contrario, 
 * find devuelve undefined.
 * 
 * callback se invoca con tres argumentos: el valor del elemento, el índice del elemento 
 * y el objeto Array que está siendo recorrido.
 * --------------------------
 * 
 * Ejemplo 12: Uso de find en una lista de objetos.
 *  */ 

const scores = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
  
const itemWithScoreAbove80 = scores.find(user => user.score > 80)

console.log(itemWithScoreAbove80)
console.log("Name score found:", itemWithScoreAbove80.name)