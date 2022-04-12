const Ninja = require('./ninja')

const itachi = new Ninja("Itachi")
const naruto = new Ninja("Naruto")
const obito = new Ninja("Obito")
const rocklee = new Ninja("RockLee")

itachi.sayHello()
itachi.sayMessage("Las vidas de las personas no terminan cuando mueren. Termina cuando pierden la fe.")

console.log(`\n${'-----'.repeat(6)}\n`)

naruto.sayHello()
naruto.sayMessage("El fracaso no es una razón para abandonar algo en lo que realmente crees.")

console.log(`\n${'-----'.repeat(6)}\n`)

obito.sayHello()
obito.sayMessage("A pesar de tener este Sharingan, no podía ver nada... no había nada.")

console.log(`\n${'-----'.repeat(6)}\n`)

rocklee.sayHello()
rocklee.sayMessage("Un héroe no es el que nunca cae. Él es quien se levanta, una y otra vez, sin perder nunca de vista sus sueños.")