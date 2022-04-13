/**
 * CREACIÓN DE OBJETOS VACÍOS
 * Usando la forma: Object literal
 * ----------------------
 * Ejemplo 3: Objeto con diferentes propiedades
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
    }
}

console.log(ninja)
console.log('\n', '----'.repeat(10), '\n')
console.log(`
    NINJA, ${(ninja.name + ' ' + ninja.lastname).toUpperCase()}
    ${'----'.repeat(10)}
    Edad Actual: ${ninja.age}
    Apodos: ${ninja['nicknames']}
    Rango ninja: ${ninja.ninjaRank.rank}
    Graduación de la academia: ${ninja['ninjaRank'].promotionToChūnin}
`)
  