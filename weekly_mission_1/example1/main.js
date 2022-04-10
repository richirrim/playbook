/* OBJETOS EN JS | Modulos Nodejs
--------------------------
*/

//  The Revealing Module Pattern
// Un particular patrón de programación comenzó a usarse cada 
// vez con mayor frecuencia en JavaScript: the revealing module pattern o "el patrón del módulo revelador.
const myModuleJs = (() => {
    // Variables de contexto local o privadas
    const privateFoo = "No me puedes ver desde fuera de myModule👀, solo desde dentro🤭."
    const privateBar = ['🍕', '🍔', '🍰', '🍳', '🍩']
    const baz = "Hay, yo si soy visible desde fuera👉👈."

    // Este objeto es usadp para exporner funciones y variables públicas.   
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
    
    // Y luego el objeto es retornado.
    return exported
})()

// Todas las otras declaraciones que no son agregar o retornadas en el objeto de
// están protegidas por el ámbito de la función que las contiene.
console.log(myModuleJs.publicFoo) // gg
console.log(myModuleJs.privateBar) // error
