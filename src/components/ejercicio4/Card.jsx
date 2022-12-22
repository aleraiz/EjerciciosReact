import React from "react";
import "./style.css";

const Card = ({ nombre, año, imagen, puntaje }) => {
  return (
    <div className="card">
      <div className="movieName">
        {nombre} ({año})
      </div>
      <div
        className={
          puntaje === "No la vi aún"
            ? "puntaje"
            : puntaje === "Excelente"
            ? "puntajeExcelente"
            : "puntajeRegular"
        }
      >
        {puntaje}
      </div>
      <div className="imgDiv">
        <img src={imagen} alt="imagenPelicula" />
      </div>
    </div>
  );
};

export default Card;
