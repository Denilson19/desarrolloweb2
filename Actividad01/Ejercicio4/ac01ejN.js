/*
Descripcion: Programa que pide una frase y cuenta las vocales
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-21
Cambios: NInguno
*/ 

// Función para solicitar una frase al usuario
function solicitarFrase() {
    return prompt("Por favor, ingresa una frase:");
}

// Función para contar la cantidad de veces que aparece la letra "o" 
function contarLetraO(frase) {
    const coincidencias = frase.match(/o/gi);
    return coincidencias ? coincidencias.length : 0;
}

// Función para encontrar y contar las vocales en una frase 
function contarVocales(frase) {
    const vocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    const coincidencias = frase.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.reduce((acc, vocal) => {
        const vocalLowerCase = vocal.toLowerCase();
        return {
            ...acc,
            [vocalLowerCase]: (acc[vocalLowerCase] || 0) + 1
        };
    }, vocales) : vocales;
}

// Función para imprimir los resultados
function imprimirResultados(frase, letraO, vocales) {
    console.log("La frase ingresada es: " + frase);
    console.log("Cantidad de veces que aparece la letra 'o': " + letraO);

    console.log("Las vocales que aparecen en la frase son:");
    Object.entries(vocales).forEach(([vocal, cantidad]) => {
        console.log(`${vocal}: ${cantidad}`);
    });
}

// Función principal
function main() {
    const frase = solicitarFrase();
    const letraO = contarLetraO(frase);
    const vocales = contarVocales(frase);
    imprimirResultados(frase, letraO, vocales);
}

// Llamar a la función principal
main();
