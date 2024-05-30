import { getUserById } from "../../js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if user does no exist', (done) => {
        //Arrange
        const id = 10;
        //Act
        //Assert
        getUserById(id, (err, user) => {
            
            expect( err ).toBe(`Usuario no encontrado con el id ${id}`)
            expect( user ).toBeUndefined();

            done();
        });
    });

    test('getUserById should return Diego Videla', (done) => {
        //Arrange
        const id = 1;
        //Act
        //Assert
        getUserById(id, (err, user) => {
            
            expect( err ).toBeUndefined
            expect( user ).toStrictEqual({
                id: 1,
                name: 'Diego Videla'
            })

            done();
        });
    });

})