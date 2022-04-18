const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]


// Imprime el nombre de cada explorer en la lista.
console.log('Lista de explorers:')
explorers.forEach(function (explorer, index) {
  console.log(`${++index}. ${explorer.name}`)
})

console.log('\n', '-----'.repeat(6), '\n')


// Imprime el stack de cada explorer.
console.log('Stack de cada explorer:')
explorers.forEach(function (explorer, index) {
  console.log(`${++index}. ${explorer.stack.join(', ')}`)
})

console.log('\n', '-----'.repeat(6), '\n')


// Crea una nueva lista, con las stacks de cada explorer.
console.log('Crea una lista con las stack de cada explorer.')
const getStackList = function () {
  let stackList = explorers.map(explorer => {
    return explorer.stack.length > 1 
      ? [...explorer.stack] 
      : explorer.stack[0]
  })

  stackList = stackList.join(',').split(',')
  return [...new Set(stackList)] // Elimina los elementos duplicados.
}
console.log(getStackList())

console.log('\n', '-----'.repeat(6), '\n')


// Obtén la lista de explorers que tengan en su stack "js".
console.log('Obtiene una la lista de explorers que usan "js":')
const explorersJs = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(explorersJs)

console.log('\n', '-----'.repeat(6), '\n')


// Busca el primer explorer que sea de la CDMX.
console.log('Devuelve el primer explorer que se encuentre en CDMX.')
let explorerCity = explorers.find(explorer => explorer.city.includes('CDMX'))
console.log(explorerCity)

console.log('\n', '-----'.repeat(6), '\n')

// Obtén la suma de todos los exercises_completed.
console.log('Obtiene la suma de los exercises_completed.')
const getTotalAmountCompletedExercises = function (explorersList) {
  const exercisesCompletedList = explorersList.map(explorer => explorer.exercises_completed)
  const totalExercisesCompleted = exercisesCompletedList.reduce((acc, number) => acc + number)
  return totalExercisesCompleted
}
console.log(getTotalAmountCompletedExercises(explorers))


console.log('\n', '-----'.repeat(6), '\n')


// Obtén la validación si al menos uno de los explorers tiene la propiedad 
// exercisesFinished en frontend como true.
const someExplorerHaveFinishedPropertyTrue = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
console.log(someExplorerHaveFinishedPropertyTrue)

console.log('\n', '-----'.repeat(6), '\n')


// Obtén la validación si todos los explorers tienen la propiedad 
// isFinished del onboarding como true. Usa EVERY.
const allExplorerHaveisFinishedPropertyTrue = explorers.every(explorer => explorer.missions.onboarding.isFinished === true)
console.log(allExplorerHaveisFinishedPropertyTrue)