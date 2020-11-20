/**
 * El operador ternario sirve para resumir un if-else.
 * Como requisito, tanto el if como el else, deben tener
 * una sola linea de codigo interno
 */

let dscto = 0;
let productos = [12.5, 13.0, 80.0, 800, 900];
let total = 0;

for (let i = 0; i < productos.length; i++) {
  total += productos[i];
}
/** Si el total a pagar es mayor a S/500.
 * Hacer el descuento del 5%
 * caso contrario
 * el descuento será del 1%
 */
// if (total > 500) {
//   dscto = total * 0.05;
// } else {
//   dscto = total * 0.01;
// }
dscto = total > 500 ? total * 0.05 : total * 0.01;
