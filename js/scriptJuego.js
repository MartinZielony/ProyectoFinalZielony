class Pregunta {
    constructor(idPregunta, pregunta, respuestaCorrecta, respuestasIncorrectas){
        idPregunta = idPregunta;
        pregunta = pregunta;
        respuestaCorrecta = respuestaCorrecta;
        respuestasIncorrectas = [];
    }
}

sessionStorage.setItem("PuntajeActual", 0);

let arrayPreguntas = [
    {
        idPregunta:1,
        pregunta:"¿Cómo se llama el creador de este proyecto?",
        respuestaCorrecta:"Martín Zielony",respuestaInc1:"Florencia Hendel",
        respuestasIncorrectas:["Florencia Hendel","Luis Laverde","Dani Bootstrap García"]
    },
    {
        idPregunta:2,
        pregunta:"¿Qué se enseña en el curso en el que hice este proyecto?",
        respuestaCorrecta:"Javascript",
        respuestasIncorrectas:["HTML/CSS","ReactJs","Desarrollo FrontEnd"]
    },
    {
        idPregunta:3,
        pregunta:"¿En qué plataforma se dictan (idealmente) las clases?",
        respuestaCorrecta:"Zoom",
        respuestasIncorrectas:["Google Meet","Microsoft Teams","Facebook"]
    },
    {
        idPregunta:4,
        pregunta:"¿En qué rango horario tiene clases esta comisión 24385?",
        respuestaCorrecta:"20:30 a 22:30",
        respuestasIncorrectas:["19:30 a 21:30","10 a 12","15:30 a 17:30"]
    },
    {
        idPregunta:5,
        pregunta:"¿Cómo se llama el tutor del creador de este proyecto?",
        respuestaCorrecta:"Luis Laverde",
        respuestasIncorrectas:["Milton Salazar","Martín Zielony","Ezequiel Galardi"]
    }
]

sessionStorage.setItem("puntajeActual", "int");

let contQuiz = document.getElementById("contQuiz");
let contPregunta = document.getElementById("contPregunta");
let contOpciones = document.getElementById("contOpciones")

let preguntaDOM = document.createElement("label");
preguntaDOM.setAttribute("class", "fw-bold");

let resADOM = document.createElement("button");
resADOM.setAttribute("class", "btn btn-dark");
let resBDOM = document.createElement("button");
resBDOM.setAttribute("class", "btn btn-dark");
let resCDOM = document.createElement("button");
resCDOM.setAttribute("class", "btn btn-dark");
let resDDOM = document.createElement("button");
resDDOM.setAttribute("class", "btn btn-dark");

function generarIntegerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

let preguntaAleatorio = generarIntegerAleatorio(4); //4 Porque hay 5 lugares en el array, incluyendo el puesto 0.
let preguntaActiva = arrayPreguntas[preguntaAleatorio];
    preguntaDOM.innerHTML = JSON.stringify(preguntaActiva.pregunta);
    
    resADOM.innerHTML = JSON.stringify(preguntaActiva.respuestaCorrecta);
    resBDOM.innerHTML = JSON.stringify(preguntaActiva.respuestasIncorrectas[0]);
    resCDOM.innerHTML = JSON.stringify(preguntaActiva.respuestasIncorrectas[1]);
    resDDOM.innerHTML = JSON.stringify(preguntaActiva.respuestasIncorrectas[2]);

    contPregunta.appendChild(preguntaDOM)
    contOpciones.appendChild(resADOM);
    contOpciones.appendChild(resBDOM);
    contOpciones.appendChild(resCDOM);
    contOpciones.appendChild(resDDOM);

resADOM.addEventListener("click", function(){
resADOM.setAttribute ("class", "btn btn-success")
puntajeActual = sessionStorage.getItem("puntajeActual")
sessionStorage.setItem("PuntajeActual", puntajeActual++);
});