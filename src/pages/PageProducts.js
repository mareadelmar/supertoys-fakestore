import React from "react";
import "../statics/styles/pages/PageProducts.css";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

const PageProducts = () => {
    const { products } = useProducts();
    console.log(products);

    return (
        <section className="products-container">
            <h2>Productos</h2>
            <div className="flex products-products">
                {products.length > 0 &&
                    products.map((item) => {
                        return <Product {...item} key={item.id} />;
                    })}
            </div>
        </section>
    );
};

export default PageProducts;
