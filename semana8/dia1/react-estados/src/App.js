import React, { useState } from "react";
import Botones from "./Botones";

const App = () => {
  let [contador, setContador] = useState(0);
  console.log(`ContadorApp: ${contador}`);
  const saludar = () => {
    console.log("HOOLAAA");
  };
  return (
    <div>
      Hola Mundo
      <hr />
      Contador: {contador}
      <br />
      <Botones
        setContador={setContador}
        contador={contador}
        saludar={saludar}
      />
    </div>
  );
};

export default App;
