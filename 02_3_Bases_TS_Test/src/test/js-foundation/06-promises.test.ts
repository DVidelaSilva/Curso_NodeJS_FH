import { getPokemonNamePromises } from "../../js-foundation/06-promises";


describe('js-foundation/06-promises.ts', () => {

    test('getPokemonNamePromises should return a pokemon', async () => {

        const pokemonId =  1;

        return getPokemonNamePromises(pokemonId).then(pokemonName => {
            expect(pokemonName).toBe('bulbasaur')
        });
    });
})