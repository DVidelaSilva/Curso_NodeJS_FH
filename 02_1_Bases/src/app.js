/* const { emailTemplate } = require('./js-foundation/01-template');

require('./js-foundation/02-destructuring')
require('./js-foundation/03-callbacks');
require('./js-foundation/05-factory')
 */
//console.log(emailTemplate)



/* const { getUserById } = require('./js-foundation/03-callbacks')
require('./js-foundation/03-callbacks');

const id = 1

getUserById(id, function(error, user) {
    if (error){
        throw new Error( error );
    }

    console.log(user);
});  */


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


/* const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(1)
    .then((pokemon) => console.log({pokemon}))
    .catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 07-async - await

/* const getPokemonById = require('./js-foundation/07-async_await')

getPokemonById(1)
    .then((pokemon) => console.log({pokemon}))
    .catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 08 - FetchAPI

/* const getPokemonById = require('./js-foundation/08-FetchAPI')

getPokemonById(1)
    .then((pokemon) => console.log({pokemon}))
    .catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! 09 - Axios

/* const getPokemonById = require('./js-foundation/09-axios')

getPokemonById(1)
    .then((pokemon) => console.log({pokemon}))
    .catch( (err) => console.log('Porfavor intente denuevo'))
    .finally( () => console.log('Finalmente')) */


// ! Logger - Winston

const { getAge, getUUID } = require('./plugins')

const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola Mundo')
logger.error('Esto es algo Malo')




