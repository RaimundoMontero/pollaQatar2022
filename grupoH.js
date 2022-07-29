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

const posicion = document.querySelector(".posicion");
const pais = document.querySelector(".pais");
const puntos = document.querySelector(".puntos");
const dif = document.querySelector(".dif");
const posicion1 = document.querySelector(".posicion1");
const pais1 = document.querySelector(".pais1");
const puntos1 = document.querySelector(".puntos1");
const dif1 = document.querySelector(".dif1");
const posicion2 = document.querySelector(".posicion2");
const pais2 = document.querySelector(".pais2");
const puntos2 = document.querySelector(".puntos2");
const dif2 = document.querySelector(".dif2");
const posicion3 = document.querySelector(".posicion3");
const pais3 = document.querySelector(".pais3");
const puntos3 = document.querySelector(".puntos3");
const dif3 = document.querySelector(".dif3");
const posicion4 = document.querySelector(".posicion4");
const pais4 = document.querySelector(".pais4");
const puntos4 = document.querySelector(".puntos4");
const dif4 = document.querySelector(".dif4");


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

document.addEventListener("input", escribirPuntajeEquipos)

//en esta tabla prototipo, los equipos son:
// equipo1 = Uruguay;
// equipo2 = Corea Del Sur;
// equipo3 = Portugal;
// equipo4 = Ghana;







function escribirGoles()
{
    //Goles a favor//
    const golesFavorEquipo1 = Number(goles1.value) + Number(goles8.value) + Number(goles12.value);
    const golesFavorEquipo2 = Number(goles2.value) + Number(goles5.value) + Number(goles9.value);
    const golesFavorEquipo3 = Number(goles3.value) + Number(goles7.value) + Number(goles10.value);
    const golesFavorEquipo4 = Number(goles4.value) + Number(goles6.value) + Number(goles11.value);

    //Goles en contra//
    const golesContraEquipo1 = Number(goles2.value) + Number(goles7.value) + Number(goles11.value);
    const golesContraEquipo2 = Number(goles1.value) + Number(goles6.value) + Number(goles10.value);
    const golesContraEquipo3 = Number(goles4.value) + Number(goles8.value) + Number(goles9.value);
    const golesContraEquipo4 = Number(goles3.value) + Number(goles5.value) + Number(goles12.value);

    //Diferencia de goles//
    const diferenciaGolesEquipo1 = golesFavorEquipo1 - golesContraEquipo1;
    const diferenciaGolesEquipo2 = golesFavorEquipo2 - golesContraEquipo2;
    const diferenciaGolesEquipo3 = golesFavorEquipo3 - golesContraEquipo3;
    const diferenciaGolesEquipo4 = golesFavorEquipo4 - golesContraEquipo4;


}

