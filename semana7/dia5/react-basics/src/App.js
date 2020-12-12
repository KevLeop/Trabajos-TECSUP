import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Usuarios from "./Usuarios";
import Productos from "./Productos";
const App = () => {
  const miTitulo = "My title application";
  const libros = [
    "Cronica de una muerte anunciada",
    "Ña catita",
    "Narraciones",
    "Siete semillas",
  ];
  const librosList = libros.map((libro, i) => {
    return <li key={i}> {libro}</li>;
  });
  const users = [
    { id: 1, nombre: "Kevin", apellido: "Valverde" },
    { id: 2, nombre: "Lechka", apellido: "Valdivia" },
    { id: 3, nombre: "Juan", apellido: "Perez" },
  ];

  const productos = [
    { id: 34, descripcion: "PS5", precio: 3000.5 },
    { id: 453, descripcion: "Camara Nikon", precio: 5000.5 },
    { id: 78, descripcion: "Olla Arrocera", precio: 150.5 },
  ];

  return (
    <>
      <Header />
      <h1>{miTitulo}</h1>
      <div>hola2</div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui debitis
        corrupti ipsa asperiores, magni sint!
      </p>

      <ul>{librosList}</ul>
      <section>
        <Usuarios user={users} miTitulo={miTitulo} />
      </section>
      <hr />
      <h2>Productos</h2>
      <Productos productos={productos} />
      <Footer />
    </>
  );
};
export default App;
