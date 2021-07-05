import { useState, useEffect } from "react";
import { getProducts } from "../services/getProducts";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts().then((prods) => {
            console.log(prods);
            setProducts(prods);
            setLoading(false);
        });
    }, []);

    return { products, loading };
}
