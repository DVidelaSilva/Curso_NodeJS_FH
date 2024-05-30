// Factory function es una funcion que crea otra funcion

/* const makeBuildPerson = () => {

    return () => {

        return {

        }
    }
} */



//const {getAge, getUUID} = require('../plugins')


const buildMakePerson = ({ getUUID, getAge }) => {

    return  ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}
 
module.exports = {
    buildMakePerson
}




