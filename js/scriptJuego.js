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

sessionStorage.setItem("PuntajeActual", 0)

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

let contQuiz = document.getElementById("contQuiz");
let preguntaDOM = document.createElement("label");
preguntaDOM.setAttribute("class", "fw-bold");

let res1DOM = document.createElement("button"); //respuesta correcta
res1DOM.setAttribute("class", "btn btn-dark");

let res2DOM = document.createElement("button");
res2DOM.setAttribute("class", "btn btn-dark");
let res3DOM = document.createElement("button");
res3DOM.setAttribute("class", "btn btn-dark");
let res4DOM = document.createElement("button");
res4DOM.setAttribute("class", "btn btn-dark");

function generarIntegerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

let valorAleatorio = generarIntegerAleatorio(4); //4 Porque hay 5 lugares en el array, incluyendo el puesto 0.

let preguntaActiva = arrayPreguntas[valorAleatorio];
    preguntaDOM.innerHTML = JSON.stringify(preguntaActiva.pregunta);
    res1DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaCorrecta);
    res2DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc1);
    res3DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc2);
    res4DOM.innerHTML = JSON.stringify(preguntaActiva.respuestaInc3);

    contQuiz.appendChild(preguntaDOM);
    contQuiz.appendChild(res1DOM);
    contQuiz.appendChild(res2DOM);
    contQuiz.appendChild(res3DOM);
    contQuiz.appendChild(res4DOM);

res1DOM.addEventListener("click", function(){
    res1DOM.setAttribute ("class", "btn btn-success")
});