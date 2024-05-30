import { getPokemonNameAsyncAwait } from "../../js-foundation/07-async_await";

describe('js-foundation/07-async_await.ts', () => {

    test('getPokemonNameAsyncAwait should return a pokemon', async () => {

        const pokemonId =  1;
        const pokemonName = await getPokemonNameAsyncAwait(pokemonId)

        expect(pokemonName).toBe('bulbasaur')
        });

    test('should return a error if pokemon does not exist', async() => {

        const pokemonId = 11000000;

        try {
            await getPokemonNameAsyncAwait(pokemonId)
            expect(true).toBeFalsy
        } catch (error){
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    });
});

