const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];
switch(comando){

    case 'crear':
    funciones.crear(argv);
    break;

    case 'mostrar':
    funciones.mostrar();
    break;

    case 'mostrarest':
    funciones.mostrarest(argv.nombre);
    break;

    case 'mostrarmat':
    funciones.mostrarmat();
    break;
    
    default:
    console.log('No ingreso una funcion existente');
}


