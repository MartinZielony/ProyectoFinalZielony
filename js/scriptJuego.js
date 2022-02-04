class Pregunta {
    constructor(idPregunta, pregunta, respuestaCorrecta, respuesta2, respuesta3, respuesta4){
        idPregunta = idPregunta;
        pregunta = pregunta;
        respuestaCorrecta = respuestaCorrecta;
        respuesta2 = respuestaInc1;
        respuesta3 = respuestaInc2;
        respuesta4 = respuestaInc3;
    }
}

sessionStorage.setItem("PuntajeActual", 0);

let arrayPreguntas = [
    {
        idPregunta:1,pregunta:"¿Cómo se llama el creador de este proyecto?",respuestaCorrecta:"Martín Zielony",respuestaInc1:"Florencia Hendel",respuestaInc2:"Luis Laverde",respuestaInc3:"Dani Bootstrap García"
    },
    {
        idPregunta:2,pregunta:"¿Qué se enseña en el curso en el que hice este proyecto?",respuestaCorrecta:"Javascript",respuestaInc1:"HTML/CSS",respuestaInc2:"ReactJs",respuestaInc3:"Desarrollo FrontEnd"
    },
    {
        idPregunta:3,pregunta:"¿En qué plataforma se dictan (idealmente) las clases?",respuestaCorrecta:"Zoom",respuestaInc1:"Google Meet",respuestaInc2:"Microsoft Teams",respuestaInc3:"Facebook"
    },
    {
        idPregunta:4,pregunta:"¿En qué rango horario tiene clases esta comisión 24385?",respuestaCorrecta:"20:30 a 22:30",respuestaInc1:"19:30 a 21:30",respuestaInc2:"10 a 12",respuestaInc3:"15:30 a 17:30"
    },
    {
        idPregunta:5,pregunta:"¿Cómo se llama el tutor del creador de este proyecto?",respuestaCorrecta:"Luis Laverde",respuestaInc1:"Milton Salazar",respuestaInc2:"Martín Zielony",respuestaInc3:"Ezequiel Galardi"
    }
]

sessionStorage.setItem("puntajeActual", "int");

let contQuiz = document.getElementById("contQuiz");
let contPregunta = document.getElementById("contPregunta");
let contOpciones = document.getElementById("contOpciones")
let preguntaDOM = document.createElement("label");
preguntaDOM.setAttribute("class", "fw-bold");


function generarIntegerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

let valorAleatorio = generarIntegerAleatorio(4); //4 Porque hay 5 lugares en el array, incluyendo el puesto 0.

let preguntaActiva = arrayPreguntas[valorAleatorio]; //se define la pregunta para mostrar a partir del valor aleatorio

let resCorrectaDOM = document.createElement("button"); //respuesta correcta
resCorrectaDOM.setAttribute("class", "btn btn-dark");

let res1DOM = document.createElement("button");
res1DOM.setAttribute("class", "btn btn-dark");
let res2DOM = document.createElement("button");
res2DOM.setAttribute("class", "btn btn-dark");
let res3DOM = document.createElement("button");
res3DOM.setAttribute("class", "btn btn-dark");

preguntaDOM.innerHTML = JSON.stringify(preguntaActiva.pregunta);

function mostrarQuiz(){
    let ordenRespuestas = generarIntegerAleatorio(15); //habrán 16 posibles combinaciones para ordenar las respuestas.
    switch (ordenRespuestas) { //este switch define el orden de las preguntas de acuerdo al valor de ordenRespuestas
        case 0:
            res1DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc1)
            res2DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc2)
            res3DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc3)
            resCorrectaDOM = JSON.stringify(preguntaActiva.respuestaCorrecta)
            break;
    
        default:
            break;
    }
}


    resCorrectaDOM.innerHTML = JSON.stringify(preguntaActiva.respuestaCorrecta);
    res1DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc1);
    res2DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc2);
    res3DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc3);

    contPregunta.appendChild(preguntaDOM);
    contOpciones.appendChild(resCorrectaDOM);
    contOpciones.appendChild(res1DOM);
    contOpciones.appendChild(res2DOM);
    contOpciones.appendChild(res3DOM);

resCorrectaDOM.addEventListener("click", function(){
    resCorrectaDOM.setAttribute ("class", "btn btn-success")
    puntajeActual = sessionStorage.getItem("puntajeActual")
    sessionStorage.setItem("PuntajeActual", puntajeActual++);
});