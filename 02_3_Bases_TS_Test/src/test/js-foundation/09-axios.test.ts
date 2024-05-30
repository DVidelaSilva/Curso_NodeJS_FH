import { getPokemonNameAxios } from "../../js-foundation/09-axios";


describe('js-foundation/09-axios.ts', () => {

    test('getPokemonNameFetch should return a pokemon', async () => {

        const pokemonId =  1;
        const pokemonName = await getPokemonNameAxios(pokemonId)

        expect(pokemonName).toBe('bulbasaur')
        });

    test('should return a error if pokemon does not exist', async() => {

        const pokemonId = 11000000;

        try {
            await getPokemonNameAxios(pokemonId)
            expect(true).toBeFalsy
        } catch (error){
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    });
});
