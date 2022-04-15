/**
 * CLASES Y OBJETOS
 * ----------------------
 * 
 * get: Enlaza la propiedad de un objeto con una
 * unción que será llamada cuando la propiedad es buscada.
 *  
 * Description:
 * A veces es deseable permitir acceso a una propiedad que 
 * retorna un valor dinámicamente calculado, o si desea mostrar 
 * el estado de alguna variable interna sin requerir el uso de 
 * llamadas a métodos explícitos. En JavaScript, esto se puede 
 * lograr con el uso de un getter (captador). No es posible tener 
 * simultáneamente un getter ligado a una propiedad y que dicha 
 * propiedad tenga actualmente un valor.
 * 
 * ----------------------
 * 
 * Ejemplo 6: Getters para acceder a los atributos del objeto.
 *  */

 class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
        this.aldea = 'Konoha'
        this.dateCreated = new Date()
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

    get getAldea() {
        return this.aldea
    }
    get getNinjaRank() {
        return `
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chūnin: ${this.ninjaRank.promotionToChunin}
            Registro ninja: ${this.ninjaRank.record}
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


console.log(itachi.getAldea)
console.log(itachi.getNinjaRank)

console.log(obito.getAldea)
console.log(obito.getNinjaRank)