import { getUserById } from "../../js-foundation/04-arrow_function";


describe('js-foundation/04-arrow_function.ts', () => {

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

    test('getUserById should return Nicole Espinoza', (done) => {
        //Arrange
        const id = 2;
        //Act
        //Assert
        getUserById(id, (err, user) => {
            
            expect( err ).toBeUndefined
            expect( user ).toStrictEqual({
                id: 2,
                name: 'Nicole Espinoza'
            })

            done();
        });
    });

})