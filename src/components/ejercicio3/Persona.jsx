import React from "react";

const Persona = ({ nombre, edad }) => {
  return (
    <div>
      <p>{nombre}</p>

      {edad < 18 ? (
        <p>Lo sentimos, no tiene edad suficiente</p>
      ) : (
        <p>Bienvenido, tomate la birra</p>
      )}
    </div>
  );
};

export default Persona;
