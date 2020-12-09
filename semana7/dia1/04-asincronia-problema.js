const buscarPorDni = (dni) => {
  // Tiempo de demora por buscar el dni en la base de datos 300ms
  let respuesta = "nada";
  setTimeout(() => {
    respuesta = "Kevin Valverde";
  }, 300);
  return respuesta;
};

let nombre = buscarPorDni("72937011");
console.log(nombre);
