/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.find(element => test)
 * 
 * El método findIndex() devuelve el índice del primer elemento de un 
 * array que cumpla con la función de prueba proporcionada. En caso contrario 
 * devuelve -1.
 * 
 * ⚠️Si necesitas el índice del elemento encontrado en el array, utiliza findIndex().
 * 
 * Description:
 * El método findIndex() ejecuta la función de callback una vez por cada índice 
 * del array hasta que encuentre uno donde callback devuelva un valor verdadero 
 * (eso es, un valor que fuerza un true).
 * 
 * Si dicho elemento es encontrado, findIndex() inmediatamente devuelve el índice 
 * del elemento. Si la función callback nunca devuelve un valor verdadero 
 * (o el tamaño del array es 0), findIndex devuelve -1.
 * 
 * --------------------------
 * 
 * Ejemplo 13: Uso de findIndex, este método regresa la posición del primer 
 * elemento que cumpla con la validación que indiques.
 *  */ 

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names.findIndex(name => name.length > 7)
console.log("Primer elemento cuya palabra sea mayor a 7 esta en la posición:", result)