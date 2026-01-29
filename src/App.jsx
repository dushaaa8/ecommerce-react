import {useState} from 'react'
import NotificationBar from "./components/layout/NotificationBar.jsx";
import NavigationBar from "./components/layout/NavigationBar.jsx";
import ShopPlaceholder from "./components/layout/ShopPlaceholder.jsx";
import {useFetchProducts} from "./hooks/useFetch.js";
import {useNotificationTimer} from "./hooks/useNotificationTimer.js";
import ProductsList from "./components/layout/ProductsList.jsx";
import Newsletter from "./components/layout/Newsletter.jsx";
import Footer from "./components/layout/Footer.jsx";
import SelectFilter from "./components/ui/SelectFilter.jsx";
import FiltersSection from "./components/layout/FiltersSection.jsx";

function App() {

    const [isNotification, changeNotificationVisibility] = useState(true)
    const { data: products, isLoading, error } = useFetchProducts();
    useNotificationTimer(isNotification,changeNotificationVisibility)

    const [activeFilters, setActiveFilters] = useState({
        category: "All Categories",
        price: "All Price"
    })

    const filteredProducts = products.filter(product => {
        const categoryMatch =
            activeFilters.category === 'All Categories' ||
            product.category === activeFilters.category;

        let priceMatch = true;
        if (activeFilters.price !== 'All Price') {
            const clearFilters = activeFilters.price.replace(/[^\d\.-]/g, '')
            console.log(clearFilters)
            const [min, max] = clearFilters.split('-',).map(Number);

            if (max) {
                priceMatch = product.price >= min && product.price <= max;
            } else {
                priceMatch = product.price >= min;
            }
        }

        return categoryMatch && priceMatch;
    });

    if(error) return <p>Something wrong with fetching data!</p>

    return (
        <div className="flex flex-col items-center">
            <NotificationBar value={30} isNotification={isNotification}
                             changeNotificationVisibility={changeNotificationVisibility}/>
            <NavigationBar/>
            <ShopPlaceholder/>
            <FiltersSection activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
            {filteredProducts.length
                ?<ProductsList products={filteredProducts} isLoading={isLoading}/>
                :<p className="py-10">Items not found</p>
            }

            <Newsletter/>
            <Footer/>
      </div>
  )
}

export default App
