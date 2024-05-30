import { buildMakePerson } from "../../js-foundation/05-factory";


describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '1234';
    const getAge = () => 35;

    test('BuildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({getUUID, getAge});

        expect(typeof makePerson).toBe('function')
    });

    test('makePerson should return a person', () => {

        const makePerson = buildMakePerson({getUUID, getAge});

        const Diego = makePerson({name: 'Diego Videla', birthdate: '1988-09-15'});

        expect(Diego).toEqual({
            id: '1234',
            name: 'Diego Videla', 
            birthdate: '1988-09-15',
            age: 35
        });
    });


})