import React from "react";

const Producto = ({ grocerie, cart, setCart }) => {
  const addItemToCart = (event) => {
    grocerie.quantity = 1;
    console.log(grocerie);
    setCart([...cart, grocerie]);
  };
  return (
    <div className="d-flex">
      <button onClick={addItemToCart}>+</button>
      <div className="ms-3">{grocerie.name}</div>
    </div>
  );
};

export default Producto;
