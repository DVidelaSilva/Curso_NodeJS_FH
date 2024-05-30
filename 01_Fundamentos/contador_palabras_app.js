/* // Contador de Palabras

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ').length;


console.log('Palabras React', wordCount );
 */


// Contador de 'X' palabra

const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');

const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras: ', words.length );
console.log('Palabras React', reactWordCount );