import { useEffect } from 'react';

export const useNotificationTimer = ({isVisible, setVisibility, delay = 35000}:UseNotificationTimer) => {
    useEffect(() => {
        let timer: number;
        if (!isVisible) {
            timer = setTimeout(() => {
                setVisibility(true);
            }, delay);
        }
        return () => clearTimeout(timer);
    }, [isVisible, setVisibility, delay]);
};