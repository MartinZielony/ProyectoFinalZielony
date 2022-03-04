$(document).ready(function () {
    console.log("El DOM esta listo");
    $("#formGroupBusqueda").hide();
    $("#lblErrorForm").hide();
    $("#lblErrorUsuario").hide();
});

let arrayUsuarios = [];
let visitaPrimeraVez = JSON.parse(localStorage.getItem("arrayUsuarios"));

if (visitaPrimeraVez==null) {
    console.log("Primera visita");
    localStorage.setItem("arrayUsuarios", JSON.stringify([]))
} else {
    arrayUsuarios = JSON.parse(localStorage.getItem("arrayUsuarios"));
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
    constructor(idUsuario, nombreUsuario, edad, contrasena, puntajeMAX) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario.toUpperCase();
        this.edad = edad;
        this.contrasena = contrasena;
        this.puntajeMAX = 0;
    }
}

//FUNCIONES

function btnBuscaUsuario() {
    console.log("busqueda por Nombre de Usuario");

    let usuarioBuscado = $("#ingresoBusqueda").val();

    console.log("Se busca al usuario de nombre " + usuarioBuscado);

    let buscarArray = JSON.parse(localStorage.getItem('arrayUsuarios'));
    let duplicarUsuario = buscarArray.find(usuario => usuario.nombreUsuario == usuarioBuscado);

    console.log(duplicarUsuario);
    console.log("Creado el nuevo objeto que se usará para mostrar la información del usuario.");

    $("#contMain").append(`<br>
                            <div>
                                <h4>Id: ${duplicarUsuario.idUsuario}, Nombre de Usuario: ${duplicarUsuario.nombreUsuario}</h4>
                                <span>Edad: ${duplicarUsuario.edad} años</span>
                                <b>Puntaje Máximo: ${duplicarUsuario.puntajeMAX}</b>
                            </div>`)

    $("#ingresoBusqueda").val("");
    $("#formGroupBusqueda").hide();
    $("#btnVerUsuario").html("Ver Otro Usuario"); //Aplico el cambio
};

$("#btnVerUsuario").click(function () {
    $("#formGroupBusqueda").show();

    $("#buscarPorUsuario").click(btnBuscaUsuario);
    $("#ingresoBusqueda").keyup((e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            $("#buscarPorUsuario").click();
        }
    });
});

function cargarUsuario(evento) {    
    nombreIngresado = $("#inputNombreUsuario").val();
    edadIngresada = $("#inputEdadUsuario").val();
    contrasenaIngresada = $("#inputContrasenaUsuario").val();

    let arrayVerificar = [nombreIngresado, edadIngresada, contrasenaIngresada];
    let cantItemsIncompletos = 0;
    let UsuarioYaExiste = false;
    for (let index = 0; index < arrayVerificar.length; index++) {
        if ((arrayVerificar[index]) == "" || (arrayVerificar[index] == " ")) {
            cantItemsIncompletos++;
        }
    }

    for (let index = 0; index < arrayUsuarios.length; index++) {
        if(nombreIngresado.toUpperCase() == arrayUsuarios[index].nombreUsuario){
            evento.preventDefault();
            UsuarioYaExiste = true;
        }
    }

    if (cantItemsIncompletos > 0) {
        evento.preventDefault();
        $("#lblErrorForm").show();
        $("#lblErrorForm").delay(1500).fadeOut("slow");
    } else if(UsuarioYaExiste == true){
        evento.preventDefault();
        console.log("Ya existe un usuario con el nombre " + nombreIngresado);
        $("#lblErrorUsuario").show();
        $("#lblErrorUsuario").delay(1500).fadeOut("slow");
        $("#inputNombreUsuario").val("");
    } else{
        arrayUsuarios.push( //pusheo un nuevo objeto "Persona" para ser agregado a arrayUsuarios
            new Persona(
                arrayUsuarios.length, //defino al idUsuario (primer dato de la clase) utilizando la longitud del array. Si no tiene elementos, este va a ser el elemento 0. Si quisiera que arranque en 1, escribo (arrayUsuarios.length+1).
                nombreIngresado,
                edadIngresada,
                contrasenaIngresada,
                0 //Puntaje máximo en 0
            )
        )
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