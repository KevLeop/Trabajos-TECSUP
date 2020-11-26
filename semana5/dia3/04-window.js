/**
 * window es un objeto que es creado automaticamente por el navegador
 * este objeto tiene las propiedades para manipular al DOM
 * y obtener información acerca del navegador y la pagina
 * en la que nos encontramos
 */

/**
 * Principales propiedades
 * window.document => objeto que sirve para manipular al DOM
 * window.innerWidth => retornar el valor del ancho de la ventana en px
 * window.innerheight => retorna el valor del alto de la ventana en px.
 */

console.log(window.innerWidth + " ancho en pixeles");
console.log(window.innerHeight + " alto en pixeles");
console.log(window.document);

/**
 * Es posible colocar cualquier atriburo o funcion de "window"
 * sin referenciar a "window" necesariamente
 *
 * Ejm: podemos usar "innerWidth" solemante
 */
