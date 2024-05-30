// Factory function es una funcion que crea otra funcion

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number
}

interface PersonOptions {
    name: string,
    birthdate: string;
}


export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {

    return  ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}
 








