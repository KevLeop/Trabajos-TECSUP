let btnAlerta = document.getElementById("btnAlerta");
let btnEvento = document.getElementById("btnEvento");
let lis = document.querySelectorAll("ul > li");
let divCirculo = document.getElementById("divCirculo");
let linkGoogle = document.getElementById("linkGoogle");
// console.log(lis);
/**
 * Formas de asociar eventos
 * FORMA 1
 * element.addEventListener("evento",function(e){})
 * FORMA 2
 * element.on[event] = function(){}
 *
 * OJO: la palabra evento se reemplaza con el nombre del
 * evento que queremos asociar
 * https://developer.mozilla.org/es/docs/Web/Events
 */

btnAlerta.addEventListener("click", function (e) {
  alert("Hey! Alguien hizoclick en el boton Alerta!");
});

btnEvento.onclick = function (e) {
  /**
   * El parametro "e" es un objeto que tiene toda la informacion
   * del evento que se ha desencadenado
   */
  console.log("Click en el boton evento");
  console.log(e);
};

lis = Array.from(lis);
lis.forEach((li) => {
  li.onclick = (e) => {
    /**
     * el evento "e", e sun parámetro que tiene toda la
     * informacion de un evento.
     * e.target hace referencia al elemento html (HTMLElement)
     * en el que ocurre el evento.
     */

    // console.log(e.target.innerText);
    console.log(`Se hizo click en ${e.target.innerText}`);
  };
});

divCirculo.ondblclick = (e) => {
  let random255 = () => {
    return Math.random() * 255;
  };

  console.log("dobleclic");
  e.target.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
};

/**
 * eventos por defecto
 * Existen que elementos que ya tienen preconfigurados ciertos
 * comportamientos que responden a algunos eventos. Por ejemplo:
 * La etiqueta <a> </a> que cuando se hace Click nos dirige a
 * una nueva página definida por su atributo href.
 * NOTA: Estos eventos se pueden detener para darles un nuevo
 * comportamiento
 */

linkGoogle.onclick = (e, i) => {
  /**
   * e.preventDefault() -> Es una funcion que interrumpe cualquier
   * suceso pre-programado en cualquier evento
   */
  e.preventDefault();
  console.log(`asdas`);
};
