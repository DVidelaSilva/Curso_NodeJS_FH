// Este archivo muestra como se haria este mismo programa sin aplicar ninguna arquitectura

import fs from "fs";
import { yarg } from './config/plugins/yargs.plugin';

const {b:base, l:limit, s:showTable} = yarg;

let outputMessage = '';
const headerMessage = `
=============================
         Tabla del ${5}    
=============================\n
`;

for(let i = 1; i <= limit; i++){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage

if ( showTable ){
    console.log(outputMessage)
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);
//console.log('File created')


// se ejecuta con npx ts-node src/app.logic --base 7  -s -l 5
// --base la base a multiplicar / -s o nada si se quiere imprimir o no en la terminal / -l 5 por cuanto se multiplicara