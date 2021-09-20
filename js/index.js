'use strict'
//https://youtu.be/POLOvApBG4M
//https://youtu.be/u-NIl0Jx2xU

let textos = document.querySelectorAll('.textM'),
    opciones = document.querySelectorAll('.option'),
    enlaces = document.querySelectorAll('.link'),
    menu = document.querySelector(".menu"),
    iconosHerramientas = document.querySelectorAll('.icon'),
    html = document.querySelector(".html"),
    ulOptions = document.querySelector(".menu-ul");

                        //Java     Javascript  Phyton     PHP
let colores = new Array('#F45A3C','#FFEF57',/*'#3773A6',*/ '#777BB3',
                        //Spring   NodeJS          Django      Laravel   JQuery    
                        '#53BB32', /*'#2CAB78','#8FC740', '#F24F45'*/ '#0868AB',
                        //HTML     CSS          Bootstrap
                        '#E44D26', '#0170BA', '#7612F8');
let iconos = iconosHerramientas;

//Variable que determinará la posición en la que se encuentra el usuario dentro del menu responsive
let posicionMenu = 1;

$(document).ready(function(){
    for(let i=0; i<iconosHerramientas.length; i++){
        iconos[i].style.color = colores[i];
    }
});

for(let j=0; j<opciones.length; j++){
   opciones[j].addEventListener('mouseover',  function(){
       textos[j].classList.add('mostrarEtiqueta');
   });

   opciones[j].addEventListener('mouseout',  function(){
    textos[j].classList.remove('mostrarEtiqueta');
});
   }

   let checkCapaNegra = document.getElementById("checkCapaNegra"),
       capaNegra = document.querySelector(".capaNegra"),
       btnMenu = document.querySelector(".btn-menuResponsive");

       let coordenadaDelBotón = btnMenu.getBoundingClientRect();
   let iconArrow = document.querySelector(".fas");

    checkCapaNegra.addEventListener('change', function(){

        let positionScrollY = window.scrollY;
 
        if(checkCapaNegra.checked){
            capaNegra.style.display = "block";
            capaNegra.style.marginTop = positionScrollY + "px";
           
            

            //$(html).scrollTop(coordenadaDelBotón.top);
            for(let i=0; i<opciones.length; i++){
                if(i != 1){
                    opciones[i].classList.add("optionHidden");
                    textos[i].classList.remove("textoEnMenuResponsive");
                }else{
                    textos[i].classList.add("textoEnMenuResponsive");

                }
            }

           btnMenu.classList.add("btnActive");
           menu.classList.add("menuResposiveModern");
            //console.log("coordenadas boton: " + coordenadaDelBotón.top);
            //console.log("posicion del scroll:" + positionScrollY);
            html.style.overflow = "hidden";
            ulOptions.classList.add("optionsOnRows");

        }else{
            capaNegra.style.display = "none";
            btnMenu.classList.remove("btnActive");
            html.style.overflow = "visible";
            menu.classList.remove("menuResposiveModern");
            ulOptions.classList.remove("optionsOnRows");
        }
    });


let anterior = document.querySelector(".anterior"),
    siguiente = document.querySelector(".siguiente");

anterior.addEventListener('click', function(){
    
    posicionMenu = posicionMenu - 1;

    //Si llega a la ultima opcion, se va a la ultima para seguir recorriendo
    //Ejemplo:  3,2,1,0,3,2,1,0....
    if(posicionMenu < 0){
        posicionMenu = opciones.length - 1;
    }

    //Ocultamos las opciones que no están en la posición actual
    for(let i=0; i<opciones.length; i++){
        if(posicionMenu != i ){
            opciones[i].style.display = "none";
            textos[i].classList.remove("textoEnMenuResponsive");
        }else{ 
            opciones[i].style.display = "grid";
            textos[i].classList.add("textoEnMenuResponsive");
        }
    }

});


siguiente.addEventListener('click', function(){
   
    posicionMenu = posicionMenu + 1;

    //Si llega a la ultima opcion, se va a la ultima para seguir recorriendo
    //Ejemplo:  3,2,1,0,3,2,1,0....
    if(posicionMenu > 5){
        posicionMenu = 0;
    }

    //Ocultamos las opciones que no están en la posición actual
    for(let i=0; i<opciones.length; i++){
        if(posicionMenu != i ){
            opciones[i].style.display = "none";
            textos[i].classList.remove("textoEnMenuResponsive");
        }else{ 
            opciones[i].style.display = "grid";
            textos[i].classList.add("textoEnMenuResponsive");
        }
    }
});
   


      





