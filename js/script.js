console.log("Página Iniciada");

//VARIABLES
let cantEdades; let sumaEdades = 0; let nuevaEdad; let promedioEdades; let cantUsuarios = 0;
console.log("Variables definidas.");

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

document.getElementById("btnVerUsuarios").addEventListener("click", function(){
    let usuarioBuscado = prompt("Ingrese el DNI del usuario cuya información desee ver: ");
    console.log("Se busca al usuario del DNI " + usuarioBuscado);
    let duplicarUsuario = JSON.stringify(arrayUsuarios.find(usuario => usuario.DNI == usuarioBuscado))
    console.log(JSON.stringify(arrayUsuarios.find(usuario => usuario.DNI === usuarioBuscado)));
    alert(JSON.stringify(arrayUsuarios.find(usuario => usuario.DNI === usuarioBuscado)));
});

document.getElementById("btnReiniciar").addEventListener("click", function(){
    window.location.reload();
});

document.getElementById("btnAgregarUsuario").addEventListener("click", function(){
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

document.getElementById("btnPromedioEdades").addEventListener("click", function() {
    cantEdades = pedirNumero("De cuántas personas se desea sacar el promedio de edad?");
    console.log("Se sacará el promedio de " + cantEdades + " edades.");
    for (let index = 1; index <= cantEdades; index++) {
        nuevaEdad = parseInt(prompt("Ingrese la edad de la persona nro " + index));
        console.log(nuevaEdad + " Ingresado.")
        sumarEdad(nuevaEdad);
    }
    mostrarPromedio(dividir(sumaEdades, cantEdades));
});