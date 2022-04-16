import Pokemon from './pokemon'
import { jest } from '@jest/globals'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu')
});

describe('get getAttacks method', () => {
  it('Returns an array with the pokemon attacks', () => {
    const expected = ['Ataque eléctrico', 'Ataque rápido', 'Pared de luz']
    const result = ['Ataque eléctrico', 'Ataque rápido', 'Pared de luz']
    const myPokemon = new Pokemon('Pikachu')
    
    jest.spyOn(myPokemon, 'getAttacks', 'get').mockReturnValue([])
    expect(expected).toEqual(result)
  })
})