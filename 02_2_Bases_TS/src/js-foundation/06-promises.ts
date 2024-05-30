const { httpClient } = require('../plugins')


export const getPokemonNamePromises = (id: string|number ): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    return fetch(url)
        .then( (response) => response.json())
      //  .then( () => { throw new Error('Pokemon no existe')})
        .then((pokemon) => pokemon.name)
             
}




