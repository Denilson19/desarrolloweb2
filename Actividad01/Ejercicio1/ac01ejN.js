/*
Descripcion: Programa donde nos de la bien venida y nos indique en que navegador estamos ejecutando.
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-15
Cambios: NInguno
*/ 

// Función para obtener el nombre del navegador
function obtenerNavegador() {
    const userAgent = navigator.userAgent;
    let navegador;

    // Verificar si el navegador es Chrome
    if (userAgent.indexOf("Chrome") > -1) {
        navegador = "Google Chrome";
    }
    // Verificar si el navegador es Firefox
    else if (userAgent.indexOf("Firefox") > -1) {
        navegador = "Mozilla Firefox";
    }
    // Verificar si el navegador es Safari
    else if (userAgent.indexOf("Safari") > -1) {
        navegador = "Safari";
    }
    // Verificar si el navegador es Edge
    else if (userAgent.indexOf("Edg") > -1) {
        navegador = "Microsoft Edge";
    }
    // Verificar si el navegador es Internet Explorer
    else if (userAgent.indexOf("Trident") > -1) {
        navegador = "Internet Explorer";
    }
    // Si no se reconoce el navegador, mostrar un mensaje genérico
    else {
        navegador = "un navegador desconocido";
    }

    return navegador;
}

// Función para mostrar la bienvenida y el navegador
function mostrarBienvenida() {
    const navegador = obtenerNavegador();
    console.log("¡Bienvenido! Estás utilizando el navegador " + navegador + ".");
}

// Llamar a la función para mostrar la bienvenida y el navegador
mostrarBienvenida();
