$(document).ready(function () {
    console.log("El DOM esta listo");
    $("#formGroupBusqueda").hide();
});

let arrayUsuarios = [];
let cantUsuarios = 0;
var visitaPrimeraVez = localStorage.getItem("first_time");

if (visitaPrimeraVez) {
    console.log("Primera visita");
    localStorage.setItem("arrayUsuarios", JSON.stringify([]));
} else {
    arrayUsuarios = JSON.parse(localStorage.getItem("arrayUsuarios"));
    cantUsuarios = arrayUsuarios.length;
}

console.log("Página Iniciada");

$("nav").hide();
$("nav").fadeIn();

$("main").hide();
$("main").fadeIn();

$("footer").hide();
$("footer").fadeIn("slow", function () {//Aparecen con FadeIn todos los elementos del HTML
    console.log("Aparecieron los elementos del Body")
});



//CLASES
class Persona {
    constructor(idUsuario, nombre, apellido, edad, contrasena, puntajeMAX) {
        this.idUsuario = idUsuario;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.contrasena = contrasena;
        this.puntajeMAX = 0;
    }

    nombreCompleto() {
        this.nombre = this.nombre + " " + this.apellido;
    }
}

//FUNCIONES

function dividir(dato1, dato2, resultado) {
    resultado = dato1 / dato2;
    return resultado;
}

function btnBuscaContrasena() {
    console.log("busqueda por contraseña");

    let usuarioBuscado = $("#ingresoBusqueda").val();

    console.log("Se busca al usuario de la contraseña " + usuarioBuscado);

    let buscarArray = JSON.parse(localStorage.getItem('arrayUsuarios'));
    let duplicarUsuario = buscarArray.find(usuario => usuario.contrasena == usuarioBuscado);

    console.log(duplicarUsuario);
    console.log("Creado el nuevo objeto que se usará para mostrar la información del usuario.");

    $("#contMain").append(`<br>
                        <div>
                            <h4>Id: ${duplicarUsuario.idUsuario}, Nombre: ${duplicarUsuario.nombre} ${duplicarUsuario.apellido}</h4>
                            <span>Edad: ${duplicarUsuario.edad} años</span>
                            <b>Puntaje Máximo: ${duplicarUsuario.puntajeMAX}</b>
                        </div>`)

    $("#ingresoBusqueda").val("");
    $("#formGroupBusqueda").hide();
    $("#btnVerUsuario").html("Ver Otro Usuario"); //Aplico el cambio
};

$("#btnVerUsuario").click(function () {
    $("#formGroupBusqueda").show();

    $("#buscarPorContrasena").click(btnBuscaContrasena);
    $("#ingresoBusqueda").keyup((e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            $("#buscarPorContrasena").click();
        }
    });
});





function cargarUsuario(evento) {
    console.log("cargar usuario")
    nombreIngresado = $("#inputNombreUsuario").val();
    apellidoIngresado = $("#inputApellidoUsuario").val();
    edadIngresada = $("#inputEdadUsuario").val();
    contrasenaIngresada = $("#inputContrasenaUsuario").val();

    let arrayVerificar = [nombreIngresado, apellidoIngresado, edadIngresada, contrasenaIngresada];
    let cantItemsIncompletos = 0;
    for (let index = 0; index < arrayVerificar.length; index++) {
        if ((arrayVerificar[index]) == "" || (arrayVerificar[index] == " ")) {
            cantItemsIncompletos++;
        }
    }
    if (cantItemsIncompletos > 0) {
        evento.preventDefault();
        $("#formIngresoUsuario").append(`<label id="lblErrorForm">` + cantItemsIncompletos + ` items en el formulario están incompletos.</label>`)
    } else {
        $("#lblErrorForm").remove();

        arrayUsuarios.push( //pusheo un nuevo objeto "Persona" para ser agregado a arrayUsuarios
            new Persona(
                cantUsuarios, //defino al idUsuario (primer dato de la clase) utilizando la cantidad de usuarios, si este es el primero su id será 1.
                nombreIngresado,
                apellidoIngresado,
                edadIngresada,
                contrasenaIngresada,
                0 //Puntaje máximo en 0
            )
        )
        console.log("Usuario Agregado: " + JSON.stringify(arrayUsuarios[cantUsuarios]));
        localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
        $('#formIngresoUsuario').trigger("reset");
    }

}

// EVENT LISTENERS PARA ENVIAR EL FORMULARIO CON TECLA ENTER
$("#inputNombreUsuario").keyup((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarUsuario").click();
    }
});

$("#inputApellidoUsuario").keyup((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarUsuario").click();
    }
});

$("#inputEdadUsuario").keyup((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarUsuario").click();
    }
});

$("#inputContrasenaUsuario").keyup((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarUsuario").click();
    }
});


// FIN DE EVENT LISTENERS PARA ENVIAR EL FORMULARIO CON TECLA ENTER

$("#btnAgregarUsuario").click(cargarUsuario);

function comenzarJuego() {
    window.location.href = "pages/escenaJuegoComenzado.html";
}

$("#btnComenzarJuego").click(comenzarJuego);