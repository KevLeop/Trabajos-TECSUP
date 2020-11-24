/**
 * array.map((elemento, i, copia_del_arreglo) =>{})
 * En todads la iteraciones se debe retornar el mismo elemento
 * o uno diferente ya que apartir de la funcion map, se obtiene un
 * nuevo arreglo con todos esos elementos retornados.
 */

const usuarios = ["Daniela", "Dayana", "Mariel", "Kike", "Rubi"];

const nuevosUsuarios = usuarios.map((usuario) => {
  return usuario;
});

console.log(nuevosUsuarios);

/** Del siguiente arreglo retornar:
 *    el doble de los numero pares
 *    y la mitad de los numero impares
 */

console.log("//////////");
const numeros = [15, 12, 45, 78, 51, 151, 10, 50];
const resultado = numeros.map((numero) => {
  if (numero % 2 === 0) {
    return numero * 2;
  } else {
    return numero / 2;
  }
});
console.log(resultado);

console.log("////////////////////");
/**
 * OJO: la función Map no es capaz de discriminar a ningún elemento
 * La cantidad de elementos que retorna siempre es la misma
 * cantidad del arreglo original.
 * Asi que, considerar retornar todos los elementos de todas formas
 * (modificados o no modificados)
 */

const dobleDePares = numeros.map((numero) => {
  if (numero % 2 === 0) {
    return numero * 2;
  } else {
    return numero;
  }
});

console.log(dobleDePares);
