/**
 * for
 */
// let i = 5;
// for (i; i < 10; i = i + 2) {
//   console.log(`Valor de i= ${i}`);
// }
// console.log(`Valor de i fuera del bucle ${i}`);

/**
 * Algoritmo que imprime los 50 primeros numeros pares
 */
// for(let i=0; i<100;i=i+2)
// {
//   console.log(`Valor de i = ${i}`)
// }

/**
 * Algoritmo que imprime los multiplos de 5
 * entre los numeros 0 y 100
 */

// let i = 0;
// for (i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(`Multiplo de 5 = ${i}`);
//   }
// }
// console.log(`Valor de i saliendo del bucle: ${i}`);

// let suma = 0;
// for (let i = 0; i < 20; i++) {
//   suma = suma + i;
// }
// console.log(`suma: ${suma}`);

// let factorial = 1;
// let numero = 8;
// for (let i = 1; i <= numero; i++) {
//   factorial = factorial * i;
// }
// console.log(`factorial de ${numero} es: ${factorial}`);

/**
 * Algoritmo para calcular la multiplicación de 2 numeros sin utilizar
 *  el operador asterisco
 */
// let a = 4;
// let b = 7;
// let resultado = 0;
// for (let i = 0; i < b; i++) {
//   resultado += a;
// }
// console.log(`${a} x ${b}=${resultado}`);

/**
 * CICLO WHILE
 */
// let i = 0;
// while (i < 30) {
//   if (i % 10 === 0) {
//     console.log(`Multiplo de 30: ${i}`);
//   }
//   i++;
// }

/**ALGORITMO PARA RECIBIR N NOTAS
 * la unica forma de registrar el ingreso de notas será
 * colocando el valor de -1
 */

// let suma = 0;
// let nota = 0;
// let contador = 0;
// let promedio = 0;
// while (nota !== -1) {
//   nota = +prompt("Ingresa una nueva nota o ingresa -1 para terminar");
//   if (nota !== -1) {
//     suma = suma + nota;
//     contador++;
//   }
// }
// console.log(`Suma: ${suma}`);
// console.log(`Cantidad de notas: ${contador}`);
// promedio = suma / contador;
// console.log(`promedio es: ${promedio}`);
