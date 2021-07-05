import React from "react";
import "../statics/styles/components/Product.css";
import imgProduct from "../statics/images/orkotoys-marty.jpeg";

const Producto = (props) => {
    const { id, nombre, descripcion, precio, nacionalidad, fabricante } = props;

    const handleClick = () => {
        let shopcart;
        if (localStorage.getItem("compras")) {
            shopcart = localStorage.getItem("compras");
            shopcart = shopcart + "," + id;
            localStorage.setItem("compras", shopcart);
            console.log("agregar al carrito con localstorage", id);
            return;
        }
        shopcart = id;
        localStorage.setItem("compras", shopcart);
        console.log("agregar al carrito por primera vez", id);
    };

    return (
        <div className="flex product-container">
            <div className="flex product-img">
                <img src={imgProduct} alt="" />
            </div>
            <h1 className="product-text">
                <strong>{nombre}</strong>
            </h1>
            <p className="product-text">{descripcion}</p>
            <p className="product-text">
                <strong>Origen:</strong> {nacionalidad}
            </p>
            <p className="product-text">
                <strong>Fabricante:</strong> {fabricante}
            </p>
            <h4 className="product-text price">$ {precio}</h4>
            <button onClick={handleClick} className="btn-buy">
                agregar al carrito
            </button>
        </div>
    );
};

export default Producto;
