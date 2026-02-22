interface CartStorage {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id:number) => void;
    updateQuantity: (id:number, quantity:number) => void;
}
interface CartItem extends Product{
    quantity:number;
}