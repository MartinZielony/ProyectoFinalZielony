$( document ).ready(function() 
{
    console.log( "El DOM esta listo" );
});

$("body").prepend(`
    <nav>
        <h3>Proyecto Final - Juego de Quiz</h3>
        <button id="btnVerUsuario" type="button" class="btn btn-dark">Ver Usuario</button>
        <button id="btnComenzarJuego" type="button" class="btn btn-success">Comenzar Juego</button>
    </nav>
    <hr>
`);

$("body").append(`
<main id="contMain">
        <form id="formIngresoUsuario" class="formIngreso">
            <div class="form-group" id="formGroupNombre">
                <label>Nombre</label>
                <input type="text" class="form-control" id="inputNombreUsuario" placeholder="Ingrese su Nombre">
            </div>

            <div class="form-group" id="formGroupApellido">
                <label>Apellido</label>
                <input type="text" class="form-control" id="inputApellidoUsuario" placeholder="Ingrese su Apellido">
            </div>

            <div class="form-group" id="formGroupEdad">
                <label>Edad (Años)</label>
                <input type="number" class="form-control" id="inputEdadUsuario" placeholder="Ingrese su edad en Años">
            </div>

            <div class="form-group" id="formGroupContrasena">
                <label>Contraseña</label>
                <input type="password" class="form-control" id="inputContrasenaUsuario" placeholder="Ingrese su Contraseña">
            </div>
            <br>
            <button id="btnAgregarUsuario" type="button" class="btn btn-dark">Agregar Usuario</button>
            <span id="elementoADesvanecer">¡Hola!</span>
        </form>
    </main>
    `);

$("body").append(`
<footer>
        <hr>
        <h3>Curso de JScript - Comisión 24385</h3>
    </footer>
    `);

$("nav").hide(); 
$("nav").fadeIn();

$("main").hide();
$("main").fadeIn();

$("footer").hide();
$("footer").fadeIn("slow", function(){//Aparecen con FadeIn todos los elementos del HTML
    console.log("Aparecieron los elementos del Body")
});

$("#elementoADesvanecer").animate({marginLeft: '100px'}, "slow", function(){ //se aumenta el margen del span
    console.log("se aumentó el margen de elementoADesvanecer 100px.")});

$("#elementoADesvanecer").animate({marginLeft: '0px'}, "slow", //se vuelve a diminuir el margen del span
    console.log("Se devolvió el margen del span a 0px."));

$("#elementoADesvanecer").fadeOut("slow", function(){ //se desvanece el span
    console.log("Se desvanece el span.");

    $(".formIngreso").animate({height:'50vw'}) //se disminuye la altura del form
    .delay(2000) //se esperan 2seg
    .animate({height:'100%'}) //se vuelve a aumentar la altura del form.

    console.log("Se disminuyó y volvió a aumentar la altura del form.");
});









console.log("Página Iniciada");

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

let contMain = document.getElementById("contMain");
let texto = "";
let promptBusqueda;
let ingresoBusqueda;
let buscarPorContrasena;

promptBusqueda = document.createElement("label");
promptBusqueda.innerHTML = "<br> Ingrese la contraseña del usuario cuya información desee ver: ";

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

$("#btnVerUsuario").click(function(){
    contMain.removeChild(buscarPorContrasena);
    buscarPorContrasena.setAttribute("class", "btn btn-dark");
    contMain.appendChild(promptBusqueda);
    contMain.appendChild(ingresoBusqueda);
    contMain.appendChild(buscarPorContrasena);
});

$("#buscarPorContrasena").click(function(){
    let usuarioBuscado = document.getElementById("ingresoBusqueda").value;

    console.log("Se busca al usuario de la contraseña " + usuarioBuscado);
    let duplicarUsuario;
    let buscarArray = JSON.parse(localStorage.getItem('arrayUsuarios'));
    duplicarUsuario = buscarArray.find(usuario => usuario.contrasena == usuarioBuscado);
    
    delete duplicarUsuario.contrasena; //Se elimina el dato "contraseña", ya que sería redundante.
    
    //duplicarUsuario = JSON.stringify(duplicarUsuario); //Se convierte el nuevo objeto sin contraseña en string.
    
    console.log(duplicarUsuario);
    console.log("Creado el nuevo objeto que se usará para mostrar la información del usuario.");

    //texto = "<br>" + duplicarUsuario; //Edito el <p> para que muestre el objeto duplicado
    //$('#contMain').append("<p>" + texto + "</p>"); //Aplico los cambios en el HTML
    
    $("#contMain").append(`<br>
                        <div>
                            <h4>Id: ${duplicarUsuario.idUsuario}, Nombre: ${duplicarUsuario.nombre} ${duplicarUsuario.apellido}</h4>
                            <span>Edad: ${duplicarUsuario.edad} años</span>
                            <b>Puntaje Máximo: ${duplicarUsuario.puntajeMAX}</b>
                        </div>`)

    let renombrarBoton = document.getElementById("btnVerUsuario"); //Ésto sólo va a hacer un cambio notable al primer uso de este botón, cambio el texto del botón para que invite al usuario a volver a usar el botón con un usuario distinto.
    renombrarBoton.innerHTML = "Ver Otro Usuario"; //Aplico el cambio
});

let formIngresoUsuario = document.getElementById("formIngresoUsuario");

function cargarUsuario() {
    cantUsuarios++; //Registro este usuario en la variable que cuenta la cant de usuarios ingresados.
    let nombreIngresado; let apellidoIngresado; let edadIngresada; let contrasenaIngresada;

    nombreIngresado = document.getElementById("inputNombreUsuario").value;
    apellidoIngresado = document.getElementById("inputApellidoUsuario").value;
    edadIngresada = document.getElementById("inputEdadUsuario").value;
    contrasenaIngresada = document.getElementById("inputContrasenaUsuario").value;

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
    formIngresoUsuario.reset();
    localStorage.setItem('arrayUsuarios', JSON.stringify(arrayUsuarios));
    console.log(arrayUsuarios.find(usuario => usuario.idUsuario === cantUsuarios));
}

// EVENT LISTENERS PARA ENVIAR EL FORMULARIO CON TECLA ENTER
document.getElementById("inputNombreUsuario").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnAgregarUsuario").click();
    }
});

document.getElementById("inputApellidoUsuario").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnAgregarUsuario").click();
    }
});

document.getElementById("inputEdadUsuario").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnAgregarUsuario").click();
    }
});

document.getElementById("inputContrasenaUsuario").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnAgregarUsuario").click();
    }
});
// FIN DE EVENT LISTENERS PARA ENVIAR EL FORMULARIO CON TECLA ENTER

$("#btnAgregarUsuario").click(cargarUsuario);

function comenzarJuego() {
    window.location.href = "pages/escenaJuegoComenzado.html";
}

$("#btnComenzarJuego").click(comenzarJuego);