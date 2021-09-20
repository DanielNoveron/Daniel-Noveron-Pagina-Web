'use strict'

let targetasProyecto = document.querySelectorAll(".targetaProyecto"),
    nombresProyecto = document.querySelectorAll(".nombreProyecto"),
    botonesDetalle = document.querySelectorAll(".btn-detalle");


/**
 * Metodo que permitirá cambiar de color las letras de las targetas, 
 * es decir el nombre del proyecto al hacer el evento mouseover
 */
for(let i=0; i<targetasProyecto.length; i++){
    targetasProyecto[i].addEventListener('mouseover', function(){
        nombresProyecto[i].style.color = "rgb(2, 129, 138)";
        botonesDetalle[i].classList.add("aparecerBoton");
    })

    targetasProyecto[i].addEventListener('mouseout', function(){
        nombresProyecto[i].style.color = "initial";
        botonesDetalle[i].classList.remove("aparecerBoton");
    })
}