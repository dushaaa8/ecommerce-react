import {useState} from 'react'
import NotificationBar from "./components/layout/NotificationBar.jsx";
import NavigationBar from "./components/layout/NavigationBar.jsx";
import {useNotificationTimer} from "./hooks/useNotificationTimer.js";
import Newsletter from "./components/layout/Newsletter.jsx";
import Footer from "./components/layout/Footer.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {

    const [isNotification, changeNotificationVisibility] = useState(true)
    useNotificationTimer(isNotification,changeNotificationVisibility)



    return (
        <BrowserRouter>
            <div className="flex flex-col items-center">
                <NotificationBar value={30} isNotification={isNotification}
                                 changeNotificationVisibility={changeNotificationVisibility}/>
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
