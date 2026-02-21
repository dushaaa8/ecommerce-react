import React from "react";
import { Link } from "react-router-dom";

const CheckoutBlock = ({ cart, totalCost }) => {
  return (
    <div className="bg-neutral-01 rounded-lg shadow-sm p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-neutral-04">
          <span>Subtotal ({cart.length} items)</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-neutral-04">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>

        <div className="border-t border-neutral-03 pt-4">
          <div className="flex justify-between text-lg font-semibold text-neutral-07">
            <span>Total</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => alert("Checkout functionality coming soon!")}
        className="w-full bg-primary text-neutral-01 py-3 rounded-lg font-medium hover:bg-neutral-07 transition-colors cursor-pointer"
      >
        Proceed to Checkout
      </button>

      <Link
        to={"/catalog"}
        className="block w-full mt-3 text-center border border-neutral-04 text-neutral-07 py-3 rounded-lg font-medium hover:bg-neutral-02 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutBlock;
