const { httpClientAxios } = require('../plugins')


export const getPokemonNameAxios = async (id: string|number ): Promise<string> => {

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await httpClientAxios.get(url)   
        return pokemon.name;
    }catch (error){
        throw `Pokemon not found with id ${id}`;      
    }             
}



