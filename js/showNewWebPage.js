
var capNegra = document.querySelector(".capaNegra"),
    divWindowNeeWebPage = document.querySelector(".div-window-visit"),
    iconCloseWindowNewWEbPage = document.querySelector(".icon-close-window-visit");

var htmlWP = document.getElementsByTagName("html")[0];

window.addEventListener('load', () => {
    let posicionActualScroll = window.scrollY;

    capNegra.style.display = "block";
    capNegra.style.marginTop =  posicionActualScroll+"px";
    divWindowNeeWebPage.classList.toggle("show-transition-window-visit");
    divWindowNeeWebPage.style.marginTop =  posicionActualScroll+"px";
    htmlWP.style.overflowY = "hidden";
});

iconCloseWindowNewWEbPage.addEventListener('click', () => {
    capNegra.style.display = "none";
    divWindowNeeWebPage.classList.toggle("show-transition-window-visit");
    htmlWP.style.overflowY = "visible";
});
