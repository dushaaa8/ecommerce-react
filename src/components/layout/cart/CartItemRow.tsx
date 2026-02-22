import React from "react";

const CartItemRow = ({item, onQuantityChange, onRemove}: {
      item: CartList['cart'][number];
      onQuantityChange: CartList['onQuantityChange'];
      onRemove: CartList['onRemove'];
    }) => {
  const handleDecrement = () => onQuantityChange(item.id, item.quantity - 1);
  const handleIncrement = () => onQuantityChange(item.id, item.quantity + 1);

  return (
    <tr className="border-b border-neutral-03 last:border-b-0">
      <td className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain bg-neutral-02"
          />
          <div>
            <h3 className="font-medium text-neutral-07 line-clamp-2">{item.title}</h3>
          </div>
        </div>
      </td>

      <td className="p-4 text-center text-neutral-07">${item.price.toFixed(2)}</td>

      <td className="p-4">
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={handleDecrement}
            className="w-8 h-8 flex items-center justify-center border border-neutral-04 rounded hover:bg-neutral-02 transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="w-12 text-center font-medium">{item.quantity}</span>

          <button
            type="button"
            onClick={handleIncrement}
            className="w-8 h-8 flex items-center justify-center border border-neutral-04 rounded hover:bg-neutral-02 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </td>

      <td className="p-4 text-right">
        <div className="flex flex-col items-end gap-2">
          <span className="font-semibold text-neutral-07">
            ${(item.price * item.quantity).toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="text-secondary-red text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItemRow;
