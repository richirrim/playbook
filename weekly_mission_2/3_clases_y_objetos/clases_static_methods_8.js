/**
 * CLASES Y OBJETOS
 * ----------------------
 * 
 * static: La palabra clave static define un método estático 
 * para una clase.
 *  
 * Description:
 * Los métodos estáticos son llamados sin instanciar su clase. 
 * Son habitualmente utilizados para crear funciones para una 
 * aplicación.
 * 
 * ----------------------
 * 
 * Ejemplo 8: Métodos static nos ayudan a escribir métodos en una 
 * clase que podemos usar sin necesidad de instanciar algún objeto.
 *  */

 class Ninja {
    constructor(name, age, ninjaRank, techniques) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
        this.techniques = techniques 
        this.aldea = null
        this.itsAlive = true
    }

    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'----'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chūnin: ${this.ninjaRank.promotionToChunin}
            Aldea: ${this.aldea}
            ${'----'.repeat(10)}
            Fecha de ceación: ${this.dateCreated}
        `
    }
    get getStatus() {
        return this.itsAlive
    }
    get getAldea() {
        return this.aldea
    }
    set setStatus(status) {
        this.itsAlive = status
    }   
    set setAldea(aldea) {
        this.aldea = aldea
    }

    static getTechniques(techniques) {
        let template = ``
        techniques.forEach(function(technique, index) {
            template += `${++index}. ${technique}\n`
        })
        return template
    }
}


const rocklee = new Ninja(
    'Rock Lee', 
    '32', 
    {
        rank: 'Jonin',
        record: '012561',
        promotionToChunin: '15 años'
    },
    ['Gran Remolino de la Hoja', 'Loto Inverso', 'Loto Primario', 'Puño Borracho']
)

console.log('Técnicas secretas de', rocklee.name)
console.log(Ninja.getTechniques(rocklee.techniques))
