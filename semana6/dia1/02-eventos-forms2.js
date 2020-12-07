const tipos = [
  { idTipo: 1, nombreTipo: "Platos" },
  { idTipo: 2, nombreTipo: "Bebidas" },
  { idTipo: 3, nombreTipo: "Postres" },
];

const categorias = [
  {
    idCategoria: 1,
    nombreCategoria: "Fondo",
    idTipo: 1,
  },
  {
    idCategoria: 2,
    nombreCategoria: "Entradas",
    idTipo: 1,
  },
  {
    idCategoria: 3,
    nombreCategoria: "Sopas",
    idTipo: 1,
  },
  {
    idCategoria: 4,
    nombreCategoria: "Cocktails",
    idTipo: 2,
  },
  {
    idCategoria: 5,
    nombreCategoria: "Refrescos",
    idTipo: 2,
  },
  {
    idCategoria: 6,
    nombreCategoria: "Jugo de Frutas",
    idTipo: 2,
  },
  {
    idCategoria: 7,
    nombreCategoria: "Helados",
    idTipo: 3,
  },
  {
    idCategoria: 8,
    nombreCategoria: "Tortas",
    idTipo: 3,
  },
];

const formPlatos = document.getElementById("formPlatos");
const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");
const selectTipo = document.getElementById("selectTipo");
const selectCategoria = document.getElementById("selectCategoria");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tbody = document.getElementById("tbody");
let row0 = document.getElementById("row0");

const llenarTipos = () => {
  tipos.forEach((tipo) => {
    let miOption = document.createElement("option");
    miOption.innerText = tipo.nombreTipo;
    miOption.value = tipo.idTipo;
    selectTipo.appendChild(miOption);
  });
};

const llenarCategoriasPorId = (idTipo) => {
  if (idTipo === 0) {
    selectCategoria.innerHTML =
      "<option value='0' disabled selected>---Seleccione Categoria</option>";
    return;
  }
  selectCategoria.innerHTML = "";

  let categoriasPorTipo = categorias.filter((cat) => {
    if (cat.idTipo === idTipo) {
      return cat;
    }
  });

  // console.log(categoriasPorTipo);
  categoriasPorTipo.forEach((cat) => {
    let optionCat = document.createElement("option");
    optionCat.innerText = cat.nombreCategoria;
    optionCat.value = cat.idCategoria;
    selectCategoria.appendChild(optionCat);
  });
};

llenarTipos();

/**
 * elemento.onchange se ejecuta cada vez que un input o select
 * cambia su valor, es decir cuando se selecciona un "option"
 */

selectTipo.onchange = (e) => {
  // console.log(selectTipo.value);
  let idTipo = +selectTipo.value;
  llenarCategoriasPorId(idTipo);
};

const llenarTabla = (plato) => {
  let fila = document.createElement("tr");
  // fila.innerHTML = " ";
  fila.innerHTML = `
  <td>${plato.idPlato}</td>
  <td>${plato.nombrePlato}</td>
  <td>${plato.precioPlato}</td>
  <td>${plato.tipoPlato}</td>
  <td>${plato.categoriaPlato}</td>
  `;
  tbody.appendChild(fila);
};

let id = 1;
btnRegistrar.onclick = (e) => {
  if (
    inputNombre.value === "" ||
    inputPrecio.value === 0 ||
    selectTipo.value === "0" ||
    selectCategoria.value === "0"
  ) {
    alert("Por favor llene todos los campos del formulario");
  } else {
    let nombre = inputNombre.value;
    let precio = inputPrecio.value;
    let tipo = selectTipo.value;
    let categoria = selectCategoria.value;
    let objPlato = {
      idPlato: id,
      nombrePlato: nombre,
      precioPlato: precio,
      tipoPlato: tipo,
      categoriaPlato: categoria,
    };
    row0.innerHTML = " ";
    llenarTabla(objPlato);
  }
  id++;
};

btnLimpiar.onclick = (e) => {
  formPlatos.reset();
};
