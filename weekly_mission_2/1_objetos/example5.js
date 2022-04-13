/**
 * CREACIÓN DE OBJETOS VACÍOS
 * Usando la forma: Object literal
 * ----------------------
 * Ejemplo 5: Objeto con método que recibe parámetros
 *  */ 

const ninja = {
    name: "Woopa",
    sayHelloToPerson: function(person){
      console.log(`${this.name} say's hello to ${person}`)
    }
  }
  

ninja.sayHelloToPerson("Nagato")