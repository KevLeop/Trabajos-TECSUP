const notas = [12, 02, 09, 10.5, 11, 07, 05];

/**
 * array.forEach((elemento,i,copia_del_arreglo) => {})
 *
 */

notas.forEach((elemento, i, c) => {
  console.log(elemento);
  console.log(i);
  // console.log(c);
  console.log("impresion");
});

console.log("/////////////////////////////////////////");
const facturas = [123.5, 4500, 2500, 123, 1025.05];

facturas.forEach((factura, i) => {
  console.log(`Monto_Factura -> ${factura}`);
  console.log(`Posición -> ${i}`);
});
