/*let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;

console.log("a=a+b= :".a);
a=11;
a+=b;
console.log("a+=b :"+a);
a++;
console.log("a++ :"+a);
a--;
console.log("a-- :"+a);

if ((a%2)==0)
    console.log("a es PAR");
else   
    console.log("a es IMPAR");
console.log(a+b+Number("5"));*/

// generar un array de 10 elementos: ejemplo nombre:"juan" nota:0 randomico entre 20-100. mostrar la nota mayor, menos y promedio

// Función para generar un número aleatorio entre un rango dado
/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar el array de estudiantes
  let estudiantes = [];
  for (let i = 0; i < 10; i++) {
      estudiantes.push({
          nombre: "Juan",
          nota: getRandomNumber(20, 100)
      });
  }
  
  // Mostrar el array de estudiantes en la consola
  console.log("Array de estudiantes:", estudiantes);
  
  // Encontrar la nota mayor, menor y calcular el promedio
  let notaMayor = estudiantes.reduce((max, estudiante) => estudiante.nota > max ? estudiante.nota : max, estudiantes[0].nota);
  let notaMenor = estudiantes.reduce((min, estudiante) => estudiante.nota < min ? estudiante.nota : min, estudiantes[0].nota);
  let sumaNotas = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0);
  let promedio = sumaNotas / estudiantes.length;
  
  // Mostrar los resultados en la consola
  console.log("Nota mayor:", notaMayor);
  console.log("Nota menor:", notaMenor);
  console.log("Promedio de notas:", promedio);
  */

  // Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Lista de nombres
  let nombres = ["Juan", "Maria", "Pedro", "Luisa", "Ana", "Carlos", "Laura", "Diego", "Sofia", "Miguel"];
  
  // Generar el array de estudiantes
  let estudiantes = [];
  for (let i = 0; i < 10; i++) {
      estudiantes.push({
          nombre: nombres[getRandomNumber(0, nombres.length - 1)],
          nota: getRandomNumber(20, 100)
      });
  }
  
  // Mostrar el array de estudiantes en la consola
  console.log("Array de estudiantes:", estudiantes);
  
  // Encontrar la nota mayor, menor y calcular el promedio
  let notaMayor = estudiantes.reduce((max, estudiante) => estudiante.nota > max ? estudiante.nota : max, estudiantes[0].nota);
  let notaMenor = estudiantes.reduce((min, estudiante) => estudiante.nota < min ? estudiante.nota : min, estudiantes[0].nota);
  let sumaNotas = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0);
  let promedio = sumaNotas / estudiantes.length;
  
  // Mostrar los resultados en la consola
  console.log("Nota mayor:", notaMayor);
  console.log("Nota menor:", notaMenor);
  console.log("Promedio de notas:", promedio);
  

  