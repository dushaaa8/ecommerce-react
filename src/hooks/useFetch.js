import { useState, useEffect } from 'react';

export const useFetchProducts = (id = null) => {
    const [data, setData] = useState(id ? null : []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const url = id
                    ? `https://fakestoreapi.com/products/${id}`
                    : "https://fakestoreapi.com/products";

                const response = await fetch(url);
                if (!response.ok) throw new Error("Error loading data!");

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]); // Перезапускаем, если изменился id

    return { data, isLoading, error };
};