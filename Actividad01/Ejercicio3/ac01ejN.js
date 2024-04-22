/*
Descripcion: Programa para imprimir N numeros primos generados de forma aleatorio y cargado en un array que sean menores al 110
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-21
Cambios: NInguno
*/ 

// Función para generar un número primo aleatorio menor que 110
function generarNumeroPrimo() {
    const esPrimo = (numero) => {
        if (numero <= 1) return false;
        if (numero <= 3) return true;
        if (numero % 2 === 0 || numero % 3 === 0) return false;
        const limite = Math.sqrt(numero);
        return !Array.from({ length: Math.floor(limite) - 1 }).some((_, i) => numero % (i * 2 + 3) === 0);
    };

    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 110) + 1;
    } while (!esPrimo(numeroAleatorio));

    return numeroAleatorio;
}

// Función para generar N números primos aleatorios menores que 110
function generarNumerosPrimosAleatorios(N) {
    return Array.from({ length: N }, () => generarNumeroPrimo());
}

// Función para imprimir los números primos en un array
function imprimirNumerosPrimos(array) {
    console.log("Números primos generados:");
    array.forEach(numero => console.log(numero));
}

// Definir la cantidad de números primos a generar
const cantidadNumerosPrimos = 10;

// Generar y almacenar los números primos en un array
const numerosPrimosGenerados = generarNumerosPrimosAleatorios(cantidadNumerosPrimos);

// Imprimir los números primos generados
imprimirNumerosPrimos(numerosPrimosGenerados);