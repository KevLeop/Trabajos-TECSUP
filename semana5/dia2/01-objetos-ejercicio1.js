/**
 * Reto 1: CREAR EL CONSTRUCTOR DE UN OBJETO
 * Nombre:  Alumno
 * Los atributos de cada alumno serán
 * > nombres: <string>
 * > apellidos: <string>
 * > notas: Array<number>
 * > dni: <string>
 * > promedioNotas: Function => función que calculará
 *   el promedio de todas las notas que tenga un alumno y
 *   retornará dicho promedio
 * OBS: el constructor, debe recibir todos los parámetros
 */
function Alumno(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
  let objAlumno = {
    nombres: _nombres,
    apellidos: _apellidos,
    notas: _notas,
    dni: _dni,
    promedio: function () {
      let promedio = 0;
      let suma = 0;
      this.notas.forEach((elemento) => {
        suma += elemento;
      });
      promedio = suma / this.notas.length;
      return promedio;
    },
  };
  return objAlumno;
}
/**
 * 1. Leer la cantidad de alumnos a ingresar
 * 2. Leer la cantidad de notas por alumno a ingresar
 * 3. Iterar la cantidad de alumnos que el usuario va a ingresar
 *  y en cada vuelta, pedir los datos del alumno incluidas las notas
 * 4. Adicionalmente, en cada vuelta agregar el alumno ingresado al
 *   arreglo de alumnos.
 * 5.Luego de ingresar a todos los alumnos, iterar nuevamente le arreglo
 * de alumnos para imprimir el promedio de cada uno de ellos en cada
 * iteración.
 * 6. Finalmente, acabadas las iteraciones, imprimir el arreglo de alumnos
 */

let alumnos = [];

let cantidadAlumnos = +prompt("Ingresar la cantidad de alumnos");
for (let i = 0; i < cantidadAlumnos; i++) {
  let nombrePrompt = prompt(`Ingrese el nombre del alumno ${i + 1}`);
  let apellidosPrompt = prompt(`Ingrese el apellido del alumno ${i + 1}`);
  let dniPrompt = prompt(`Ingrese el dni del alumno ${i + 1}`);
  let notasCantPrompt = +prompt(
    `Ingrese la cantidad de notas del alumno ${i + 1}`
  );

  let notas = [];
  for (let j = 0; j < notasCantPrompt; j++) {
    let notasIngPrompt = +prompt(`Ingrese nota ${j + 1} del alumno ${i + 1}`);
    notas.push(notasIngPrompt);
  }
  let objAlumno = new Alumno(nombrePrompt, apellidosPrompt, notas, dniPrompt);
  alumnos.push(objAlumno);
  // objAlumno.promedio();

  console.log(
    `El promedio de notas del alumno ${i + 1} es ${objAlumno.promedio()} `
  );
  console.log(alumnos);
}
