/**
 * document.createElement("nombreDeLaEtiqueta")
 * Retorna un elemento HTML que NO está presente aún en el DOM
 */

/**
 * element.AppendChild(otroElemento)
 * Inyecta un elemento hijo dentro de otro.
 */

/**
 * element.prepend(otroElemento)
 * Inyecta un elemento dentro de otroal inicio de la lista
 * de elementos hijos, es decir, como primer elemento.
 */
let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText = "EL TITULO DE LA APP";
console.log(h1);

// h1.onclick = () => {
//   alert("Hey! Hicieron click en el H1");
// };

// body.appendChild(h1);
body.prepend(h1);
