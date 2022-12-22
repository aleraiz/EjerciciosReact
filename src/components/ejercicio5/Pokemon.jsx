import React from "react";
import "./style.css";
const Pokemon = ({ name, image, type }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <div>
        <img src={image} alt="img" />
      </div>
      <p>Type: {type}</p>
    </div>
  );
};

export default Pokemon;
