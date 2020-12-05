/**
 * Destructuracion de arreglos
 */

let numeros = [10, 15, 1, -8, 95, 52, 46, 150];

let [n1, n2] = numeros;

console.log(n1);
console.log(n2);
// console.log(elResto);

const getCoords = (ciudad) => {
  return [-16.22125, -75.21312];
};

let [lat, lon] = getCoords("Puno");
console.log(`Latitud: ${lat} y  Longitud: ${lon}`);
