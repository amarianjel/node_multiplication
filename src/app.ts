import fs from 'fs';

//TODO: Grabar archivo de salida

let outputMessage = '';
const base = 5;
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

const outputPath = `outputs`;


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');