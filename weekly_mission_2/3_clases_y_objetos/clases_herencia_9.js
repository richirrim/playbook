/**
 * HERENCIA
 * ----------------------
 * 
 * JavaScript provoca cierta confusión en desarrolladores con 
 * experiencia en lenguajes basados en clases (como Java o C++), 
 * por ser dinámico y no proporcionar una implementación de clases 
 * en sí mismo (la palabra clave class se introdujo en ES2015, pero 
 * sólo para endulzar la sintaxis, ya que JavaScript sigue estando 
 * basado en prototipos).
 * 
 * Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * 
 * ----------------------
 * 
 * Ejemplo  9: Herencia entre dos clases.
 *  */


class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
        return this.name
    }
}

const richDev = new Developer("Ricardo (@richirrim)", "JS", ['HTML', 'SASS', 'VUE'])
console.log(richDev)
console.log(richDev.getName)
  

// Se usa la palabra extends para indicar que heredarás las propiedades 
// de la clase Padre (Developer) en la clase definida. Podemos definir 
// una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {

}

console.log(LaunchXStudent)
const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija