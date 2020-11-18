/// Ejemplo 4.1
// console.log("///////// Ejemplo 4.1 ///////////");

// let suma = 0;
// let contador = 1;
// // let valor = 20;
// while (contador <= 10) {
//   let valor = +prompt(`Ingrese el valor que desea sumar`);
//   suma = suma + valor;
//   contador++;
// }

// console.log(`La suma de los valores ingresados es: ${suma}`);

// console.log("///////// Ejemplo 4.3 ///////////");

// let suma = 0;
// for (let i = 0; i < 10; i++) {
//   let valor = +prompt("Ingrese los numeros a sumar: ");
//   suma += valor;
// }
// console.log(`La suma de los numeros ingresados es: ${suma}`);

// console.log("///////// Ejemplo 4.4  (ciclo while) ///////////");
// let suma = 0;
// let cantidad = +prompt("Ingrese el numero de alumnos");
// let i = 0;
// while (i < cantidad) {
//   let edad = +prompt(`Ingrese la edad del alumno ${i}`);
//   suma += edad;
//   i++;
// }
// console.log(`La suma total de los ${i} alumnos es: ${suma}`);
// let promedio = suma / cantidad;
// console.log(`El promedio es: ${promedio}`);

// console.log("///////// Ejemplo 4.4  (ciclo for) ///////////");
// let suma = 0;
// let cantidad = +prompt("Ingrese la cantidad de alumnos: ");
// for (let i = 1; i <= cantidad; i++) {
//   let edad = +prompt(`Ingrese la edad del alumno ${i}:`);
//   suma += edad;
// }
// let promedio = suma / cantidad;
// console.log(`El promedio de edades es: ${promedio}`);

console.log("///////// Ejemplo 4.4  (ciclo for) ///////////");
let suma = 0;
var entrada = +prompt("Ingrese estatura: ");
contador = 0;
while (entrada > 0) {
  debugger;
  suma += entrada;
  // let entrada = +prompt("Ingrese estatura: ");
  contador++;
}
console.log(`Promedio de ${contador} personas es:`);
let promedio = suma / contador;
console.log(promedio);
