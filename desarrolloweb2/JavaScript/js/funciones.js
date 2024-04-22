const NELEMENTOS=10;
// Arreglo de nombres
nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Ana', 'Pedro', 'Sofía', 'Diego', 'Elena', 'Luis', 'Alejandro', 'Andrea', 'Javier', 'Paula', 'Lucas', 'Claudia', 'Miguel', 'Valentina', 'Ricardo', 'Isabella'];

// Arreglo de apellidos
apellidos = ['Gómez', 'Martínez', 'Pérez', 'López', 'González', 'Rodríguez', 'Fernández', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Díaz', 'Alonso', 'Muñoz', 'Castro', 'Ruiz', 'Jiménez', 'Hernández', 'Gutiérrez', 'Flores'];

let nomape=[];
function generarNomApe(){
    let nomal, apeal;
    for(let i=0;i<NELEMENTOS; i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length-1)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+" "+apeal);
    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona+ " \n");
    });
}
generarNomApe();
imprimir();