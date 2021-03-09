const nombre = {
    demand: true,
    alias: 'n'
}

const matematica = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand:true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre, 
    matematica,
    ingles,
    programacion
}

const muestraest = {
    nombre
}

const actualiza = {
    nombre,
    asignatura : {
        demand: true,
        alias: 'a'
    },
    calificacion: {
        demand: true,
        alias: 'c'
    }
}

const elimina = {
     nombre
}

const argv = require('yargs')
            .command('crear', 'Crear un estudiante en mi BD', creacion)
            .command('mostrar', ' Muestra los estudiante y sus notas')
            .command('mostrarest', ' Muestra buscar el nombre del estudiante', muestraest)
            .argv;

 module.exports = {
     argv
 }