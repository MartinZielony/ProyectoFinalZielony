const URLJSONHP = "../json/characters.json" 

$("body").prepend('<button id="btn1" class="btn btn-warning">JSON</button>');

$("#btn1").click(() => {
    $.getJSON(URLJSONHP, function(respuesta, estado){
        console.log(estado);
        if(estado === "success") {
            let datosRecibidos = respuesta;
            for (const dato of datosRecibidos) {
                $("body").append(`<div>
                                    <h3>${dato.name}</h3>
                                    <span>${dato.gender} ${dato.species}</span> <br>
                                    <span>${dato.house}, nacido ${dato.dateOfBirth}</span>
                                </div>`)
            }
        }
        else {console.log("Hubo un error. El estado no es success")}
    })
})