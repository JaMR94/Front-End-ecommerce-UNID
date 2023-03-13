import React from "react";
import Head from "next/head";
import Navpage from "../Navpage";
import Monthly from "../monthly";
import Footer from "../footer";
import Carrito from "../Carrito";
// import SearchBar from "../SearchBar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>this is a boostrap test</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      {/* <SearchBar/> */}
      <Carrito/>
      <Navpage/>
      <div>{props.children}</div>
      <Monthly/>
      <Footer/>
    </div>
  );
};

export default Layout;
