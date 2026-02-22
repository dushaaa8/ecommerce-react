import React from "react";
import CartItemsList from "./CartItemsList";

const CartTable = ({ cart, onQuantityChange, onRemove }:CartList) => {
  return (
    <div className="bg-neutral-01 rounded-lg shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-neutral-02 border-b border-neutral-03">
          <tr>
            <th className="text-left p-4 font-semibold">Product</th>
            <th className="text-center p-4 font-semibold">Price</th>
            <th className="text-center p-4 font-semibold">Quantity</th>
            <th className="text-right p-4 font-semibold">Subtotal</th>
          </tr>
        </thead>

        <CartItemsList cart={cart} onQuantityChange={onQuantityChange} onRemove={onRemove} />
      </table>
    </div>
  );
};

export default CartTable;
