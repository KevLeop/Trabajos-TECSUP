/**
 *  Una promesa es una estrucura que nos ayuda a esperar
 * un resultado tras la ejecucion de una funcion asincrona
 */

/**
 * Funcion que recibe un numero de DNI
 * y retorna una PROMesa que cotiene el usuario
 * encontrado
 */

const buscarPorDni = (dni) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Keivn Valverde");
    }, 2000);
  });
};

console.log("1");
buscarPorDni("72937011").then((nombre) => {
  console.log(nombre);
  document.getElementById("resultado").innerText = nombre;
});
console.log(2);
