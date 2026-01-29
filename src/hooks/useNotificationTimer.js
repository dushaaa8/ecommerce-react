import { useEffect } from 'react';

export const useNotificationTimer = (isVisible, setVisibility, delay = 35000) => {
    useEffect(() => {
        let timer;
        if (!isVisible) {
            timer = setTimeout(() => {
                setVisibility(true);
            }, delay);
        }
        return () => clearTimeout(timer);
    }, [isVisible, setVisibility, delay]);
};