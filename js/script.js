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

function sumarEdad(nuevoDato) {
    sumaEdades = sumaEdades + nuevoDato;
    console.log("La suma de las edades por el momento es: " + sumaEdades);
}

function dividir(dato1, dato2, resultado) {
    resultado = dato1 / dato2;
    return resultado;
}

let texto = "";
let promptBusqueda;
let ingresoBusqueda;
let buscarPorContrasena;

promptBusqueda = document.createElement("label");


ingresoBusqueda = document.createElement("input");
ingresoBusqueda.setAttribute("id", "ingresoBusqueda");
ingresoBusqueda.setAttribute("type", "password");
ingresoBusqueda.setAttribute("class", "form-control")
ingresoBusqueda.setAttribute("placeholder", "Contraseña")

buscarPorContrasena = document.createElement("button");
buscarPorContrasena.setAttribute("id", "buscarPorContrasena");
buscarPorContrasena.setAttribute("class", "d-none");
buscarPorContrasena.innerHTML = "Buscar"
contMain.appendChild(buscarPorContrasena);

$("#btnVerUsuario").click(function () {
    contMain.removeChild(buscarPorContrasena);
    buscarPorContrasena.setAttribute("class", "btn btn-dark");
    $("#formIngresoUsuario").append(`<div class="form-group" id="formGroupBusqueda">
                                <label>Ingrese la contraseña del usuario cuya información desee ver: </label>
                                <input type="password" class="form-control" id="inputNombreUsuario" placeholder="Contraseña">
                                <button id="buscarPorContrasena" type="button" class="btn btn-dark">Buscar</button>
                            </div>`)


});

$("#buscarPorContrasena").click(function (evento) {
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

    $("#btnVerUsuario").html() = "Ver Otro Usuario"; //Aplico el cambio
});



function cargarUsuario(evento) {
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
        cantUsuarios++; //Registro este usuario en la variable que cuenta la cant de usuarios ingresados.
    let nombreIngresado; let apellidoIngresado; let edadIngresada; let contrasenaIngresada;

    nombreIngresado = $("#inputNombreUsuario").val();
    apellidoIngresado = $("#inputApellidoUsuario").val();
    edadIngresada = $("#inputEdadUsuario").val();
    contrasenaIngresada = $("#inputContrasenaUsuario").val();

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
    localStorage.setItem('arrayUsuarios', JSON.stringify(arrayUsuarios));
    console.log(arrayUsuarios.find(usuario => usuario.idUsuario === cantUsuarios));
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