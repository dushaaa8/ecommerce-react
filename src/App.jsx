import {useEffect, useState} from 'react'
import NotificationBar from "./components/layout/NotificationBar.jsx";
import NavigationBar from "./components/layout/NavigationBar.jsx";
import ShopPlaceholder from "./components/layout/ShopPlaceholder.jsx";

function App() {

    const [isNotification, changeNotificationVisibility] = useState(true)

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
      <>
        <NotificationBar value={30} isNotification={isNotification} changeNotificationVisibility={changeNotificationVisibility}/>
        <NavigationBar/>
        <ShopPlaceholder/>
      </>
        )
}

export default App
