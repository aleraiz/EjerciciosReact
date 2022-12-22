import React from "react";

const CartItem = ({ nombre, cantidad, precio }) => {
  return (
    <div className="d-flex justify-content-around">
      <button>-</button>
      <div>{nombre}</div>
      <div>Cant: {cantidad}</div>
      <div>(${precio}c/u)</div>
    </div>
  );
};

export default CartItem;
