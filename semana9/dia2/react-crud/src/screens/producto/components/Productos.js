import React, { useContext } from "react";
import ProductosContext from "../../../contextos/productosContext";
import Swal from "sweetalert2";
import { deleteProducto } from "../../../services/productosService";

const Productos = () => {
  const {
    productos,
    cargandoProductos,
    obtenerProductos,
    setModalEditar,
    setProductoEditar,
  } = useContext(ProductosContext);

  const eliminar = (prod_id) => {
    Swal.fire({
      title: "Seguro de eliminar el producto?",
      icon: "error",
      text: "Los cambios serán irreversibles",
      showCancelButton: true,
    }).then((rpta) => {
      deleteProducto(prod_id).then((data) => {
        if (data.prod_id) {
          obtenerProductos();
          Swal.fire({
            title: "Eliminado!",
            icon: "success",
            timer: 800,
            showCancelButton: false,
            position: "top-end",
          });
        }
      });
    });
  };

  return (
    <section className="col-md-8">
      <div className="card shadow">
        <div className="card-body">
          {cargandoProductos ? (
            <div className="alert alert-info text-center" role="alert">
              <h4 className="alert-heading  ">Cargando Productos</h4>
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
                <p className="mb-0"></p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-right mb-3">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    obtenerProductos();
                  }}
                >
                  RefreshTable
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Stock</th>
                      <th>SKU</th>
                      <th>Categoria</th>
                      <th>Imagen</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((objProducto) => {
                      return (
                        <tr key={objProducto.prod_sku}>
                          <td>{objProducto.prod_id}</td>
                          <td>{objProducto.prod_nom}</td>
                          <td>{objProducto.prod_pre}</td>
                          <td>{objProducto.prod_stock}</td>
                          <td>{objProducto.prod_sku}</td>
                          <td>{objProducto.prod_id}</td>
                          <td>
                            <img src={objProducto.prod_img} alt="" width="65" />{" "}
                          </td>
                          <td>
                            <div className="d-flex">
                              <button
                                className="btn btn-secondary"
                                onClick={() => {
                                  setProductoEditar(objProducto);
                                  setModalEditar(true);
                                }}
                              >
                                Editar
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  eliminar(objProducto.prod_id);
                                }}
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Productos;
