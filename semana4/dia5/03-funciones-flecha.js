/**
 * La funciones de flecha, son lo mismo que las funcinoes anónimas
 * La diferencia es la sintaxis (más moderna)
 */
/**
 * Funcion que recibe un número "n" y retorna un arreglo
 * con "n" nombres ingresados por el usuario
 * @param {number} n
 */
const leerUsuarios = (n) => {
  let nombres = [];
  for (let i = 0; i < n; i++) {
    nombres.push(prompt(`Ingrese el nombre ${i + 1}`));
  }
  return nombres;
};

const arregloNombres = leerUsuarios(6);
console.log(arregloNombres);
