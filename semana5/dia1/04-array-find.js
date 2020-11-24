/**
 * array.find ((elemento,i,copia) => {})
 *  find retorna un (01) solo elemento que coincida
 * con una condicion de busqueda para los elementos
 * del arreglo.
 * Y encontrado el elemento, este es retornado.
 * En caso nunca se encuentre el elemento o la
 * condicion el retorno sera undefined
 */

const dnis = [
  "10203040",
  "51525354",
  "51542132",
  "12345678",
  "79784565",
  "87654321",
  "51542132",
];

const encontrado = dnis.find((dni) => {
  if (dni === "51542132") {
    return dni;
  }
});
encontrado
  ? console.log(`se encontró el dni: ${encontrado}`)
  : console.log("no se encontró");

/**
 * indexOf
 */

console.log(dnis.indexOf("51542132"));
