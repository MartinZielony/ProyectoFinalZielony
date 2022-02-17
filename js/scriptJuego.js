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

let arrayPreguntas;
var URLJSON = "../json/preguntas.json";
let preguntaActiva; let preguntaAleatoria;
let turnosTranscurridos = 0;

function generarIntegerAleatorio(max) {
    return Math.floor(Math.random() * max);
}

let ordenPreguntas = generarIntegerAleatorio(15);

$.ajax({
    type: "GET",
    url: URLJSON,
    success: (respuesta) => {
        console.log("Éxito al llamar al JSON de preguntas: " + JSON.stringify(respuesta));
        arrayPreguntas = respuesta;
        preguntaAleatoria = generarIntegerAleatorio(4); //4 Porque hay 5 lugares en el array, incluyendo el puesto 0.
        console.log("caso pregunta: " + preguntaAleatoria);
        preguntaActiva = arrayPreguntas[preguntaAleatoria];
        console.log("definida la pregunta de acuerdo al caso");
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
            turnosTranscurridos++;
        });

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
    }
});

$("#contQuiz").hide();
$("#contQuiz").fadeIn("fast");

// while(intentosFallidos>=2){
//     pasarTurno();
//     intentosFallidos = 0;
// }
