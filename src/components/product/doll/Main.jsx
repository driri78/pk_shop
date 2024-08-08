import React from "react";
import "../../../assets/style/product/doll/Doll.css";
import DollBox from "./DollBox";
import { ProductProvider } from "../../../contexts/ProductContext";

const Main = () => {
  return (
    <ProductProvider>
      <DollBox />
    </ProductProvider>
  );
};

export default Main;
