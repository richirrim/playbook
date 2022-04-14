/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.some(element => condition)
 * 
 * El método some() comprueba si al menos un elemento del array cumple con la 
 * condición implementada por la función proporcionada.
 * 
 *
 * Description:
 * some() ejecuta la función callback una vez por cada elemento presente en el 
 * array hasta que encuentre uno donde callback retorna un valor verdadero (true). 
 * Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() 
 * retorna false.
 * 
 * --------------------------
 * 
 * Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, 
 * y si alguno cumple con la validación indicada, regresará true, de lo contrario 
 * será false.
 *  */


const booleans = [true, true, false, true]
let index

const areSomeTrue = booleans.some((boolean, i) =>  {
    index = i
    return boolean === false
})

console.log(
    'Alguno de los elementos en el array es false:', 
    areSomeTrue ? 'YES': 'NO', 
    'y es elemento en la posición:', index 
)