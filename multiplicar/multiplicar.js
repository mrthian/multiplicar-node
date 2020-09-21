/**
 * 
 */

const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parametro de entrada base [${ base }], no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El parametro de entrada limite [${ limite }], no es un número`);
            return;
        }

        if (limite <= 0) {
            reject(`El parametro "limite" no puede ser menor o igual que 0`);
            return
        }

        console.log('============================================'.green);
        console.log(`===== Generando tabla del ${ base } ========`.red);
        console.log('============================================'.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } =  ${ base * i}\n`;
        }
        resolve(data);
    });
}

// forma de exportar esta funcion 
// module.export crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La variable base no es es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('La variable limite no es es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } =  ${ base * i}\n`;
        }
        let nameFichero = `tabla-${ base }.txt`;
        //  escribir archivo en disco
        fs.writeFile(nameFichero, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nameFichero.green);
        });
    })
}


// forma de exportar funcion
module.exports = {
    crearArchivo,
    listarTabla
}