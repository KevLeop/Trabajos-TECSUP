let frase = "CodiGO bootcamp de desarrollo web";

/** string.length
 * Retorna la cantidad de caracteres de la cadena de texto
 */

console.log(frase);
console.log("Caracteres: " + frase.length);

/**
 * Los strings pueden ser tratados como un arreglo
 */
// Imprimir el caracter de las posicion 5
console.log(frase[5]);

/**
 * string.indexOf("subcadena o caracter", ? desde_qué_posicion)
 * Busca la posición en la que aparezca un caracter o
 * una cadena de texto pasada como parámetro a la funcion indexOf
 * Opcionalmente se puede enviar un segundo parámetro indicando
 * desde qué posición desean buscar el caracter  o la subcadena.
 * Posibles respuestas:
 * -1 cuando no encuentra el texto buscado
 * >0 cuando encuentra el texto buscado
 */

// Buscar la palabra GO
console.log("Posicion de GO: " + frase.indexOf("GO"));

/**
 * string.toLowerCase()
 * Devuelva una copia del string convertido a minúscula
 *
 * string.toUpperCase()
 * Devuelve una copia del string convertido todo a mayuscula
 */
const titulo = "Once Upon a Snowman";

let posicionSnowUpper = titulo.toUpperCase().indexOf("SNOW");
console.log(posicionSnowUpper);

let posicionSnowLower = titulo.toLowerCase().indexOf("snow");
console.log(posicionSnowLower);

/**
 * string.split("separador")
 * Retorna un arreglo de string que han sido separadas
 * tomando como patrón al "separador"
 */

let palabras = titulo.split(" ");
console.log(palabras);
console.log(`CANTIDAD DE PALABRAS: ${palabras.length} palabras`);

let sinopsis =
  "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga";

let arreglo = sinopsis.split(" ");
arreglo = arreglo.filter((word) => {
  if (word.length > 3) {
    return word;
  }
});

console.log(arreglo);

/**
 * string.substring(inicio, ?fin)
 * Retorna una subcadena desde la posicion "inicio" hasta
 * la posicion "fin"
 * OJO: Si no se proporciona el "fin" se tomará hasta el final de
 * la cadena
 */
console.log(frase.length);
console.log(frase.substring(19, 29));
