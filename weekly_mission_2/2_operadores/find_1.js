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
 * Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla 
 * con lo que indiques
 *  */ 

 
 const ages = [24, 22, 19, 25, 32, 35, 18]
 const age = ages.find(age => age < 20)
 console.log("La primera edad menor a 20 es:", age)