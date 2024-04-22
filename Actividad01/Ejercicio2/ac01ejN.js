/*
Descripcion: Programa donde nos solicite un usuario y contraseña, 
validar la contraseña con “D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-15
Cambios: NInguno
*/ 

// Función para solicitar usuario y contraseña
function solicitarCredenciales() {
    // Solicitar usuario y contraseña mediante prompts
    const usuario = prompt("Por favor ingresa tu nombre de usuario:");
    const contrasena = prompt("Por favor ingresa tu contraseña:");

    // Llamar a la función de validación con los datos ingresados
    validarCredenciales(usuario, contrasena);
}

// Función para validar las credenciales
function validarCredenciales(usuario, contrasena) {
    // Validar si el usuario es uno de los nombres especificados y si la contraseña es correcta
    if ((usuario === "juan" || usuario === "pedro" || usuario === "maria" || usuario === "raul") && contrasena === "D153n0W3b2") {
        console.log("¡Bienvenido, " + usuario + "! Has ingresado correctamente.");
    } else {
        console.log("Credenciales incorrectas. Por favor intenta nuevamente.");
    }
}

// Llamar a la función para solicitar usuario y contraseña
solicitarCredenciales();
