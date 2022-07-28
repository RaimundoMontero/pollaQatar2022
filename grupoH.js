const goles1 = document.querySelector(".boton_goles1");
const goles2 = document.querySelector(".boton_goles2");
const goles3 = document.querySelector(".boton_goles3");
const goles4 = document.querySelector(".boton_goles4");
const goles5 = document.querySelector(".boton_goles5");
const goles6 = document.querySelector(".boton_goles6");
const goles7 = document.querySelector(".boton_goles7");
const goles8 = document.querySelector(".boton_goles8");
const goles9 = document.querySelector(".boton_goles9");
const goles10 = document.querySelector(".boton_goles10");
const goles11= document.querySelector(".boton_goles11");
const goles12 = document.querySelector(".boton_goles12");

const pais1 = document.querySelector(".pais1");
const pais2 = document.querySelector(".pais2");

goles1.addEventListener("input", escribirGoles);
goles2.addEventListener("input", escribirGoles);
goles3.addEventListener("input", escribirGoles);
goles4.addEventListener("input", escribirGoles);
goles5.addEventListener("input", escribirGoles);
goles6.addEventListener("input", escribirGoles);
goles7.addEventListener("input", escribirGoles);
goles8.addEventListener("input", escribirGoles);
goles9.addEventListener("input", escribirGoles);
goles10.addEventListener("input", escribirGoles);
goles11.addEventListener("input", escribirGoles);
goles12.addEventListener("input", escribirGoles);





//en esta tabla prototipo, los equipos son:
// equipo1 = Uruguay;
// equipo2 = Corea Del Sur;
// equipo3 = Portugal;
// equipo4 = Ghana;


//Goles a favor//
const golesFavorEquipo1 = Number(goles1.value) + Number(goles8.value) + Number(goles12.value);
const golesFavorEquipo2 = Number(goles2.value) + Number(goles5.value) + Number(goles9.value);
const golesFavorEquipo3 = Number(goles3.value) + Number(goles7.value) + Number(goles10.value);
const golesFavorEquipo4 = Number(goles4.value) + Number(goles6.value) + Number(goles11.value);

//Diferencia de goles//
const diferenciaGolesEquipo1 = golesFavorEquipo1 - Number(goles2.value) + Number(goles7.value) + Number(goles11.value);
const diferenciaGolesEquipo2 = golesFavorEquipo2 - Number(goles1.value) + Number(goles6.value) + Number(goles10.value);
const diferenciaGolesEquipo3 = golesFavorEquipo3 - Number(goles4.value) + Number(goles8.value) + Number(goles9.value);
const diferenciaGolesEquipo4 = golesFavorEquipo4 - Number(goles3.value) + Number(goles5.value) + Number(goles12.value);

//puntos equipo 1//

let puntosEquipo1A = 1;
let puntosEquipo1B = 1;
let puntosEquipo1C = 1;

function escribirGoles()
{
    let puntosEquipoUno = puntosEquipo1A + puntosEquipo1B + puntosEquipo1C;
    let golesEquipo1 = Number(goles1.value) + Number(goles8.value) + Number(goles12.value);
    pais1.innerText = golesEquipo1;
    pais2.innerText = puntosEquipoUno;
    
    if(Number(goles1.value) > Number(goles2.value)) 
    {
        puntosEquipo1A = 100;
    } else if(Number(goles1.value) == Number(goles2.value))
    {
        puntosEquipo1A = 1;
    } else 
    {
        puntosEquipo1A = 0;
    }

    if(Number(goles8.value) > Number(goles7.value)) 
    {
        puntosEquipo1B = 3;
    } else if(Number(goles8.value) == Number(goles7.value))
    {
        puntosEquipo1B = 1;
    } else 
    {
        puntosEquipo1B = 0;
    }

    if(Number(goles12.value) > Number(goles11.value)) 
    {
        puntosEquipo1C = 3;
    } else if(Number(goles12.value) == Number(goles11.value))
    {
        puntosEquipo1C = 1;
    } else 
    {
        puntosEquipo1C = 0;
    }
}


