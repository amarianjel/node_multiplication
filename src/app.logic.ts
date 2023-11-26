import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

//TODO: Grabar archivo de salida

const { b:base, l:limit, s:showTable } = yarg;
let outputMessage = '';
const headerMessage = `
========================================
        Tabla del ${ base }
========================================

`;
for( let i = 1; i <= 10; i++ ){
    outputMessage+= `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

console.log( outputMessage );

//TODO: path: outputs/tabla-5.txt

if ( showTable ) {
    console.log(outputMessage);
}

const outputPath = `outputs`;


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');