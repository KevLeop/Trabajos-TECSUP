let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let ulJugadores = document.getElementById("listaJugadores");
let btnRegistro = document.getElementById("btnRegistro");
let producto1 = document.getElementById("producto1");
let imagen = document.getElementById("imagen");

/**
 * element.innerText = "texto interno";
 * Define el texto interno de una etiqueta
 * element.innerHTML = "texto o código HTML"
 * Define el texto o renderiza un codigo html
 * dentro de un elemento.
 */

titulo.innerText = " Titulo en <strong> Negrita</strong>";
subtitulo.innerHTML = " Subtitulo en <em> Negrita </em>";

const jugadores = [
  "Maradona",
  "Paolo Guerrero",
  "Lionel Messi",
  "CR7",
  "Ronaldo",
];

/**
 * Llenar con Li  <li></li>
 * cada jugador del arreglo en la listaJugadores en HTML
 */
console.log(ulJugadores);
const reto = () => {};

let stringLis = "";
const llenarUl = () => {
  jugadores.forEach((jugador) => {
    stringLis = stringLis + `<li>${jugador}</li>`;
  });
  console.log(stringLis);
  ulJugadores.innerHTML = stringLis;
};

llenarUl();

ulJugadores.style.listStyle = "none";

/**
 * element.classList = retorna un arrelgo de strings
 * con las clases que tenga el elemento
 */

console.log(btnRegistro.classList);

/**
 * element.classList.add("nombre_de_clase_a_agregar")
 * Agrega una clase nueva a las clases que tenia pereviamente
 * un elemento.
 */
/**
 * element.classLsit.remove("nombre_de_clase_a_eliminar")
 * Elimina o quita una clase a un elemento
 */

/**
 * element.classList.toggle("nombre_de_clase_Interruptor")
 * Agrega o quita una clase de un elemento y funciona como un interruptor
 * si no tiene la clase la agrega
 * y si no tiene la clase la elimina
 */

setInterval(() => {
  btnRegistro.classList.toggle("pressed");
}, 500);

/**
 * element.setAttribute("nombreDeAtributo", "ValorDeAtributo")
 * Agrega un atributo HTML a una etiqueta con un determinado valor
 * El atributo puede o no ser un atributo oficial
 * Ejm:
 * src => "Atributo oficial de una etiqueta <img>"
 * href => Atributo oficial de una etiqueta <a>
 * id-usuario => Atributo no oficial de cualquier etiqueta
 */

producto1.setAttribute("producto-id", "1562");

const urls = [
  "http://placehold.it/300x300/444444/bbbbbb?text=logo1 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo2 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo3 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo4 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo5 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo6 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo7 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo8- 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo9 - 300x300",
  "http://placehold.it/300x300/444444/bbbbbb?text=logo10 - 300x300",
];

/**
 * Cada segundo debe cargarse una imagen aleatoria del arreglo
 */

setInterval(() => {
  aleatorio = Math.floor(Math.random() * urls.length);
  url = urls[aleatorio];
  // console.log(url);
  imagen.setAttribute("src", url);
}, 1000);

/**
 * ¿Cuando usar setAttribute?
 * Es preferible usarlo cuando el atributo no es un
 * atributo oficial.
 * ¿Por qué?
 * Porque los atributos que son oficiales en un elemento
 * pueden setearse directamente
 * EJM:
 * unaImagen.src="";
 * unaTabla.border = "2";
 * unTr.colspan = "4"
 * unInput.value = ""
 */

/**
 * element.getAttribute("nombredelAtributo")
 * Retorna el valor del atributo de un elemento
 */

console.log(imagen.getAttribute("src"));
