import React from "react";

const CartItem = ({ item, cart, setCart, total, setTotal }) => {
  const removeItemInCart = () => {
    let newTotal = total - item.unitPrice;
    setTotal(newTotal);
    if (item.quantity > 1) {
      item.quantity -= 1;
      const newCart = [...cart];
      setCart(newCart);
    } else {
      const newCart = cart.filter((grocerie) => {
        return item.name != grocerie.name;
      });
      console.log(newCart);
      setCart(newCart);
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <button onClick={removeItemInCart}>-</button>
      <div>{item.name}</div>
      <div>Cant: {item.quantity}</div>
      <div>(${item.unitPrice}c/u)</div>
    </div>
  );
};

export default CartItem;
