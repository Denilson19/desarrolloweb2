//compra a un supermercado
/*let carrito=[   "leche",1,
                "carme",2,
                "papa",3,
                "fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);*/

/*let item = {nombre:'leche',cantidad:1};
console.log("Item: "+item.nombre);
console.log("Cantidad: ",item.cantidad);

let carrito=[{nombre:'leche',cantidad:1},
             {nombre:'carne',cantidad:2},
             {nombre:'fideo',cantidad:1},
             {nombre:'papa',cantidad:3}];
*/
//imprimirlo con Etiquetas.
//Adiccionar un nuevo registro.

let item = {nombre: 'leche', cantida:2, precio:7.5};

console.log("item:"+item.nombre)






/*function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Intercambio
        }
      }
    }
    return array;
  }
  
//Funciones para ordenar un array con numeros
const array = [3, 1, 5, 2, 4];
console.log(bubbleSort(array)); // Salida: [1, 2, 3, 4, 5]

  
//Funciones para ordenar un array con estructura
const persona1 = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };
const persona2 = { nombre: 'María', edad: 30, ciudad: 'Barcelona' };
const persona3 = { nombre: 'Carlos', edad: 22, ciudad: 'Sevilla' };


const personas = [persona1, persona2, persona3];


console.log(personas[0].nombre); // Salida: Juan
console.log(personas[1].edad);   // Salida: 30
console.log(personas[2].ciudad); // Salida: Sevilla*/

// "Estructuras" (objetos)
/*const carrito1 = { nombre: 'Leche', cantidad: 1, precio: 7.5 };
const carrito2 = { nombre: 'Carne', cantidad: 2, precio: 30.5 };
const carrito3 = { nombre: 'Fideo', cantidad: 1, precio: 5.5 };
const carrito4 = { nombre: 'papa', cantidad: 3, precio: 20.5 };

const carrito = [carrito1, carrito2, carrito3, carrito4];

// Método de ordenamiento sin bucles
carrito.sort((a, b) => a.precio - b.precio);

console.log(carrito);


// Array de números desordenados
const numeros = [5, 3, 9, 1, 4];

// Ordenar los números sin modificarlos
const numerosOrdenados = numeros.slice().sort((a, b) => a - b);

console.log(numerosOrdenados); // Salida: [1, 3, 4, 5, 9]*/


let carrito = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito.push(item);

let carrito2 = [{ nombre: 'Leche', cantidad: 1, precio: 7.5 },
    { nombre: 'Carne', cantidad: 2, precio: 30.5},
    { nombre: 'Fideo', cantidad: 1, precio: 5.5},
    { nombre: 'Papa', cantidad: 3, precio: 20.5}];
item = { nombre: 'Arroz', cantidad: 2, precio: 30.5};
carrito2.push(item);
//Buscar funciones o procesos para ordenar un array
//Ordenar el array de carrito
//Ordenar un array lineal
/*let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
*/
console.log("IMPRESION ORDENADA POR PRECIO");
carrito2.sort((x,y)=>x.precio - y.precio);
console.log(carrito2);

console.log("IMPRESION ORDENADA POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);