function escribirPuntajeEquipos() {

    // Calcular y escribir Puntaje Equipo 1// 

    // //partido 1 del equipo 1 //
    if (Number(goles1.value) > Number(goles2.value) && goles1.value != "" && goles2.value != "")
    {
        var partido1equipo1 = 3;
    }
    else if (Number(goles1.value) == Number(goles2.value) && goles1.value != "" && goles2.value != "")
    {
        var partido1equipo1 = 1;
    }
    else if (Number(goles1.value) < Number(goles2.value) && goles1.value != "" && goles2.value != "")
    {
        var partido1equipo1 = 0;
    }
    else {
        var partido1equipo1 = 0;
    }

    //partido 2 del equipo 1 //

    if (Number(goles8.value) > Number(goles7.value) && goles8.value != "" && goles7.value != "")
    {
        var partido2equipo1 = 3 ;
    }
    else if (Number(goles8.value) == Number(goles7.value) && goles8.value != "" && goles7.value != "")
    {
        var partido2equipo1 = 1;
    }
    else if (Number(goles8.value) < Number(goles7.value) && goles8.value != "" && goles7.value != "")
    {
        var partido2equipo1 = 0;
    }
    else {
        var partido2equipo1 = 0;
    }

    //partido 3 del equipo 1 //

    if (Number(goles12.value) > Number(goles11.value) && goles12.value != "" && goles11.value != "")
    {
        var partido3equipo1 = 3 ;
    }
    else if (Number(goles12.value) == Number(goles11.value) && goles12.value != "" && goles11.value != "")
    {
        var partido3equipo1 = 1;
    }
    else if (Number(goles12.value) < Number(goles11.value) && goles12.value != "" && goles11.value != "")
    {
        var partido3equipo1 = 0;
    }
    else {
        var partido3equipo1 = 0;
    }


// Calcular y escribir Puntaje Equipo 2// 


    //partido 1 del equipo 2 //
    if (Number(goles2.value) > Number(goles1.value) && goles1.value != "" && goles2.value != "")
    {
        var partido1equipo2 = 3;
    }
    else if (Number(goles2.value) == Number(goles1.value) && goles2.value != "" && goles1.value != "")
    {
        var partido1equipo2 = 1;
    }
    else if (Number(goles2.value) < Number(goles1.value) && goles1.value != "" && goles2.value != "")
    {
        var partido1equipo2 = 0;
    }
    else {
        var partido1equipo2 = 0;
    }

    //partido 2 del equipo 2 //

    if (Number(goles5.value) > Number(goles6.value) && goles5.value != "" && goles6.value != "")
    {
        var partido2equipo2 = 3 ;
    }
    else if (Number(goles5.value) == Number(goles6.value) && goles5.value != "" && goles6.value != "")
    {
        var partido2equipo2 = 1;
    }
    else if (Number(goles5.value) < Number(goles6.value) && goles5.value != "" && goles6.value != "")
    {
        var partido2equipo2 = 0;
    }
    else {
        var partido2equipo2 = 0;
    }

    //partido 3 del equipo 2 //

    if (Number(goles9.value) > Number(goles10.value) && goles9.value != "" && goles10.value != "")
    {
        var partido3equipo2 = 3 ;
    }
    else if (Number(goles9.value) == Number(goles10.value) && goles9.value != "" && goles10.value != "")
    {
        var partido3equipo2 = 1;
    }
    else if (Number(goles9.value) < Number(goles10.value) && goles9.value != "" && goles10.value != "")
    {
        var partido3equipo2 = 0;
    }
    else {
        var partido3equipo2 = 0;
    }

    // Calcular y escribir Puntaje Equipo 3//
    

        //partido 1 del equipo 3 //
        if (Number(goles3.value) > Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo3 = 3;
        }
        else if (Number(goles3.value) == Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo3 = 1;
        }
        else if (Number(goles3.value) < Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo3 = 0;
        }
        else {
            var partido1equipo3 = 0;
        }
    
        //partido 2 del equipo 3 //
    
        if (Number(goles7.value) > Number(goles8.value) && goles7.value != "" && goles8.value != "")
        {
            var partido2equipo3 = 3 ;
        }
        else if (Number(goles7.value) == Number(goles8.value) && goles7.value != "" && goles8.value != "")
        {
            var partido2equipo3 = 1;
        }
        else if (Number(goles7.value) < Number(goles8.value) && goles7.value != "" && goles8.value != "")
        {
            var partido2equipo3 = 0;
        }
        else {
            var partido2equipo3 = 0;
        }
    
        //partido 3 del equipo 3 //
    
        if (Number(goles9.value) < Number(goles10.value) && goles9.value != "" && goles10.value != "")
        {
            var partido3equipo3 = 3 ;
        }
        else if (Number(goles9.value) == Number(goles10.value) && goles9.value != "" && goles10.value != "")
        {
            var partido3equipo3 = 1;
        }
        else if (Number(goles9.value) > Number(goles10.value) && goles9.value != "" && goles10.value != "")
        {
            var partido3equipo3 = 0;
        }
        else {
            var partido3equipo3 = 0;
        }

           // Calcular y escribir Puntaje Equipo 4//
    

        //partido 1 del equipo 4 //
        if (Number(goles3.value) < Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo4 = 3;
        }
        else if (Number(goles3.value) == Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo4 = 1;
        }
        else if (Number(goles3.value) > Number(goles4.value) && goles3.value != "" && goles4.value != "")
        {
            var partido1equipo4 = 0;
        }
        else {
            var partido1equipo4 = 0;
        }
    
        //partido 2 del equipo 4 //
    
        if (Number(goles6.value) > Number(goles5.value) && goles6.value != "" && goles5.value != "")
        {
            var partido2equipo4 = 3 ;
        }
        else if (Number(goles6.value) == Number(goles5.value) && goles6.value != "" && goles5.value != "")
        {
            var partido2equipo4 = 1;
        }
        else if (Number(goles6.value) < Number(goles5.value) && goles6.value != "" && goles5.value != "")
        {
            var partido2equipo4 = 0;
        }
        else {
            var partido2equipo4 = 0;
        }
    
        //partido 3 del equipo 4 //
    
        if (Number(goles11.value) > Number(goles12.value) && goles11.value != "" && goles12.value != "")
        {
            var partido3equipo4 = 3 ;
        }
        else if (Number(goles11.value) == Number(goles12.value) && goles11.value != "" && goles12.value != "")
        {
            var partido3equipo4 = 1;
        }
        else if (Number(goles11.value) < Number(goles12.value) && goles11.value != "" && goles12.value != "")
        {
            var partido3equipo4 = 0;
        }
        else {
            var partido3equipo4 = 0;
        }

    //Goles a favor//
    var golesFavorE1 = Number(goles1.value) + Number(goles8.value) + Number(goles12.value);
    var golesFavorE2 = Number(goles2.value) + Number(goles5.value) + Number(goles9.value);
    var golesFavorE3 = Number(goles3.value) + Number(goles7.value) + Number(goles10.value);
    var golesFavorE4 = Number(goles4.value) + Number(goles6.value) + Number(goles11.value);

    //Goles en contra//
    var golesContraE1 = Number(goles2.value) + Number(goles7.value) + Number(goles11.value);
    var golesContraE2 = Number(goles1.value) + Number(goles6.value) + Number(goles10.value);
    var golesContraE3 = Number(goles4.value) + Number(goles8.value) + Number(goles9.value);
    var golesContraE4 = Number(goles3.value) + Number(goles5.value) + Number(goles12.value);

    //Diferencia de goles//
    var diferenciaGolesE1 = golesFavorE1 - golesContraE1;
    var diferenciaGolesE2 = golesFavorE2 - golesContraE2;
    var diferenciaGolesE3 = golesFavorE3 - golesContraE3;
    var diferenciaGolesE4 = golesFavorE4 - golesContraE4;

    var puntajeTotalE1 = partido1equipo1 + partido2equipo1 + partido3equipo1;
    var puntajeTotalE2 = partido1equipo2 + partido2equipo2 + partido3equipo2;
    var puntajeTotalE3 = partido1equipo3 + partido2equipo3 + partido3equipo3;
    var puntajeTotalE4 = partido1equipo4 + partido2equipo4 + partido3equipo4;
   
    var posicionEquipo1 = (puntajeTotalE1) * 10000 + (golesFavorE1) * 100 + diferenciaGolesE1 + 0.3;
    var posicionEquipo2 = (puntajeTotalE2) * 10000 + (golesFavorE2) * 100 + diferenciaGolesE2 + 0.2;
    var posicionEquipo3 = (puntajeTotalE3) * 10000 + (golesFavorE3) * 100 + diferenciaGolesE3 + 0.1;
    var posicionEquipo4 = (puntajeTotalE4) * 10000 + (golesFavorE4) * 100 + diferenciaGolesE4;


console.log("Posición Uruguay = " + posicionEquipo1);
console.log("Posición Corea = " + posicionEquipo2);
console.log("Posición Portugal = " + posicionEquipo3);
console.log("Posición Ghana = " + posicionEquipo4);


// CON ARRAY DESCENDENTE //


const posiciones = [posicionEquipo1, posicionEquipo2, posicionEquipo3, posicionEquipo4];

posiciones.sort(function(a, b)
{return b - a}
);

if (posicionEquipo1 == posiciones[0]) {
    pais1.innerText = "Uruguay";
    puntos1.innerText = puntajeTotalE1;
    dif1.innerText = diferenciaGolesE1;
}
else if (posicionEquipo2 == posiciones[0]) {
    pais1.innerText = "Corea Del Sur";
    puntos1.innerText = puntajeTotalE2;
    dif1.innerText = diferenciaGolesE2;
}
else if (posicionEquipo3 == posiciones[0]) {
    pais1.innerText = "Portugal";
    puntos1.innerText = puntajeTotalE3;
    dif1.innerText = diferenciaGolesE3;
}
else if (posicionEquipo4 == posiciones[0]) {
    pais1.innerText = "Ghana";
    puntos1.innerText = puntajeTotalE4;
    dif1.innerText = diferenciaGolesE4;
}
else 
{
    "Hay alguna falla"
};

if (posicionEquipo1 == posiciones[1]) {
    pais2.innerText = "Uruguay";
    puntos2.innerText = puntajeTotalE1;
    dif2.innerText = diferenciaGolesE1;
}
else if (posicionEquipo2 == posiciones[1]) {
    pais2.innerText = "Corea Del Sur";
    puntos2.innerText = puntajeTotalE2;
    dif2.innerText = diferenciaGolesE2;
}
else if (posicionEquipo3 == posiciones[1]) {
    pais2.innerText = "Portugal";
    puntos2.innerText = puntajeTotalE3;
    dif2.innerText = diferenciaGolesE3;
}
else if (posicionEquipo4 == posiciones[1]) {
    pais2.innerText = "Ghana";
    puntos2.innerText = puntajeTotalE4;
    dif2.innerText = diferenciaGolesE4;
}
else 
{
    "Hay alguna falla"
};

if (posicionEquipo1 == posiciones[2]) {
    pais3.innerText = "Uruguay";
    puntos3.innerText = puntajeTotalE1;
    dif3.innerText = diferenciaGolesE1;
}
else if (posicionEquipo2 == posiciones[2]) {
    pais3.innerText = "Corea Del Sur";
    puntos3.innerText = puntajeTotalE2;
    dif3.innerText = diferenciaGolesE2;
}
else if (posicionEquipo3 == posiciones[2]) {
    pais3.innerText = "Portugal";
    puntos3.innerText = puntajeTotalE3;
    dif3.innerText = diferenciaGolesE3;
}
else if (posicionEquipo4 == posiciones[2]) {
    pais3.innerText = "Ghana";
    puntos3.innerText = puntajeTotalE4;
    dif3.innerText = diferenciaGolesE4;
}
else 
{
    "Hay alguna falla"
};

if (posicionEquipo1 == posiciones[3]) {
    pais4.innerText = "Uruguay";
    puntos4.innerText = puntajeTotalE1;
    dif4.innerText = diferenciaGolesE1;
}
else if (posicionEquipo2 == posiciones[3]) {
    pais4.innerText = "Corea Del Sur";
    puntos4.innerText = puntajeTotalE2;
    dif4.innerText = diferenciaGolesE2;
}
else if (posicionEquipo3 == posiciones[3]) {
    pais4.innerText = "Portugal";
    puntos4.innerText = puntajeTotalE3;
    dif4.innerText = diferenciaGolesE3;
}
else if (posicionEquipo4 == posiciones[3]) {
    pais4.innerText = "Ghana";
    puntos4.innerText = puntajeTotalE4;
    dif4.innerText = diferenciaGolesE4;
}
else 
{
    "Hay alguna falla"
};
}


// pais1.innerText = "";
// pais2.innerText = "";
// pais3.innerText = "";
// pais4.innerText = "";

posicion1.innerText = "1";
posicion2.innerText = "2";
posicion3.innerText = "3";
posicion4.innerText = "4";
