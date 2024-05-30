const { httpAxios } = require('../plugins')


const getPokemonById = async (id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await httpAxios.get(url)


    return pokemon.name;
             
}


module.exports = getPokemonById
