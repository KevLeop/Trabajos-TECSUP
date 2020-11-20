/** HACER UN ALGORITMO PARA MOSTRAR LA MAYOR DE LAS EDADES */

function imprimirMayor(arreglo = [], nombre = "") {
  let mayor = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  if (nombre === "" || arreglo.length === 0) {
    console.error("No se han enviado los parametros a la funcion");
  } else {
    console.log(`El numero mayor del arreglo ${nombre} es: ${mayor}`);
  }
}

let edades = [12, 50, 20, 60, 58];
let notas = [10, 15, 12, 05, 20, 11.5];
let mayor = 0;

imprimirMayor(edades, "edades");
// let mayor = 0;
imprimirMayor(notas, "notas");
imprimirMayor();
