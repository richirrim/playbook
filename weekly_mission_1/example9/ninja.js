class Ninja {
    constructor(name) {
        this.name = name
    }

    sayHello () {
        console.log(`El shinobi de la hoja ${this.name}, te saluda!!!`)
    }
    sayMessage(message) {
        console.log(`"${message}"\n- ${this.name}`)
    }
}

module.exports = Ninja