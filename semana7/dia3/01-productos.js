import { getCategorias, getProductos, postProductos } from "./servicios.js";

const productosContainer = document.getElementById("productosContainer");
const radioCards = document.getElementById("radioCards");
const radioTabla = document.getElementById("radioTabla");
const inputCrearNombre = document.getElementById("inputCrearNombre");
const inputCrearPrecio = document.getElementById("inputCrearPrecio");
const inputCrearImagen = document.getElementById("inputCrearImagen");
const inputCrearStock = document.getElementById("inputCrearStock");
const formCrearProducto = document.getElementById("formCrearProducto");
const crearProductoModal = document.getElementById("crearProductoModal");
const selectCrearCategoria = document.getElementById("selectCrearCategoria");
const modalCrear = new bootstrap.Modal(crearProductoModal);
let modo = "tabla"; //cards
let productos = [];
let categorias = [];

const dibujarProductos = () => {
  productosContainer.innerHTML = "";

  if (modo === "tabla") {
    // dibujar modo tabla

    let tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered", "table-striped", "mt-4");
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Nombre Producto</th>
          <th>Precio Producto</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Imagen</th>
        </tr>
      </thead>`;
    let tbody = document.createElement("tbody");
    productos.forEach((prod, i) => {
      let filaTmp = document.createElement("tr");
      filaTmp.innerHTML = `
        <td>${i}</td>
        <td>${prod.prod_id}</td>
        <td>${prod.prod_nom}</td>
        <td>${prod.prod_pre}</td>
        <td>${prod.prod_stock}</td>
        <td>${prod.categoria.cat_nom}</td>
      <td class="text-center">
        <img src="${prod.prod_img}"  width="100" class="rounded" />
      </td>`;
      tbody.appendChild(filaTmp);
    });
    tabla.appendChild(tbody);
    productosContainer.appendChild(tabla);
  } else {
    // dibujar modo cards

    productos.forEach((prod, i) => {
      let div = document.createElement("div");

      div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
      div.innerHTML = `
      <div class="card shadow">
            <img src="${prod.prod_img}"   class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">${prod.prod_nom}</h5>
              <p class="card-text">
                Precio:S/ ${prod.prod_pre}
              </p>
              <p>
              Categoria: ${prod.categoria.cat_nom}
              </p>
              <small class="text-muted">Stock: ${prod.prod_stock} </small>
            </div>
          </div>
      `;
      productosContainer.appendChild(div);
    });
  }
};
/**
 * Función que agrega el campo "cat_nom" a cada producto,
 */
const mapearProductos = () => {
  productos = productos.map((prod) => {
    prod.categoria = categorias.find((cat) => {
      if (cat.cat_id == prod.cat_id) {
        return cat;
      }
    });
    return prod;
  });
};

const llenarSelectCategorias = () => {
  selectCrearCategoria.innerHTML = "";
  categorias.forEach((cat) => {
    let optionTemp = document.createElement("option");
    optionTemp.innerText = cat.cat_nom;
    optionTemp.value = cat.cat_id;
    selectCrearCategoria.appendChild(optionTemp);
  });
};

const getRecursos = async () => {
  productos = await getProductos();
  categorias = await getCategorias();
  mapearProductos();
  dibujarProductos();
  llenarSelectCategorias();
};

getRecursos();
// puedo ir habliltando librerias
// puedo cargar otra API que me traiga datos del clima
// puedo ir obteneiendo el localStorage para settear preferencias
// del usuario

let onCheck = (e) => {
  // Forma 1
  // if (e.target.id === "radioTabla") {
  //   modo = "tabla";
  // } else {
  //   modo = "cards";
  // }
  // dibujarProductos();

  //Forma 2
  if (radioTabla.checked === true) {
    modo = "tabla";
  } else {
    modo = "cards";
  }
  dibujarProductos();
};

radioCards.onchange = onCheck;
radioTabla.onchange = onCheck;

/**
 * Funcion que retorna FALSE si no hay errores
 * y reto
 */
const validarControles = (controles = []) => {
  let errores = false;
  controles.forEach((control) => {
    control.classList.remove("is-invalid");
    control.classList.add("is-valid");
    if (control.value.trim() === "") {
      errores = true;
      control.classList.add("is-invalid");
      control.classList.remove("is-valid");
    }
  });
  return errores;
};

btnCrearProducto.onclick = () => {
  modalCrear.show();
};

formCrearProducto.onsubmit = (e) => {
  e.preventDefault();
  if (
    validarControles([
      inputCrearNombre,
      inputCrearPrecio,
      inputCrearStock,
      inputCrearImagen,
    ]) === false
  ) {
    //llenar formulario
    let objProducto = {
      prod_nom: inputCrearNombre.value.trim(),
      prod_pre: inputCrearPrecio.value,
      prod_stock: inputCrearStock.value,
      prod_sku: uuid.v4(),
      cat_id: selectCrearCategoria.value,
      prod_img: inputCrearImagen.value,
    };
    postProductos(objProducto).then((data) => {
      console.log(data);
      getRecursos();
      modalCrear.hide();
      formCrearProducto.reset();
    });
  }
};
