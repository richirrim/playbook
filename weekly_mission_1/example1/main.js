/* OBJETOS EN JS | Modulos Nodejs
--------------------------
*/

// Ejemplo, simulación practica de como se comporta
// el código que esta dentro de un finchero que sera 
// usado como un módulo.
const myModuleJs = (() => {
    // Variables de contexto local o privadas
    const privateFoo = "No me puedes ver desde fuera de myModule👀, solo desde dentro🤭."
    const privateBar = ['🍕', '🍔', '🍰', '🍳', '🍩']
    const baz = "Hay, yo si soy visible desde fuera👉👈."

    // Variables locales, la finalidad de
    // envolver un conjunto de variables en un objeto
    // es la facilidad en la que puedes exportarlas, aparte
    // de que da más claridad a la hr de indentificar las publicas
    // de las privdad y permite tener un estructura donde colocarlas.
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
    
    // Exposición de variables locales
    return exported
})()
    
console.log(myModuleJs)