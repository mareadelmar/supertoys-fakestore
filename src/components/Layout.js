import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    console.log(children);
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
