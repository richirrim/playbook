/**
 * CREACIÓN DE OBJETOS VACÍOS
 * Usando la forma: Object literal
 * ----------------------
 * Ejemplo 4: Objeto con métodos
 *  */ 

const ninja = {
    name: 'Obito',
    lastname: 'Uchiha',
    age: 31,
    status: 'Muerto',
    nicknames: [
        'Tobi',
        'Madara Enmascarado',
        'Hombre Enmascarado'
    ],
    ninjaRank: {
        rank: 'Chunin',
        record: '010886',
        academyGraduation: '9 años',
        promotionToChūnin: '11 años'
    },
    techniques: ['Tsukuyomi Infinito', 'Kamui', 'Jutsu de Shuriken Espacio-Temporal', 'Izanagi', 'Invocación Rinnegan'],
    info: function() { 
        return `
            NINJA, ${(this.name + ' ' + this.lastname).toUpperCase()}
            ${'----'.repeat(10)}
            Edad Actual: ${this.age}
            Apodos: ${this.nicknames}
            Rango ninja: ${this.ninjaRank.rank}
            Graduación de la academia: ${this.ninjaRank.promotionToChūnin}
        `
    },
    // Usando shorhant methods
    getTechniques() {
        let listTechniques = ``

        this.techniques.forEach((technique, i) => {
            listTechniques += `${++i}. ${technique}\n`
        })

        return `
            ${('Técnicas secretas de ' + this.name + ' ' + this.lastname).toUpperCase()}
            ${'----'.repeat(10)}
            ${listTechniques}
        `
    }
}

console.log(ninja.getTechniques())
console.log(ninja.info())