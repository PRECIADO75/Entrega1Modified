const opciones = {
                id:{
                    demand:true
                },
                nombre:{
                    demand:true
                },
                cedula:{
                    demand:true
                }

}
const argv = require('yargs')
            .command('inscribir','',opciones)
            .argv

const cursos = require('./cursos');
var express = require('express')
var app = express()
 
if(argv._ =='inscribir'){
    if(argv.id <= cursos.cursos.length){
        let crearRespuesta = () => {
            var texto = 'El estudiante ' + argv.nombre + ' \n' +
            'con cedula No. ' + argv.cedula + ' \n' +
            'se ha matriculado en el curso ' + cursos.cursos[argv.id-1]['nombre'] + ' \n' +
            'con una duracion de ' + cursos.cursos[argv.id-1]['duracion'] + ' \n' +
            'y con un costo de $' + cursos.cursos[argv.id-1]['costo'] + ' pesos.\n';
            
            console.log(texto);
            app.get('/', function (req, res) {
                res.send(texto);
              })                   
            };
    crearRespuesta();
    }
    else {
        console.log("El ID ingresado no corresponde a ninguno de los cursos disponibles, seleccione uno a continuacion:");
        cursos.listCursos();
    }
}
else cursos.listCursos();

app.listen(3000)