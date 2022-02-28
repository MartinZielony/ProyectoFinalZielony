$(document).ready(function () {
    console.log("El DOM esta listo");
    $("#formGroupPuntaje").hide();
    $("#botonesFinal").hide();
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
let ordenPreguntas;

function ocultarPreguntaActual(){ // Esta función ocultarPreguntaActual limpia el label y los botones, la uso para cambiar de pregunta/opciones
console.log("Se oculta la pregunta actual");

$("input").prop('checked', false);

$("#lblPregunta").html("");
    $("#lblRespuestaA").html("");
    $("#lblRespuestaA").attr("class", "");
    $("#lblRespuestaB").html("");
    $("#lblRespuestaB").attr("class", "");
    $("#lblRespuestaC").html("");
    $("#lblRespuestaC").attr("class", "");
    $("#lblRespuestaD").html("");
    $("#lblRespuestaD").attr("class", "");
    $("#btnEnviarRespuesta").attr("class", "btn btn-dark")
    $("#btnEnviarRespuesta").html("Enviar Respuesta")

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

let arrayPreguntas; //Acá se guardan todas las preguntas una vez se consiguieron del json
var URLJSON = "../json/preguntas.json"; //Ruta al .json que contiene las preguntas

$.ajax({
    type: "GET",
    url: URLJSON,
    success: (respuesta) => {
        console.log("Éxito al llamar al JSON de preguntas: " + JSON.stringify(respuesta));
        arrayPreguntas = respuesta;
        mostrarPregunta(turnosTranscurridos);
        },
    error: () => {console.log("Error al llamar al JSON de preguntas.")}
    });

function controlarRespuestaActual(){
    if($("#radioCorrecto").is(':checked')){
        console.log("Se ha respondido correctamente la pregunta")
        puntajeActual++; turnosTranscurridos++;
        $("#btnEnviarRespuesta").attr("class", "btn btn-success");
        $("#btnEnviarRespuesta").html("Correcto!")
    } else {
        console.log("Se ha respondido incorrectamente la pregunta")
        if (intentosFallidos == 0){
        intentosFallidos++;
        $("#contOpciones").append(`<span>Incorrecto! Intente una vez más.</span>`);
        } else {
        turnosTranscurridos++;
        $("#btnEnviarRespuesta").attr("class", "btn btn-danger");
        $("#btnEnviarRespuesta").html("Incorrecto...");
        intentosFallidos = 0;
        $("#contOpciones span").remove();
        }
    }
}

$("#btnEnviarRespuesta").click((evento) => {

    controlarRespuestaActual();
    ocultarPreguntaActual();
    
    if (turnosTranscurridos == 5){
        if(puntajeActual > 0){
            $("#titulo").html("Felicitaciones!")
            $("#lblPregunta").html("Ganaste "+puntajeActual+" puntos!")
            $("#contOpciones").remove();
            $("#formGroupPuntaje").show();
        } else {
            $("#titulo").html("Suerte la próxima!")
        }
    } else {
        mostrarPregunta(turnosTranscurridos);
    }
});

let contrasenaJugador;
let usuarioJugador;
let idJugador;

$("#enviarContrasena").click(()=>{
    console.log("Comienza Proceso Puntaje Maximo.");
    contrasenaJugador = $("#ingresoContrasena").val();
    usuarioJugador = arrayUsuarios.find(usuario => usuario.contrasena == contrasenaJugador);
    idJugador = usuarioJugador.idUsuario;

    if(usuarioJugador.puntajeMAX < puntajeActual){
        usuarioJugador.puntajeMAX = puntajeActual;
        arrayUsuarios[idJugador] = usuarioJugador;
        localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
    }   
        $("#contPregunta").remove();
        $("#formGroupPuntaje").remove();
        $("#botonesFinal").show();
});

$("#btnVolver").click(volverPagPrincipal);
$("#btnResetear").click(reiniciar);

function volverPagPrincipal(){
    window.location.href = "../index.html"
}

function reiniciar(){
    document.location.reload();
}

function mostrarPregunta(nroPregunta){
console.log("Se muestra la pregunta " + nroPregunta);
preguntaActiva = arrayPreguntas[nroPregunta];
$("#lblPregunta").html(preguntaActiva.pregunta);
ordenPreguntas = generarIntegerAleatorio(15);
switch (ordenPreguntas) {
    case 0:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[2]);
        break;
    case 1:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaD").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 2:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 3:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 4:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[1]);
        break;
    case 5:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 6:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaC").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaC").attr("id", "radioCorrecto");
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[1]);
        break;
    case 7:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaB").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 8:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaB").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 9:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaD").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 10:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaB").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[2]);
        break;
    case 11:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaB").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaB").attr("id", "radioCorrecto");
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[1]);
        break;
    case 12:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[0]);
        break;
    case 13:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[2]);
        break;
    case 14:
        console.log("Orden de Preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestasIncorrectas[1]);
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaD").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaD").attr("id", "radioCorrecto");
        break;
    case 15:
        console.log("Orden de preguntas caso: " + ordenPreguntas);
        $("#lblRespuestaA").html(preguntaActiva.respuestaCorrecta);
        $("#radioRespuestaA").attr("id", "radioCorrecto");
        $("#lblRespuestaB").html(preguntaActiva.respuestasIncorrectas[0]);
        $("#lblRespuestaC").html(preguntaActiva.respuestasIncorrectas[2]);
        $("#lblRespuestaD").html(preguntaActiva.respuestasIncorrectas[1]);
        break;
}

}
