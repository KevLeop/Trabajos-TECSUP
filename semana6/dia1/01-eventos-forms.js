const formRegistro = document.getElementById("formRegistro");
const inputPlaca = document.getElementById("inputPlaca");
const selectColor = document.getElementById("selectColor");
const radioNuevo = document.getElementById("radioNuevo");
const radioUsado = document.getElementById("radioUsado");
const textObs = document.getElementById("textObs");

const resetearFormulario = () => {
  formRegistro.reset();
  inputPlaca.focus();
  textObs.value = "Sin observaciones";
};
/**
 * onsubmit => evento que se dispara cuando
 * se envia el formulario
 */
formRegistro.onsubmit = (e) => {
  e.preventDefault();
  // console.log("se hizo clic en submit");
  let placa = inputPlaca.value;
  // console.log(placa);

  let color = selectColor.value;
  // console.log(`color = ${color}`);

  // console.log(radioNuevo.checked);
  let estado = radioNuevo.checked ? "nuevo" : "usado";
  // console.log(estado);

  let obs = textObs.value;
  // console.log(obs);

  /**
   * string.trim() funciond de los string que elimina
   * los espacios en blanco externos de un string,
   * no internos
   */
  if (placa === "" || color === "0" || obs === "") {
    formRegistro.classList.add("errorFormulario");
    alert("error! llene todos los campos");

    return;
  }
  formRegistro.classList.remove("errorFormulario");
  let objVehiculo = {
    placa: placa,
    color: color,
    estado: estado,
    observaciones: obs,
  };
  console.log(objVehiculo);

  resetearFormulario();

  /**
   * RETO: Mostrar una alera de error si:
   * > El color está en cero
   * > La placa está vacía
   * > No hay observaciones
   * CASO CONTRARIO, imprimir el objeto correctamente
   */

  /**
   * A continuacion el código para redireccionar a otra
   * pagina
   */
  // window.location.href = "https://www.google.com.pe";

  /**
   * A continuación el código para abrir una nueva pestaña
   * en una pagina distinta
   */
  // window.open("https://www.google.com.pe");
};

/**
 * elemento.focus();
 * Funcion que establece el cursor por defecto en
 * un determinado elemento
 */

// inputPlaca.focus();
