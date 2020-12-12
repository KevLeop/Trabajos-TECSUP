import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const App = () => {
  const miTitulo = "My title application";
  const libros = [
    "Cronica de una muerte anunciada",
    "Ña catita",
    "Narraciones",
    "Siete semillas";
  ];
  const librosList = libros.map((libro) => {
    return <li>{libro}</li>;
  });
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
      <Footer />
    </>
  );
};
export default App;
