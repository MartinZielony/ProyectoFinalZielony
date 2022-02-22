$(document).ready(function () {
    console.log("El DOM esta listo");
});

console.log("Página Iniciada");

$("nav").hide();
$("nav").fadeIn();

$("main").hide();
$("main").fadeIn();

$("footer").hide();
$("footer").fadeIn("slow", function () {//Aparecen con FadeIn todos los elementos del HTML
    console.log("Aparecieron los elementos del Body")
});

let cantUsuarios = 0;

//CLASES
class Persona {
    constructor(idUsuario, nombre, apellido, edad, contrasena, puntajeMAX) {
        this.idUsuario = idUsuario;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.contrasena = contrasena;
        this.puntajeMAX = puntajeMAX;
    }

    nombreCompleto() {
        this.nombre = this.nombre + " " + this.apellido;
    }
}

//ARRAYS
let arrayUsuarios = [];

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

    delete duplicarUsuario.contrasena; //Se elimina el dato "contraseña", ya que sería redundante.

    console.log(duplicarUsuario);
    console.log("Creado el nuevo objeto que se usará para mostrar la información del usuario.");

    $("#contMain").append(`<br>
                        <div>
                            <h4>Id: ${duplicarUsuario.idUsuario}, Nombre: ${duplicarUsuario.nombre} ${duplicarUsuario.apellido}</h4>
                            <span>Edad: ${duplicarUsuario.edad} años</span>
                            <b>Puntaje Máximo: ${duplicarUsuario.puntajeMAX}</b>
                        </div>`)

    $("#ingresoBusqueda").val("");
    $("#formGroupBusqueda").remove();
    $("#btnVerUsuario").html("Ver Otro Usuario") ; //Aplico el cambio
};

$("#btnVerUsuario").click(function () {
    $("#formIngresoUsuario").append(
`<div class="form-group" id="formGroupBusqueda">
    <label>Ingrese la contraseña del usuario cuya información desee ver: </label>
    <input type="password" class="form-control" id="ingresoBusqueda" placeholder="Contraseña">
    <button id="buscarPorContrasena" type="button" class="btn btn-dark">Buscar</button>
</div>`);

                            $("#buscarPorContrasena").click(btnBuscaContrasena);
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
        if((arrayVerificar[index]) == "" || (arrayVerificar[index] == " ") ){
            cantItemsIncompletos++;
        }
    }
    if(cantItemsIncompletos > 0){
        evento.preventDefault();
        $("#formIngresoUsuario").append(`<label id="lblErrorForm">`+cantItemsIncompletos+` items en el formulario están incompletos.</label>`)
    } else {
        $("#lblErrorForm").remove();

let URLUsuarios = "./json/usuarios.json";

    $.ajax({
        type: "GET",
        url: URLUsuarios,
        success: (respuesta) => {
            console.log("Éxito al llamar al JSON de Usuarios para definir ID del nuevo Usuario");
            arrayUsuarios = respuesta;
            cantUsuarios = arrayUsuarios.length;
            cantUsuarios++;
            console.log("Cant de Usuarios Actual: " + cantUsuarios);

            arrayUsuarios.push( //pusheo un nuevo objeto "Persona" para ser agregado a arrayUsuarios
    new Persona(
        cantUsuarios, //defino al idUsuario (primer dato de la clase) utilizando la cantidad de usuarios, si este es el primero su id será 1.
        nombreIngresado,
        apellidoIngresado,
        edadIngresada,
        contrasenaIngresada,
        0
    )
)
$('#formIngresoUsuario').trigger("reset");

$.ajax({
    type: "POST",
    url: URLUsuarios,
    data: arrayUsuarios,
    success: () => {
        console.log("Éxito al llamar al JSON de Usuarios para agregar usuario");
        console.log("Usuario Agregado: " + arrayUsuarios.find(usuario => usuario.idUsuario === cantUsuarios));
                },
    error: () => {console.log("Error al llamar al JSON de usuarios para agregar Usuario")}
            });
        },
        error: () => {console.log("Error al llamar al Json de Usuarios para definir ID de usuario nuevo")}
    });
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