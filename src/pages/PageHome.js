import React from "react";
import "../statics/styles/pages/PageHome.css";
import imgProduct from "../statics/images/orkotoys-marty.jpeg";
import useProducts from "../hooks/useProducts";

const PageHome = () => {
    const { products } = useProducts();
    const selected = products[0];
    //console.log(selected);

    const handleClick = () => {
        console.log("comprar producto seleccionad");
    };
    return (
        <section className="home-container">
            {selected ? (
                <div className="flex splash-container">
                    <div className="selected-content">
                        <h2>¡Producto seleccionado!</h2>
                        <p>
                            <strong>{selected.nombre}</strong>
                        </p>
                        <p>{selected.descripcion}</p>
                        <h3>$ {selected.precio}</h3>
                        <button onClick={handleClick} className="btn-home">
                            agregar al carrito
                        </button>
                    </div>
                    <div className="selected-img">
                        <img src={imgProduct} alt="" />
                    </div>
                </div>
            ) : (
                <p>cargando...</p>
            )}
            <div className="flex home-us">
                <h3>Nosotros</h3>
                <p>
                    Somos un emprendimiento nuevo, falso y en crecimiento. Nace
                    de una estudiante que quiere probar Mongo Atlas y Strapi
                    para realizar una tienda virtual.
                </p>
            </div>
        </section>
    );
};

export default PageHome;
