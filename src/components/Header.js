import React from "react";
import { Link } from "react-router-dom";
import "../statics/styles/components/Header.css";
import navMovil from "../statics/images/nav-movil.svg";

const Header = () => {
    return (
        <header>
            <div className="navmovil flex">
                <img src={navMovil} alt="" />
            </div>
            <div className="navweb">
                <nav className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li>
                            <Link to="/carrito">Carrito</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link to="/">
                <h1 className="header-title">SuperToys</h1>
            </Link>
        </header>
    );
};

export default Header;
