/**
 * Regla1: Si un funcion tiene una sola linea de ejecucion
 * y retorno se pueden omitir las llaves
 */

const cubo = (numero) => numero * numero * numero;

console.log(cubo(5));

/**
 * Regla 2
 * Cuando una funcion recibe 01 solo parametro
 * se puede omitir el simbolo de parentesis
 */

const buscarPorDni = (dni) => console.log(`encontrado ${dni}`);

buscarPorDni(1222121312);

/**
 * Regla 3
 * Formas reducidad de hacer map, filter, find.
 */

let numeros = [1, 2, 3, 6, 5, 23, 66, 87, 11, 88, 99, 13];

let pares = numeros.filter((num) => num % 2 === 0);

console.log(pares);
