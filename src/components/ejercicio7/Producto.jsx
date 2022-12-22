import React from "react";

const Producto = ({ grocerie, cart, setCart, total, setTotal }) => {
  const addItemToCart = () => {
    let newTotal = total + grocerie.unitPrice;
    setTotal(newTotal);
    const itemInCart = cart.filter((item) => {
      return item.name === grocerie.name;
    });

    if (itemInCart.length > 0) {
      console.log("Ya existe este producto");
      grocerie.quantity += 1;
      const newCart = [...cart];
      setCart(newCart);
    } else {
      grocerie.quantity = 1;
      setCart([...cart, grocerie]);
    }
  };
  return (
    <div className="d-flex">
      <button onClick={addItemToCart}>+</button>
      <div className="ms-3">{grocerie.name}</div>
      <div className="ms-3">(${grocerie.unitPrice})</div>
    </div>
  );
};

export default Producto;
