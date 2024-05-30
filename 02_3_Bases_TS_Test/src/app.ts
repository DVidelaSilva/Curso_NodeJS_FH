/* const { emailTemplate } = require('./js-foundation/01-template');

require('./js-foundation/02-destructuring')
require('./js-foundation/03-callbacks');
require('./js-foundation/05-factory')
 */
//console.log(emailTemplate)

// ! 03-callbacks

/* const { getUserById } = require('./js-foundation/03-callbacks')
require('./js-foundation/03-callbacks');

const id = 1

getUserById(id, function(error, user) {
    if (error){
        throw new Error( error );
    }

    console.log(user);
});  */

// ! 04 - arrow function

/* const { getUserById } = require('./js-foundation/04-arrow_function')


const id = 1

getUserById ( id, (error, user) => {
    if (error){
        throw new Error( error );
    }
    console.log(user);
});
 */

// ! 05-Factory function

/* const {getAge, getUUID} = require('./plugins')


const { buildMakePerson } = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'DAVS', birthdate: '1988-09-15'};

const john = makePerson(obj);


console.log({john})
 */

// ! 06-Promesas

/* import { getPokemonNamePromises } from './js-foundation/06-promises'

getPokemonNamePromises(1)
    .then((pokemon: string) => console.log({pokemon}))
    //.catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 07-async - await

/* import { getPokemonNameAsyncAwait } from './js-foundation/07-async_await'

getPokemonNameAsyncAwait(1)
    .then((pokemon) => console.log({pokemon}))
    //.catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 08 - FetchAPI

/* import { getPokemonNameFetch } from './js-foundation/08-FetchAPI'

getPokemonNameFetch(1)
    .then((pokemon: string) => console.log({pokemon}))
    //.catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 09 - Axios

/* import { getPokemonNameAxios } from './js-foundation/09-axios'

getPokemonNameAxios(1)
    .then((pokemon: string) => console.log({pokemon}))
    //.catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! Logger - Winston

/* import { buildLogger } from './plugins/logger.plugins'

const logger = buildLogger('app.js')

logger.log('Hola Mundo')
logger.error('Esto es algo Malo') */





