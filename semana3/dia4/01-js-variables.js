// VARIABLES EN JAVASCRIPT
// Vatiable de tipo numerico
let edad = 25;
let sueldo = 950.5;

// Variable de tipo de cadena de texto
let nombre = "Kevin Valverde Huilca";
let mensaje = "Buenos días";

// Variable de tipo bool
let casado = true;
let cazado = false;

// Variables de tipo arreglo
let platos = ["Ceviche", "Seco de cordero", "Lomo saltado"];

// console.log()

console.log("algo como esto");
console.log(cazado);
console.log("casado:" + casado);
console.log("Nombre: " + nombre);

//PLANTILLAS O TEMPLATES usando ''

console.log(`Mi nombre es: ${nombre} y tengo ${edad} años`);

// modificar el valor de una variable
edad = 27;
console.log(`Corrección!, Mi edad es de ${edad} años`);
console.log(`Mis platos favoritos son ${platos}`);
console.log(platos);

let mensajeCompleto = `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(mensajeCompleto);

// constantes: se crean con el identificador "const"
const pi = 3.1416;
console.log(`El valor de PI = ${pi}`);

let pi2 = pi;
pi2 = pi + 1;

console.log(pi2);
