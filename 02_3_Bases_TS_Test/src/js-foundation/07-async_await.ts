const { httpClient } = require('../plugins')

export const getPokemonNameAsyncAwait = async (id: string|number ): Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const response = await fetch( url );
        const pokemon = await response.json()
        return pokemon.name;
    } catch (error){
        throw `Pokemon not found with id ${id}`;
    }
             
}

