import { emailTemplate } from "../../js-foundation/01-template";



describe('js-foundation/01-template.ts', () => {

    test('emailtemplate should contain a greeting', () =>{
        // Arrange
        // Act
        // Assert
        expect( emailTemplate ).toContain( 'Hola, ');
    })

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        // Arrange
        // Act
        // Assert
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    })

});