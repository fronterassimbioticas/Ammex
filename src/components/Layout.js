import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  useEffect(() => {
    // Load the Google Tag Manager script
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10951377934";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10951377934');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <>
      <Header title={props.title} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
