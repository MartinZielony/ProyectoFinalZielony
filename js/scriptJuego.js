$(document).ready(function () {
    console.log("El DOM esta listo");
});

class Pregunta {
    constructor(idPregunta, pregunta, respuestaCorrecta, respuestasIncorrectas) {
        idPregunta = idPregunta;
        pregunta = pregunta;
        respuestaCorrecta = respuestaCorrecta;
        respuestasIncorrectas = [];
    }
}

let puntajeActual = 0;
let intentosFallidos = 0;


let preguntaActiva;

function generarIntegerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function limpiarOpciones(){
intentosFallidos = 0;
respondidoCorrecto = false;


    $("#lblPregunta").html("");
    $("#btnRespuestaA").html("");
    $("#btnRespuestaA").attr("class", "btn btn-dark");
    $("#btnRespuestaB").html("");
    $("#btnRespuestaB").attr("class", "btn btn-dark");
    $("#btnRespuestaC").html("");
    $("#btnRespuestaC").attr("class", "btn btn-dark");
    $("#btnRespuestaD").html("");
    $("#btnRespuestaD").attr("class", "btn btn-dark");
    $("#btnCorrecto").html("")
    $("#btnCorrecto").attr("class", "btn btn-dark");

    switch (ordenPreguntas) {
        case 0:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 1:
            $("#btnCorrecto").attr("id", "btnRespuestaD");
            break;
        case 2:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 3:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 4:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 5:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 6:
            $("#btnCorrecto").attr("id", "btnRespuestaC");
            break;
        case 7:
            $("#btnCorrecto").attr("id", "btnRespuestaB");
            break;
        case 8:
            $("#btnCorrecto").attr("id", "btnRespuestaB");
            break;
        case 9:
            $("#btnCorrecto").attr("id", "btnRespuestaD");
            break;
        case 10:
            $("#btnCorrecto").attr("id", "btnRespuestaB");
            break;
        case 11:
            $("#btnCorrecto").attr("id", "btnRespuestaB");
            break;
        case 12:
            $("#btnCorrecto").attr("id", "btnRespuestaA");
            break;
        case 13:
            $("#btnCorrecto").attr("id", "btnRespuestaA");
            break;
        case 14:
            $("#btnCorrecto").attr("id", "btnRespuestaD");
            break;
        case 15:
            $("#btnCorrecto").attr("id", "btnRespuestaA");
            break;
    }
}

let ordenPreguntas = generarIntegerAleatorio(15);
let arrayPreguntas;
var URLJSON = "../json/preguntas.json";
var respondidoCorrecto = false;

function mostrarOpciones(nroPregunta){

    $("#btnRespuestaA").click(function () {
        $("#btnRespuestaA").attr("class", "btn btn-danger")
        intentosFallidos++;
        puntajeActual--;
    });

    $("#btnRespuestaB").click(function () {
        $("#btnRespuestaB").attr("class", "btn btn-danger")
        intentosFallidos++;
        puntajeActual--;
    });

    $("#btnRespuestaC").click(function () {
        $("#btnRespuestaC").attr("class", "btn btn-danger")
        intentosFallidos++;
        puntajeActual--;
    });
    $("#btnRespuestaD").click(function () {
        $("#btnRespuestaD").attr("class", "btn btn-danger")
        intentosFallidos++;
        puntajeActual--;
    });

preguntaActiva = arrayPreguntas[nroPregunta];
$("#lblPregunta").html(JSON.stringify(preguntaActiva.pregunta));

switch (ordenPreguntas) {
    case 0:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 1:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaD").attr("id", "btnCorrecto");
        break;
    case 2:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 3:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 4:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 5:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 6:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaC").attr("id", "btnCorrecto");
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 7:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaB").attr("id", "btnCorrecto");
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 8:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaB").attr("id", "btnCorrecto");
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 9:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaD").attr("id", "btnCorrecto");
        break;
    case 10:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaB").attr("id", "btnCorrecto");
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 11:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaB").attr("id", "btnCorrecto");
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 12:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaA").attr("id", "btnCorrecto");
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 13:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaA").attr("id", "btnCorrecto");
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 14:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaD").attr("id", "btnCorrecto");
        break;
    case 15:
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaA").attr("id", "btnCorrecto");
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
}

$("#btnCorrecto").click(function () {
    $("#btnCorrecto").attr("class", "btn btn-success")
    puntajeActual++;
    respondidoCorrecto = true;
});

}

function checkearRespuestas(){
    if ((intentosFallidos>=2)||(respondidoCorrecto == true)){
        console.log("Siguiente Turno")
        limpiarOpciones();

    } else { //Este else se ejecuta indefinidamente, lo comprobé con un .log que se ejecutaba repetidas veces.
        //console.log("Se checkearon las respuestas"); Este es el .log
        setTimeout(checkearRespuestas, 300);
    }
}

$.ajax({
    type: "GET",
    url: URLJSON,
    success: (respuesta) => {
        console.log("Éxito al llamar al JSON de preguntas: " + JSON.stringify(respuesta));
        arrayPreguntas = respuesta;
        for (let index = 0; index < arrayPreguntas.length; index++) {
            mostrarOpciones(index);
            checkearRespuestas();
        }
        
        respondidoCorrecto = false;
        

        $("#contQuiz").hide();
        $("#contQuiz").fadeIn("fast");
    }
});
