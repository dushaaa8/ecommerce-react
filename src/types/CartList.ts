interface CartList {
    cart:CartItem[];
    onQuantityChange:(id:number, quantity:number) => void;
    onRemove:(id:number) => void;
}
interface CartRow{
    item:CartItem;
}