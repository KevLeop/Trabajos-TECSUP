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
arreglo.forEach((li, i) => {
  li.innerText = `List Item ${i}`;
});

/**
 * document.querySelector("patrón_tipo_css");
 * document.querySelector(".rojo");
 * Retorna un (01) elemento HTML que coincida con el patrón
 * de selección como si fuera mediante css
 */

let subtitulo = document.querySelector("#subtitulo");
subtitulo.style.textDecoration = "underline";

/**
 * document.querySelectorAll("")
 * Retorna una coleccion de elementos HTML que coincida
 * con el patron de seleccion como si fuera mediante CSS
 */
let cajitas = document.querySelectorAll(".cajita");
cajitas = Array.from(cajitas);
cajitas.forEach((caja) => {
  caja.style.height = "20px";
  caja.style.width = "20px";
  caja.style.backgroundColor = "#444";
  caja.style.borderRadius = "50%";
  caja.style.marginBottom = "10px";
});
