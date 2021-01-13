import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import ProductosContext from "../../../contextos/productosContext";
import { postProducto } from "../../../services/productosService";
import { v4 as uuidv4 } from "uuid";

const formularioVacio = {
  prod_nom: "",
  prod_pre: 0,
  // prod_sku: "",
  prod_img: "",
  cat_id: 0,
  prod_stock: 0,
};
const ProductoForm = () => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const [sku, setSku] = useState(uuidv4());
  const { obtenerProductos } = useContext(ProductosContext);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro de crear el producto?",
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        //consumir el servicio
        postProducto({ ...formulario, prod_sku: sku }).then((data) => {
          if (data.prod_id) {
            setFormulario(formularioVacio);
            setSku(uuidv4());
            obtenerProductos();
            Swal.fire({
              title: "Hecho",

              text: "Producto agregado exitosamente",
              icon: "success",
              showCancelButton: false,
              timer: 1000,
              position: "top-right",
            });
          }
        });
      }
    });
  };

  return (
    <section className="col-md-4 animate__animated animate__fadeInRight">
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Nombre:</label>
              <input
                type="text"
                id="prod_nom"
                name="prod_nom"
                placeholder="Ejm: TV Smart 70"
                className="form-control"
                value={formulario.prod_nom}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Precio:</label>
              <input
                type="number"
                id="prod_pre"
                name="prod_pre"
                className="form-control"
                value={formulario.prod_pre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Stock:</label>
              <input
                type="number"
                id="prod_stock"
                name="prod_stock"
                className="form-control"
                value={formulario.prod_stock}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">SKU:</label>
              <input
                type="text"
                name="prod_sku"
                readOnly
                id="prod_sku"
                className="form-control"
                value={sku}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Categoria:</label>
              <select
                name="cat_id"
                id="cat_id"
                value={formulario.cat_id}
                className="form-control"
                onChange={handleChange}
              >
                <option value="0" disabled>
                  --Seleccione
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Imagen:</label>
              <textarea
                id="prod_img"
                name="prod_img"
                cols="30"
                rows="5"
                className="form-control"
                value={formulario.prod_img}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Crear Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductoForm;
