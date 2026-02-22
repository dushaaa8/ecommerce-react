import React from 'react';
import useCartStorage from "../store/useCartStorage";
import { Link } from "react-router-dom";
import CartTable from "../components/layout/cart/CartTable";
import CheckoutBlock from "../components/layout/cart/CheckoutBlock";

const CartPage = () => {
  const cart = useCartStorage((state) => state.cart);
  const updateQuantity = useCartStorage((state) => state.updateQuantity);
  const removeFromCart = useCartStorage((state) => state.removeFromCart);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
        <p className="text-neutral-04 mb-8">Add some products to get started!</p>
        <Link
          to={"/catalog"}
          className="bg-primary text-neutral-01 px-8 py-3 rounded-lg hover:bg-neutral-07 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartTable cart={cart} onQuantityChange={handleQuantityChange} onRemove={removeFromCart} />
        </div>

        <div className="lg:col-span-1">
          <CheckoutBlock cart={cart} totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;