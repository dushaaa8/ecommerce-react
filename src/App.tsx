import {useState} from 'react'
import NotificationBar from './components/layout/NotificationBar';
import NavigationBar from "./components/layout/NavigationBar";
import {useNotificationTimer} from "./hooks/useNotificationTimer";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/layout/Footer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

function App() {

    const [isVisible, setVisibility] = useState(true)
    useNotificationTimer({isVisible, setVisibility})



    return (
        <BrowserRouter>
            <div className="flex flex-col items-center">
                <NotificationBar value={30} isNotification={isVisible}
                                 changeNotificationVisibility={setVisibility}/>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/catalog" replace />} />
                    <Route path="/catalog" element={<CatalogPage/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/catalog/:id" element={<ProductDetail />} />
                </Routes>
                <Newsletter/>
                <Footer/>
          </div>
       </BrowserRouter>
  )
}

export default App
