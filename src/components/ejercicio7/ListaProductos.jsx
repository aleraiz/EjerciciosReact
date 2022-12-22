import React from "react";
import groceries from "./groceries";
import Producto from "./Producto";
import { useState } from "react";
import CartItem from "./CartItem";

const ListaProductos = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="d-flex justify-content-around">
      <div className="ms-4">
        <h3>Productos disponibles</h3>
        {groceries.map((grocerie) => {
          return (
            <Producto
              grocerie={grocerie}
              key={grocerie.id}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
      <div>
        <h3>Carrito de compras</h3>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              nombre={item.name}
              precio={item.unitPrice}
              cantidad={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaProductos;
