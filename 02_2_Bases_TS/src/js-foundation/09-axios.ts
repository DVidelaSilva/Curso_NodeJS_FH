const { httpClientAxios } = require('../plugins')


export const getPokemonNameAxios = async (id: string|number ): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await httpClientAxios.get(url)


    return pokemon.name;
             
}


