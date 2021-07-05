import React from "react";
import "../statics/styles/components/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container flex">
            <footer>
                <p>
                    Esta es una tienda falsa
                    <span aria-label="heart icon" role="img">
                        ♥️
                    </span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
