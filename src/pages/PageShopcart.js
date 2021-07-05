import React, { useState, useEffect } from "react";
import "../statics/styles/pages/PageShopcart.css";
import useProducts from "../hooks/useProducts";
import ShopcartProduct from "../components/ShopcartProduct";

const PageShopcart = () => {
    const { products } = useProducts();
    const [shopcart, setShopcart] = useState([]);
    console.log(products);

    useEffect(() => {
        if (localStorage.getItem("compras")) {
            const LS = localStorage.getItem("compras");
            const LSArray = LS.split(",");
            let selectProducts = [];

            for (let id of LSArray) {
                for (let prod of products) {
                    if (prod.id === id) {
                        selectProducts.push(prod);
                    }
                }
            }
            setShopcart(selectProducts);
            console.log(shopcart);
        }
    }, [products, shopcart]);
    return (
        <div>
            <h2>Carrito</h2>
            {shopcart.length > 0 ? (
                shopcart.map((item, i) => {
                    return <ShopcartProduct {...item} key={item.id + i} />;
                })
            ) : (
                <p>¡Agrega productos a tu carrito!</p>
            )}
        </div>
    );
};

export default PageShopcart;
