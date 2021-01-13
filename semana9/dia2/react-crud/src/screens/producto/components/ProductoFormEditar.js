import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import ProductosContext from "../../../contextos/productosContext";
import { putProducto } from "../../../services/productosService";

const ProductoFormEditar = () => {
  const { productoEditar, setModalEditar, obtenerProductos } = useContext(
    ProductosContext
  );
  const [formulario, setFormulario] = useState({ ...productoEditar });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `¿Seguro de editar el producto ${formulario.prod_nom}?`,
      icon: "question",
      text: "Los cambios se guardarán en la base de datos",
      showCancelButton: true,
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        putProducto(formulario).then((data) => {
          if (data.prod_id) {
            setModalEditar(false);
            obtenerProductos();
            Swal.fire({
              title: "Editado!",
              icon: "success",
              timer: 800,
              showCancelButton: false,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">id:</label>
          <input
            type="text"
            id="prod_id"
            name="prod_id"
            placeholder="Ejm: TV Smart 70"
            className="form-control"
            value={formulario.prod_id}
            onChange={handleChange}
            readOnly
          />
        </div>
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
            id="prod_sku"
            className="form-control"
            value={formulario.prod_sku}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Categoria:</label>
          <input
            type="number"
            id="cat_id"
            name="cat_id"
            className="form-control"
            value={formulario.cat_id}
            onChange={handleChange}
          />
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
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductoFormEditar;
