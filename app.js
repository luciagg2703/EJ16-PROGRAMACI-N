
console.log("Javascript en marcha.");
console.log("INICIO");



window.addEventListener("load", inicioPrograma);

function inicioPrograma() {
    document.getElementById("boton").addEventListener("click", leerDatos);
}


function leerDatos() {

    var num = document.getElementById("numFiguras").value;

    if (num > 0 && num <= 100) {
        inicio(num);
    } else {
        alert("Un número entre 1 y 100");
    }
}


function inicio(numFiguras) {

    var i = 0;

    while (i < numFiguras) {
        dibujaFiguraAleatoria();
        i = i + 1;
    }
}


function dibujaFiguraAleatoria() {

    var rectangulo = document.createElement("div");
    rectangulo.className = "figura";

    asignarPosicion(rectangulo);
    asignarDimensiones(rectangulo);
    asignarGrosor(rectangulo);
    asignarColor(rectangulo);

    document.getElementById("cuadrados").appendChild(rectangulo);
}


function asignarPosicion(elem) {

    var x = numeroAleatorio(0, window.innerWidth - 100);
    var y = numeroAleatorio(0, window.innerHeight - 100);

    elem.style.left = x + "px";
    elem.style.top = y + "px";
}


function asignarDimensiones(elem) {

    var ancho = numeroAleatorio(20, 100);
    var alto = numeroAleatorio(20, 100);

    elem.style.width = ancho + "px";
    elem.style.height = alto + "px";
}


function asignarGrosor(elem) {

    var grosor = numeroAleatorio(1, 10);
    elem.style.borderWidth = grosor + "px";
}


function asignarColor(elem) {

    var r = numeroAleatorio(0, 255);
    var g = numeroAleatorio(0, 255);
    var b = numeroAleatorio(0, 255);

    elem.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    var r2 = numeroAleatorio(0, 255);
    var g2 = numeroAleatorio(0, 255);
    var b2 = numeroAleatorio(0, 255);

    elem.style.borderColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
}


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}













