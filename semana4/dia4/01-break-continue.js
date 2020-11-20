/**
 * break
 */

let nombres = ["jorge", "samantha", "dayana", "dennis", "brunela", "paty"];

/**
 * Indicar o imprimir la posicion en la que Dennis se encuentra
 * asumir que no se repiten los nombres
 */
// let i = 0;
// for (i = 0; i < nombres.length; i++) {
//   if (nombres[i] === "dennis") {
//     console.log(`La posicion de Dennis es: ${i}`);
//     break;
//   }
// }

// console.log(nombres);
// console.log(i);

/**
 * continue
 * Sirve para saltarse la iteracion en la que se encuentra
 * es decir, que todo el código que quedaba por ejecutarse
 * en una determinada iteracion, se va a omitir, y se pasará
 * a la siguiente iteración
 */

let numerosBinarios = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0];
/**
 * del arreglo numerosBinarios, imprimir solamente los 0(ceros)
 */
for (let it = 0; it < numerosBinarios.length; it++) {
  if (numerosBinarios[it] === 1) {
    continue;
  }
  console.log(numerosBinarios[it]);
}
