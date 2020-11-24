const miFuncion = (otraFuncion) => {
  otraFuncion("Kevin");
};

miFuncion((nombre) => {
  console.log(`Saludando a ${nombre}`);
});

/**
 * Funcion que recibe un callback
 * Al callback, le manda un pbjeto cundo se termina la peticion a la BD
 * @param {function({string})} respuesta
 */
const traerDatos = (respuesta) => {
  fetch("https://reqres.in/api/users?page=2")
    .then((data) => {
      return data.json();
    })
    .then((rpta) => {
      setTimeout(() => {
        respuesta(rpta);
      }, 2000);
    });
};

traerDatos((rpta) => {
  console.log(rpta);
});
