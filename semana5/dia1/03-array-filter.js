/**
 * array.filter((elemento, i, copia) => {});
 * Mismo comportamiento de la funcion "map",
 * sin embargo,en "filter", se pueden discriminar a
 * algunos elementos bajo algunas condiciones
 */
/**
 * Del siguiente arreglo, retornar solo los elementos
 * que ocupan posiciones impares
 */
const numeros = [15, 12, 46, 5, 50, 99, 10, 50];
const posicionesImpares = numeros.filter((elemento, i) => {
  if (i % 2 !== 0) {
    return elemento;
  }
});
console.log(posicionesImpares);
