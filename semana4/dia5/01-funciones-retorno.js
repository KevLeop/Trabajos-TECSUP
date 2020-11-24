/**
 * Funcion que recibe un arreglo de nobmres (STRING) y un nombre
 * a buscar dentro del arreglo de nombres
 * Si el nombre existe, retorna true, y si no existe, retorna false
 * @param {Array<string>} nombres
 * @param {string} nombreBuscado
 * @returns {boolean} `true` o  `false` como respuesta
 */

function buscarNombre(nombres, nombreBuscado) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
      return true;
    }
  }
  return false;
}
const nombres = ["jorge", "dayana", "paty", "maria", "victor", "kyra"];

// buscarNombre(nombres, "maria");

buscarNombre(nombres, "maria")
  ? console.log("Maria existe en la BD")
  : console.log("Maria no existe en la BD");

console.log(
  "Maria " + (buscarNombre(nombres, "maria") ? "si" : "no") + "existe en la bd"
);

/**
 * 1. Funciones que reciben parametros y no retornan valor
 * 2. Funciones que reciben parámetros y retornan valor
 * 3. Funciones que no reciben parametros y retornan valor
 * 4. Funciones que no reciben parametros ni retornan valor
 */
