import React from "react";
import CartItemRow from "./CartItemRow";

const CartItemsList = ({ cart, onQuantityChange, onRemove }:CartList) => {
  return (
    <tbody>
      {cart.map((item) => (
        <CartItemRow
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}
    </tbody>
  );
};

export default CartItemsList;
