const listas = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}

const cursos = {
    matematicas:{
        demand: true,
        alias: 'm'
    },
    logica:{
        demand: true,
        alias: 'l'
    },
    programacion:{
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
            .command('datos', 'Los datos personales', listas)
            .command('estudiante', 'mostra los curso y notas del estudiante', cursos)
            .argv;
const express= require('express');
const app = express();
var texto = '';

if(argv.m || argv.l || argv.p) {

    texto+=('El promedio es '+ (argv.m+argv.l+argv.p)/3);

}/* else if(!argv.m){
    console.log('Por favor, ingreses el numero de matematica: -m');
} else if(!argv.l){
    console.log('Por favor, ingreses el numero de Logica de programacion: -l');
}else if(!argv.p){
    console.log('Por favor, ingreses el numero de programacion: -p ');
}*/

if(argv.i || argv.n || argv.c){
    texto+=('El id es: '+argv.i+', el nombre es: '+argv.n+', y la cedula es: '+argv.c);

}/* else if(!argv.id){
    console.log('Por favor, ingreses el numero de ID: -id');
} else if(!argv.nom){
    console.log('Por favor, ingreses el nombre: -l');
}else if(!argv.c){
    console.log('Por favor, ingreses el numero de cedula: -p ');
}*/

//------------------------------------------------------------------

/*
const fs = require('fs');

const crearArchivos = (listas, cursos) => {
    texto = 'El id es: '+argv.i+', el nombre es: '+argv.n+', y la cedula es: '+argv.c+'\n'
            +'El promedio es '+ (argv.m+argv.l+argv.p)/3;
    fs.writeFile('los datos.txt', texto, (err) =>{
        if(err) throw (err);
        console.log('Se ha creado el archivo');
    })
}

crearArchivos(listas, cursos);

*/

app.get('/', function(req, res){
    res.send(texto);
});

app.listen(3000);

