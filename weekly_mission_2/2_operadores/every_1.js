/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.every(element => condition)
 * 
 * El método every() ejecuta la función callback dada una vez por cada 
 * elemento presente en el arreglo hasta encontrar uno que haga retornar 
 * un valor falso a callback (un valor que resulte falso cuando se convierta 
 * a booleano).  Si no se encuentra tal elemento, el método every de inmediato 
 * retorna  false. O si  callback retorna verdadero para todos los elementos, 
 * every retornará true.
 * 
 * ⚠️Precaución: ¡Llamar este método en un array vacío devuelve 
 * true para cualquier condición!
 * --------------------------
 * 
 * Ejemplo 10: uso de every nos ayuda a validar todos los elementos 
 * de una lista, si todos cumplen con la validación que indiques te 
 * regresa true, de lo contrario false.
 *  */ 


const names = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names.every(name => typeof name === 'string')

console.log("Todos los elementos son string:", areAllStr ? 'YES' : 'NO')