/**
 * CLASES Y OBJETOS
 * ----------------------
 * 
 * set: La sintaxis  set  asocia la propiedad de un 
 * objeto a una función que será llamada cuando haya 
 * un intento de asignar valor a esa propiedad.
 *  
 * Description:
 * En JavaScript, un setter puede ser usado para ejecutar 
 * una función donde sea que una propiedad se intente 
 * cambiar. Los setters son regularmente usados en conjunto 
 * con getters para crear un tipo de pseudo-propiedad. No es 
 * posible tener simultáneamente un setter en una propiedad 
 * que ya tiene un valor.
 * 
 * ----------------------
 * 
 * Ejemplo 7: Setters para modificar los atributos del objeto
 *  */

 class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
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
}


const itachi = new Ninja(
    'Itachi', 
    '21', 
    {
        rank: 'Ambu',
        record: '012110',
        promotionToChunin: '10 años'
    }
)

const rocklee = new Ninja(
    'Rock Lee', 
    '32', 
    {
        rank: 'Jonin',
        record: '012561',
        promotionToChunin: '15 años'
    }
)


itachi.setAldea = 'Konoha'
itachi.setStatus = false
console.log(itachi)
console.log('----'.repeat(10))
console.log(`[${itachi.name}] getAldea:`, itachi.getAldea)
console.log(`[${itachi.name}] getStatus:`, itachi.getStatus)

console.log('\n')

rocklee.setAldea = 'Konoha'
rocklee.setStatus = true
console.log(rocklee)
console.log('----'.repeat(10))
console.log(`[${rocklee.name}] getAldea:`, rocklee.getAldea)
console.log(`[${rocklee.name}] getStatus:`, rocklee.getStatus)