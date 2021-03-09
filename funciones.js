const fs = require('fs');
listaEstudiante = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematica: estudiante.matematica,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiante.find(nom => nom.nombre == estudiante.nombre);
    if(!duplicado){
        listaEstudiante.push(est);
        console.log(listaEstudiante);
        guardar();
    }
    else console.log('Ya existe otro estudiante con ese nombre');

}

const listar = () => {
    try{
        const listaEstudiante = require('./listado.json');
        //listaEstudiante = JSON.parse(fs.readFileSync('listado.json'));
    }catch(error){
        listaEstudiante = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiante);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo ha creado con exito');
    });
} 

const mostrar = () => {
    listar();
    console.log('Notas de los estudiantes');
    listaEstudiante.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas: ');
        console.log(' matematica '+estudiante.matematica);
        console.log(' ingles '+ estudiante.ingles);
        console.log(' programacion ' + estudiante.programacion);
    })
}

const mostrarest = (nom) => {
    listar();
    let est = listaEstudiante.find(buscar => buscar.nombre == nom);
    if(!est){
        console.log('No existe este estudiante');
    }
    else {
        console.log(est.nombre);
        console.log('notas: ');
        console.log(' matematica '+est.matematica);
        console.log(' ingles '+ est.ingles);
        console.log(' programacion ' + est.programacion);

    }
}

const mostrarmat = () =>{
    listar();
    let ganan = listaEstudiante.filter(mat => mat.matematica >= 3);
    if(ganan.length == 0) {
        console.log('Ninguno estudiante ha ganado');
    }
    else 
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas: ');
            console.log(' matematica ' + estudiante.matematica);  
        })
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat
}