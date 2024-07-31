import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props){
    return(
        <>
            <Header title={ props.title }/>
            { props.children }
            <Footer />
        </>
    )
}

export default Layout;