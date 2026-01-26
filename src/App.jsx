import {useEffect, useState} from 'react'
import NotificationBar from "./components/layout/NotificationBar.jsx";
import NavigationBar from "./components/layout/NavigationBar.jsx";
import ShopPlaceholder from "./components/layout/ShopPlaceholder.jsx";
import ProductCard from "./components/layout/ProductCard.jsx";

function App() {

    const [isNotification, changeNotificationVisibility] = useState(true)
    const [product, setProduct] = useState(
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }
    )

    useEffect(() => {
        let timer;
        if (!isNotification) {
            timer = setTimeout(() => {
                changeNotificationVisibility(true);
            }, 35000);
        }

        return () => clearTimeout(timer);
    }, [isNotification]);

  return (
      <div className="flex flex-col items-center">
        <NotificationBar value={30} isNotification={isNotification} changeNotificationVisibility={changeNotificationVisibility}/>
        <NavigationBar/>
        <ShopPlaceholder/>
        <section className="grid grid-cols-4 w-[1120px] gap-[24px] py-10">
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
        </section>
      </div>
  )
}

export default App
