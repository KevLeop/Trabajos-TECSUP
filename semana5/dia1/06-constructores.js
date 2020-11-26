/**
 * Los constructores son creadores de objetos
 * previamente definidos
 */

function Curso(
  _nombre = "",
  _nivel = "",
  _duracion = "",
  _precio = 0,
  _temas = []
) {
  let objCurso = {
    nombre: _nombre,
    nivel: _nivel,
    nombreCompleto: function () {
      return "Curso de: " + objCurso.nombre + " - " + objCurso.nivel;
    },
    duracion: _duracion,
    precio: 0.0,
    temas: [],
  };
  return objCurso;
}

let objReact = new Curso();
let objNextJS = new Curso();

objReact.nombre = "ReactJS";
objReact.duracion = "2 semanas";
objReact.nivel = "Avanzado";
console.log(objReact.nombreCompleto());

objNextJS.nombre = "NextJS";
objNextJS.duracion = "3 semanas";
objNextJS.nivel = "Intermedio";
objNextJS.temas = ["DefaultProps"]; // no recomendado
objNextJS.temas.push("Libraries", "SSR"); // recomendado

console.log(objReact);
console.log(objNextJS);

let objKotlin = new Curso("Kotlin", "Básico");
console.log(objKotlin);
