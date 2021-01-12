import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import mainImg from "../utilities/imgs/kapalo-tax.jpg";

const Layout = ({ className, children }) => (
  <div>
    <Header></Header>
    <div className="main">
      <img
        src={mainImg}
        className="img-fluid main-img"
        alt="taxes main logo tucson kapalo"
      ></img>
    </div>
    <div className={className}>{children}</div>
    <Footer></Footer>
  </div>
);

export default Layout;
