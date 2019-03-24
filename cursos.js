const cursos = [
    {    
        nombre:'Calculo',
        duracion:'4 semanas',
        costo:1000
    },
    {
        nombre:'Ingles',
        duracion:'8 semanas',
        costo:2000
    },
    {
        nombre:'PHP I',
        duracion:'6 semanas',
        costo:3000
    },
    {
        nombre:'Java',
        duracion:'7 semanas',
        costo:4000
    }
]

let listCursos = function() {
    let p = 0;
    console.log("Lista de cursos disponibles:");
    console.log("ID Curso:\t" + "Nombre:\t\t" + "Duración:\t" + "Valor $:");
    for (let i = 0; i < cursos.length; i++) {
        setTimeout(function () {
            console.log(i + 1 + "\t\t" + cursos[i]['nombre'] + "\t\t" + cursos[i]['duracion'] + "\t\t" + cursos[i]['costo']);
        }, p);
        p += 2000;
    }
}

module.exports = {
    listCursos,
    cursos
}
/*

function listCursos(){
    let p = 0;
    console.log("Lista de cursos disponibles:");
    console.log("ID Curso:\t" + "Nombre:\t\t" + "Duración:\t" + "Valor $:");
    for(let i = 0; i < cursos.length; i++){
        setTimeout(function(){ console.log(i+1 +"\t\t" + cursos[i]['nombre'] + "\t\t" + cursos[i]['duracion'] + "\t\t" + cursos[i]['costo']);
    },p);
    p += 2000;
    }
};

listCursos();
*/
