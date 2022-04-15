/**
 * OVERRIDING METHODS
 * ----------------------
 * 
 * Overriding methods significa sobreescritura de métodos 
 * y es una técnica de la programación orientada a objetos. 
 * Esta técnica consiste en sobreescribir métodos que han sido 
 * heredados para añadir código extra o simplemente cambiar/extender 
 * su funcionalidad.
 * 
 * Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * 
 * ----------------------
 * 
 * Ejemplo 10: Overrinding methods
 *  */


class Explorer{
    constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}
  
class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre.
        // Agregamos este atributo de la clase Viajero, es exclusiva 
        // de esta clase y no de la clase padre.
        this.cycle = cycle
    }
  
    // (Overriding method) módifica el método this.getNameAndUsername(),
    // la modificación solo ocurre dentro de la clase hija(Viajero). El método 
    // en la clase padre(Explorer) queda intacto.
    // Agregandole la parte de 'Ciclo ${this.cycle}'
    getGeneralInfo(){
      let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
      // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
      return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
  }
  
const viajero = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero)
console.log(viajero.getNameAndUsername()) // Método de la clase padre
console.log(viajero.getGeneralInfo()) // Método de la clase hija (Overriding methods)