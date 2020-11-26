/**
 * document proporciona la capacidad de:
 * Manipular al DOM, encontrar elementos,
 * crear elementos, etc
 */

/**
 * document.getElementById("id_de_un_elemento")
 */

let titulo = document.getElementById("titulo");
titulo.innerText = "Nuevo titulo";
// modificar el texto de la etiqueta h1 con id="titulo"

/**
 * document.getElementsByClassName("classname")
 *
 */

let lis = document.getElementsByClassName("lista__item");
/**
 * OJO: Hint para convertir un elemento que tiene
 * forma de un arreglo, pero no es del tipo de dato
 * Array, en este caso es HTMLCollection
 */
/**
 * Array.from(<objeto_iterable>) Retorna un arreglo genuino
 * a partir del pseudocodigo
 */
let arreglo = Array.from(lis);
console.log(arreglo);
arreglo.forEach((li) => {
  console.log(li);
});
