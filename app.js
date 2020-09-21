/**
 * 
 */

// AL INICIO DE ACONSTUMBRA PONER LOS REQUIRE
const argv = require('./config/yargs').argv;

//const multiplicar = require('.multiplicar/multiplicar');
// opcion como with | destructurar
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0].toUpperCase();
console.log(comando);

switch (comando) {
    case 'LISTAR':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'CREAR':
        crearArchivo(argv.base, argv.limite)
            .then(fichero => console.log(`Archivo creado: ${ fichero }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Error');
        break;
}

/**
 * Hay 3 tipos de require
 * 1. Librerias propias de node require('fs')
 * 2. Paquetes que no son nativos de node require('express')
 * 3. Los que creamos en el projecto require('../nombrepaquete.js')
 */

//let base = '1';

// solicitar variables por consola
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//    .catch(err => console.log(err));