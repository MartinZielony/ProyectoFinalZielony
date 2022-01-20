console.log("Página Iniciada");

//VARIABLES
let cantEdades; let sumaEdades = 0; let nuevaEdad; let promedioEdades; let cantUsuarios = 0;

//CLASES
class Persona {
    constructor(idUsuario, nombre, apellido, edad, DNI) {
        this.idUsuario = idUsuario;
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.DNI = DNI;
    }

    nombreCompleto() {
        this.nombre = this.nombre + " " + this.apellido;
    }
}

//ARRAYS
let arrayUsuarios = [];

//FUNCIONES


function pedirNumero(texto) {
    let numero = parseInt(prompt(texto))
    return numero;
}

function sumarEdad(nuevoDato) {
    sumaEdades = sumaEdades + nuevoDato;
    console.log("La suma de las edades por el momento es: " + sumaEdades);
}

function dividir(dato1, dato2, resultado) {
    resultado = dato1 / dato2;
    return resultado;
}

let texto = document.createElement("p"); //Creo un tag <p> en el documento para agregarle el texto con la información del usuario.
//Hola Luis! Cómo puedo hacer que este elemento <p> se agregue en un tag específico, en vez de al final del <body>?
document.getElementById("btnVerUsuario").addEventListener("click", function () {
    let usuarioBuscado = prompt("Ingrese el DNI del usuario cuya información desee ver: "); //Pido DNI para ubicar al objeto que se debe mostrar
    console.log("Se busca al usuario del DNI " + usuarioBuscado);
    let duplicarUsuario = JSON.stringify(arrayUsuarios.find(usuario => usuario.DNI == usuarioBuscado)) //Creo un nuevo objeto a partir del objeto encontrado, lo paso a string.
    console.log(duplicarUsuario);
    console.log("Creado el nuevo objeto que se usará para mostrar la información del usuario.");

    texto.innerHTML = duplicarUsuario; //Edito el <p> para que muestre el objeto duplicado
    document.body.appendChild(texto); //Aplico los cambios en el HTML
    console.log("Agregado al documento (O editado en el mismo) el elemento <p> para mostrar la información");

    let renombrarBoton = document.getElementById("btnVerUsuario"); //Ésto sólo va a hacer un cambio notable al primer uso de este botón, cambio el texto del botón para que invite al usuario a volver a usar el botón con un usuario distinto.
    renombrarBoton.innerHTML = "Ver Otro Usuario"; //Aplico el cambio
});

document.getElementById("btnReiniciar").addEventListener("click", function () {
    window.location.reload();
});

document.getElementById("btnAgregarUsuario").addEventListener("click", function () {
    cantUsuarios++; //Registro este usuario en la variable que cuenta la cant de usuarios ingresados.
    arrayUsuarios.push( //pusheo un nuevo objeto "Persona" para ser agregado a arrayUsuarios
        new Persona(
            cantUsuarios, //defino al idUsuario (primer dato de la clase) utilizando la cantidad de usuarios, si este es el primero su id será 1.
            prompt("Ingrese Su Nombre: "), //pido dato "nombre"
            prompt("Ingrese su Apellido: "), //pido dato "apellido"
            prompt("Ingrese su Edad, debe ser sólo el número: "), //pido dato "edad"
            prompt("Ingrese su DNI, debe ser sólo el número: ") //pido dato "DNI"
        )
    )

    console.log(arrayUsuarios.find(usuario => usuario.idUsuario === cantUsuarios));
});

function mostrarPromedio(resultadoDIV) {
    resultadoDIV = Math.round(resultadoDIV)
    alert("El promedio de las " + cantEdades + " edades ingresadas es: " + resultadoDIV);
}

document.getElementById("btnPromedioEdades").addEventListener("click", function () {
    cantEdades = pedirNumero("De cuántas personas se desea sacar el promedio de edad?");
    console.log("Se sacará el promedio de " + cantEdades + " edades.");
    for (let index = 1; index <= cantEdades; index++) {
        nuevaEdad = parseInt(prompt("Ingrese la edad de la persona nro " + index));
        console.log(nuevaEdad + " Ingresado.")
        sumarEdad(nuevaEdad);
    }
    mostrarPromedio(dividir(sumaEdades, cantEdades));
});