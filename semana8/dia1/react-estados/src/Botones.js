import React, { useState } from "react";

const Botones = ({ setContador, contador, saludar }) => {
  console.log(`ComponenteBotones:` + contador);
  return (
    <div>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setContador(0);
        }}
      >
        0
      </button>

      <button
        onClick={() => {
          saludar();
        }}
      >
        Saludar
      </button>
    </div>
  );
};

export default Botones;
