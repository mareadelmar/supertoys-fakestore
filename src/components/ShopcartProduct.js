import React from "react";
import imgProduct from "../statics/images/orkotoys-marty.jpeg";

const ShopcartProduct = (props) => {
    const { nombre, precio } = props;

    return (
        <div>
            <img src={imgProduct} alt="" />
            <h1>{nombre}</h1>
            <h3>$ {precio}</h3>
        </div>
    );
};

export default ShopcartProduct;
