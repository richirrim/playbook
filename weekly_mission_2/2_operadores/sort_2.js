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
 * Ejemplo 16: Ordenando una lista de objetos.
 *  */


const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]
  
// 50, 100, 
users.sort((a, b) => {
    if (a.age < b.age) {
        console.log(a.age, '<', b.age, ':', -1)
        return -1
    }
    if (a.age > b.age) {
        console.log(a.age, '>', b.age, ':', 1)
        return 1
    }
    return 0
})
  
console.log("Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending