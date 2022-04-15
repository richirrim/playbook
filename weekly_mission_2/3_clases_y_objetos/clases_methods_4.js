/**
 * CLASES Y OBJETOS
 * ----------------------
 *  
 * Ejemplo 4: Métodos en los objetos.
 *  */

 class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
    }

    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'----'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chūnin: ${this.ninjaRank.promotionToChunin}
        `
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

const obito = new Ninja(
    'Obito', 
    '31', 
    {
        rank: 'Chunin',
        record: '010886',
        promotionToChunin: '11 años'
    }
)

console.log(itachi)
console.log(obito)
console.log(itachi.getInfo())
console.log(obito.getInfo())
