/**
 * Creando un arreglo
 */

// let edades = [45, 12, 36, 96, 20, 19];

//Imprimiendo la primera edad
// console.log(edades[0]);

//Obteniendo la cantidad de datos del arreglo
// console.log(edades.length);

// Modificar el tercer numero
// edades[2] = -5;
// console.log(edades);

// Recorriendo un arreglo

// for (let i = 0; i < edades.length; i++) {
//   console.log(edades[i]);
// }
/**
 * Insertar un elemento al final del arreglo
 * en la ultima posicion
 */

// edades.push(9);
// console.log(edades);

// console.log("/////////// EJERCICIOS //////////");

//ALGORITMO para ingresa n nombres de usuarios e insertarlos en un arreglo y finalmente mostrarlo

// const n = 5;
// let cantidad = prompt(`Ingrese el numero de usuarios que ingresará:`);
// const n = cantidad;
// let nombres = [];
// for (let i = 0; i < n; i++) {
//   let ingreso = prompt(`Ingrese el usuario ${i}:`);
//   nombres.push(ingreso);
// }
// console.log(nombres);

let datosBinarios = [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0];
let cantidadUnos = 0;
let cantidadCeros = 0;
for (let i = 0; i < datosBinarios.length; i++) {
  if (datosBinarios[i] === 1) {
    cantidadUnos++;
  } else if (datosBinarios[i] === 0) {
    cantidadCeros++;
  }
}
console.log(`Cantidad de 1: ${cantidadUnos}`);
console.log(`Cantidad de 0: ${cantidadCeros}`);

if (cantidadCeros > cantidadUnos) {
  console.log("Hay más ceros");
} else {
  console.log("Hay más unos");
}

// pag. 93 - 138
