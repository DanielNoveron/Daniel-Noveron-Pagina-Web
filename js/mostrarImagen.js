'use strict'

let capaNegra1 = document.querySelector(".capaNegra"),
    ventanaMostrarImagen = document.querySelector(".ventanaMostrarImagen"),
    checkVentanaImagen = document.querySelector("#inputCheckVentanaImagen"),
    imagenes = document.querySelectorAll("#img"),
    botonCerrarVentana = document.querySelector(".iconoCerrarVentana"),
    numeroImagen = document.querySelector(".numeroImagen"),
    imagenMostrada = document.querySelector(".imagenMostrada"),
    htmlC = document.querySelector(".html");

let carpeta = document.querySelector("#carpetaImagenes");

let posicionImagenSeleccionada = 1;


for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function () {


        //Activamos el check de la ventana para mostrar la imagen
        checkVentanaImagen.checked = true;

        //Asignamos la posición de la imagen que se seleccionó
        posicionImagenSeleccionada = i;
        numeroImagen.value = posicionImagenSeleccionada + 1;


        //Activamos  la capa negra
        capaNegra1.style.display = "block";

        let posicionScrollY = window.scrollY;
        htmlC.style.overflow = "hidden";

        capaNegra1.style.marginTop = posicionScrollY + "px"


        //Aparecemos la ventana para mostrar la imagen
        ventanaMostrarImagen.style.opacity = "1";
        ventanaMostrarImagen.style.transition = "all 1s";
        ventanaMostrarImagen.style.zIndex = "3";
        ventanaMostrarImagen.style.marginTop = posicionScrollY + "px";

        validarImagenesEspeciales(i);


        let ruta = "../img/" + carpeta.value + "/" + posicionImagenSeleccionada + ".png";

        imagenMostrada.setAttribute('src', ruta);


    });
}

botonCerrarVentana.addEventListener("click", function () {
    //Desactivamos el check de la ventana para mostrar la imagen
    checkVentanaImagen.checked = false;

    //Desactivamos la capa negra
    capaNegra1.style.display = "none";

    htmlC.style.overflow = "visible";

    //Desaparecemos la ventana para mostrar la imagen
    ventanaMostrarImagen.style.opacity = "0";
    ventanaMostrarImagen.style.zIndex = "-1";
});


let btnRegresar = document.querySelector(".regresar"),
    btnSiguiente = document.querySelector(".siguientee"),
    btnPantallaCompleta = document.querySelector(".pantallaCompleta");

//Eventos para retroceder una imagen
btnRegresar.addEventListener('click', function () {

    if (posicionImagenSeleccionada === 0) {
        posicionImagenSeleccionada = imagenes.length;
    }

    validarImagenesEspeciales(posicionImagenSeleccionada);

    posicionImagenSeleccionada = posicionImagenSeleccionada - 1;

    let ruta = "../img/" + carpeta.value + "/" + posicionImagenSeleccionada + ".png";

    imagenMostrada.setAttribute('src', ruta);


    numeroImagen.value = posicionImagenSeleccionada + 1;
})

//Eventos para ir a la siguiente imagen
btnSiguiente.addEventListener('click', function () {

    if (posicionImagenSeleccionada === imagenes.length - 1) {
        posicionImagenSeleccionada = -1;
    }

    validarImagenesEspeciales(posicionImagenSeleccionada);

    posicionImagenSeleccionada = posicionImagenSeleccionada + 1;

    let ruta = "../img/" + carpeta.value + "/" + posicionImagenSeleccionada + ".png";

    imagenMostrada.setAttribute('src', ruta);

    numeroImagen.value = posicionImagenSeleccionada + 1;
})

function validarImagenesEspeciales(index) {
    if (carpeta.value === "CVC") {
        if (index == 3 || index == 4) {
            imagenMostrada.style.width = "100% !important";

        }
    }
}


btnPantallaCompleta.addEventListener('click', function () {
    getFullscreen(imagenes[posicionImagenSeleccionada]);
});

/*
imagenMostrada.addEventListener('mousemove', function(e){

    let anchura = imagenMostrada.offsetWidth;
    let altura = imagenMostrada.offsetHeight;


    let coordenadaMouseX = e.offsetX;
    let coordenadaMouseY = e.offsetY;

    let posicionDeFondoImgX = (coordenadaMouseX / anchura * 100);
    let posicionDeFondoImgY = (coordenadaMouseY / altura * 100);


    imagenMostrada.style.backgroundPosition = `${posicionDeFondoImgX}% ${posicionDeFondoImgY}%`;
});

imagenMostrada.addEventListener('mouseleave', function(){
    imagenMostrada.style.backgroundPosition = "center";
});
*/
function getFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}