import { getPokemonNameFetch } from "../../js-foundation/08-FetchAPI";


describe('js-foundation/08-FetchAPI.ts', () => {

    test('getPokemonNameFetch should return a pokemon', async () => {

        const pokemonId =  1;
        const pokemonName = await getPokemonNameFetch(pokemonId)

        expect(pokemonName).toBe('bulbasaur')
        });

    test('should return a error if pokemon does not exist', async() => {

        const pokemonId = 11000000;

        try {
            await getPokemonNameFetch(pokemonId)
            expect(true).toBeFalsy
        } catch (error){
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    });
});
