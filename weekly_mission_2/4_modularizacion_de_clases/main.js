import Viajero from './viajero.js'

const viajero = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero)
console.log(viajero.getNameAndUsername()) // Método de la clase padre
console.log(viajero.getGeneralInfo()) // Método de la clase hija