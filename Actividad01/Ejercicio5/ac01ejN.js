/*
Descripcion: Array de forma aleatoria que convierte el primer elemento del nombre y apellido en mayúscula y el resto en minúscula.
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-21
Cambios: NInguno
*/ 

// Función para combinar de forma aleatoria nombres y apellidos 
function combinarNombresYApellidos(nombres, apellidos) {
    // Función para formatear un nombre o apellido
    const formatearNombre = (nombre) => nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();

    // Generar todas las combinaciones de nombres y apellidos
    const combinaciones = nombres.flatMap(nombre => apellidos.map(apellido => `${formatearNombre(nombre)} ${formatearNombre(apellido)}`));

    // Mezclar aleatoriamente las combinaciones
    const combinacionesMezcladas = combinaciones.sort(() => Math.random() - 0.5);

    return combinacionesMezcladas;
}

// Array de nombres y apellidos
const nombres = ["juan", "pedro", "maria", "luis"];
const apellidos = ["perez", "gonzalez", "lopez", "rodriguez"];

// Obtener el array combinado y formateado
const nombresCompletosFormateados = combinarNombresYApellidos(nombres, apellidos);

// Imprimir los nombres completos formateados
console.log("Nombres completos formateados :");
console.log(nombresCompletosFormateados);
