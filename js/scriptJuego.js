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
let haRespondido = false;

let preguntaActiva;

function generarIntegerAleatorio(max) { //Esta función genera un número aleatorio entre 0 y max
    return Math.floor(Math.random() * max);
}

function limpiarOpciones(){ // Esta función limpiarOpciones limpia el label y los botones, la uso para cambiar de pregunta/opciones
intentosFallidos = 0;
pasaNivel = false;
turnosTranscurridos++;

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

    switch (ordenPreguntas) { //Este switch define un orden de respuestas de acuerdo a un valor aleatorio
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

let ordenPreguntas = generarIntegerAleatorio(15); //Este es el valor aleatorio que define el orden de las respuestas
let arrayPreguntas; //Acá se guardan todas las preguntas una vez se consiguieron del json
var URLJSON = "../json/preguntas.json"; //Ruta al .json que contiene las preguntas
var pasaNivel = false;

function mostrarOpciones(nroPregunta){
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
        console.log("Orden de preguntas caso: " + ordenPreguntas);
        $("#btnRespuestaA").html(JSON.stringify(preguntaActiva.respuestaCorrecta));
        $("#btnRespuestaA").attr("id", "btnCorrecto");
        $("#btnRespuestaB").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[0]));
        $("#btnRespuestaC").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[2]));
        $("#btnRespuestaD").html(JSON.stringify(preguntaActiva.respuestasIncorrectas[1]));
        break;
}
}

function correrNivel(nroDePregunta){
    limpiarOpciones();
    pasaNivel = false;
    mostrarOpciones(nroDePregunta);

                    while(pasaNivel==false){
                        $("#btnCorrecto").click(function () {
                                    $("#btnCorrecto").attr("class", "btn btn-success")
                                    puntajeActual++;
                                    haRespondido = true;
                                    pasaNivel = true;
                                    limpiarOpciones();
                                });

                                $("#btnRespuestaA").click(function () {
                                    $("#btnRespuestaA").attr("class", "btn btn-danger")
                                    intentosFallidos++;
                                    haRespondido = true;
                                    puntajeActual--;
                                });
                            
                                $("#btnRespuestaB").click(function () {
                                    $("#btnRespuestaB").attr("class", "btn btn-danger")
                                    intentosFallidos++;
                                    haRespondido = true;
                                    puntajeActual--;
                                });
                            
                                $("#btnRespuestaC").click(function () {
                                    $("#btnRespuestaC").attr("class", "btn btn-danger")
                                    intentosFallidos++;
                                    haRespondido = true;
                                    puntajeActual--;
                                });
                                $("#btnRespuestaD").click(function () {
                                    $("#btnRespuestaD").attr("class", "btn btn-danger")
                                    intentosFallidos++;
                                    haRespondido = true;
                                    puntajeActual--;
                                });

                        if(haRespondido){
                            haRespondido = false;
                            if(intentosFallidos==2){
                                pasaNivel = true;
                            }
                        }
                    }
}

$.ajax({
    type: "GET",
    url: URLJSON,
    success: (respuesta) => {
        console.log("Éxito al llamar al N de preguntas: " + JSON.stringify(respuesta));
        arrayPreguntas = respuesta;
        while (turnosTranscurridos < 5) {
            switch (turnosTranscurridos) {
                case 0:
                    correrNivel(1);
                    break;
                case 1:
                    correrNivel(2);
                    break;
                case 2:
                    correrNivel(3);
                    break;
                case 3:
                    correrNivel(4);
                    break;
                case 4:
                    correrNivel(5);
                    break;
            }
        }
        
        pasaNivel = false;
        

        $("#contQuiz").hide();
        $("#contQuiz").fadeIn("fast");
    }
});
