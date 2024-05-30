import { characters } from "../../js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {

    test('Charactes should contain Flash, superman', () => {
        //Arrange
        //Act
        //Assert
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test('fisrt character should be Flas, and second Superman', () => {
        //Arrange
        const [ Flash, Superman ] = characters
        //Act
        //Assert
        expect(Flash).toContain('Flash');
        expect(Superman).toContain('Superman');
    })
})

