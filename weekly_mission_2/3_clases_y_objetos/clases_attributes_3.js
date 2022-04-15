/**
 * CLASES Y OBJETOS
 * ----------------------
 *  
 * Ejemplo 3: Instanciar un objeto con atributos.
 *  */


class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
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
        promotionToChūnin: '11 años'
    }
)

console.log(itachi)
console.log(obito)