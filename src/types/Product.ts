
interface ProductProps{
    product:Product;
}

interface Product{
    id:number;
    price:number;
    description:string;
    category:string;
    title:string;
    image:string;
    rating:Rating
    quantity?:number | undefined;
}
interface Rating{
    rate:number;
    count:number;
}