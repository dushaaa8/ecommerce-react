import { useState, useEffect } from 'react';

export const useFetchProducts = (id:number | string | null = null): UseFetch<Product | Product[]> => {
    const [data, setData] = useState<Product | Product[] | null>(id ? null : []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

                const result: Product | Product[] = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { data, isLoading, error };
};