/**
 * IMPLEMENTADO MÉTODOS ITERADORES SOBRE ITERABLES
 * 
 * Un iterador permite iterar a través objetos iterables, es decir, los 
 * iteradores son métodos o bucles que permiten recorres listas como 
 * arrays, strings.
 * ----------------------
 * arr.sort(element => condition)
 * 
 * El método sort() ordena los elementos de un arreglo (array) localmente y 
 * devuelve el arreglo ordenado. La ordenación no es necesariamente estable. 
 * El modo de ordenación por defecto responde a la posición del valor del 
 * string de acuerdo a su valor Unicode.
 * 
 *
 * Description:
 * Si no se provee compareFunction, los elementos son ordenados convirtiéndolos a strings y 
 * comparando la posición del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene 
 * antes que "banana"  (porque las mayúsculas van antes que las minúsculas en la codificación Unicode) . 
 * En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son convertidos a strings 
 * y ordenados según el valor Unicode, el resultado será "80" antes que "9".
 * 
 * --------------------------
 * 
 * Ejemplo 15: Uso de sort para ordenar elementos.
 *  */


const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Elementos ordernados usando SORT")
console.log(products.sort())

// Y si dentro del array hubiera datos en mayúsculas?
const products2 = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'apple', 'Carrot', 'sugar', 'milk']
// Ordena primero los elemetos con letras máyusculas porque tienen más prioridad
console.log(products2.sort())