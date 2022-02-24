$(document).ready(function () {
    console.log("El DOM esta listo");
});

let arrayUsuarios = JSON.parse(localStorage.getItem("arrayUsuarios"));

class Pregunta { // El objeto pregunta tiene la info de cada pregunta
    constructor(idPregunta, pregunta, respuestaCorrecta, respuestasIncorrectas) {
        idPregunta = idPregunta;
        pregunta = pregunta;
        respuestaCorrecta = respuestaCorrecta;
        respuestasIncorrectas = [];
    }
}

let puntajeActual = 0;
let intentosFallidos = 0;
let turnosTranscurridos = 0;
let preguntaActiva;

function generarIntegerAleatorio(max) { //Esta función genera un número aleatorio entre 0 y max
    return Math.floor(Math.random() * max);
}
let ordenPreguntas = generarIntegerAleatorio(15);

function limpiarOpciones(){ // Esta función limpiarOpciones limpia el label y los botones, la uso para cambiar de pregunta/opciones
intentosFallidos = 0;

    $("#lblPregunta").html("");
    $("#lblRespuestaA").html("");
    $("#lblRespuestaA").attr("class", "");
    $("#lblRespuestaB").html("");
    $("#lblRespuestaB").attr("class", "");
    $("#lblRespuestaC").html("");
    $("#lblRespuestaC").attr("class", "");
    $("#lblRespuestaD").html("");
    $("#lblRespuestaD").attr("class", "");

    switch (ordenPreguntas) { //Este switch define un orden de respuestas de acuerdo a un valor aleatorio
        case 0:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 1:
            $("#radioCorrecto").attr("id", "radioRespuestaD");
            break;
        case 2:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 3:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 4:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 5:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 6:
            $("#radioCorrecto").attr("id", "radioRespuestaC");
            break;
        case 7:
            $("#radioCorrecto").attr("id", "radioRespuestaB");
            break;
        case 8:
            $("#radioCorrecto").attr("id", "radioRespuestaB");
            break;
        case 9:
            $("#radioCorrecto").attr("id", "radioRespuestaD");
            break;
        case 10:
            $("#radioCorrecto").attr("id", "radioRespuestaB");
            break;
        case 11:
            $("#radioCorrecto").attr("id", "radioRespuestaB");
            break;
        case 12:
            $("#radioCorrecto").attr("id", "radioRespuestaA");
            break;
        case 13:
            $("#radioCorrecto").attr("id", "radioRespuestaA");
            break;
        case 14:
            $("#radioCorrecto").attr("id", "radioRespuestaD");
            break;
        case 15:
            $("#radioCorrecto").attr("id", "radioRespuestaA");
            break;
    }
}

 //Este es el valor aleatorio que define el orden de las respuestas
let arrayPreguntas; //Acá se guardan todas las preguntas una vez se consiguieron del json
var URLJSON = "../json/preguntas.json"; //Ruta al .json que contiene las preguntas

$.ajax({
    type: "GET",
    url: URLJSON,
    success: (respuesta) => {
        console.log("Éxito al llamar al JSON de preguntas: " + JSON.stringify(respuesta));
        arrayPreguntas = respuesta;
        mostrarOpciones(0); //Comienza primer nivel
        },
    error: () => {console.log("Error al llamar al JSON de preguntas.")}
    });

function mostrarOpciones(nroPregunta){
preguntaActiva = arrayPreguntas[nroPregunta];
$("#lblPregunta").html(JSON.stringify(preguntaActiva.pregunta));

switch (ordenPreguntas) {
    case 0:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 1:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 2:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 3:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 4:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 5:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 6:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 7:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 8:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 9:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 10:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 11:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
    case 12:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        break;
    case 13:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        break;
    case 14:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 15:
        console.log("Orden de preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#lblRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#lblRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
}
}

function correrNivel(nroDePregunta){
    limpiarOpciones();
    pasaNivel = false;
    mostrarOpciones(nroDePregunta);
}


