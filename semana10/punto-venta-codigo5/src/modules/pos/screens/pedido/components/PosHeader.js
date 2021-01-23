import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../../context/auth/authContext";
import logo from "./../../../../../assets/img/logo.svg";
import searchIcon from "./../../../../../assets/img/search.svg";
const PosHeader = () => {
  const { usu_nom, cerrarSesion } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__buscador">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          className="header__input"
          placeholder="Busca un término"
        />
      </div>
      <div className="header__usuario mr-4">
        <Link className="btn btn-success" to="/admin/dashboard">
          Ir a admin
        </Link>
      </div>
      <div className="header__usuario">
        <button
          className="btn btn-danger mr-2"
          onClick={() => {
            cerrarSesion();
          }}
        >
          Cerrar Sesion <span class="badge badge-primary"></span>
        </button>
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>{usu_nom}</span>
      </div>
    </header>
  );
};

export default PosHeader;
