interface UseFetch<T> {
    data:T | null;
    isLoading:boolean;
    error:string | null;
}