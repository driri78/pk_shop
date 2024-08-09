import React, { Fragment } from "react";
import ScrollToTop from "../components/scroll/ScrollToTop";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ShortMenu from "../components/shortMenu/ShortMenu";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Fragment>
        <Header />
        <ShortMenu />
        <main>
          <Outlet />
        </main>
      </Fragment>
      <Footer />
    </div>
  );
};

export default ShopLayout;
