import React from "react";

const AdminCrearPlatoScreen = () => {
  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header">
              <h3>Registrar un primer plato</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="">Nombre:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Imagen:</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio:</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Categoria:</label>
                  <input type="number" className="form-control" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminCrearPlatoScreen;
