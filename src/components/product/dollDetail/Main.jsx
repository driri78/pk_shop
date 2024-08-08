import React from "react";
import { ProductDetailProvider } from "../../../contexts/ProductDetailContext";
import DollDetailBox from "./dollDetailMain/DollDetailBox";

const Main = () => {
  return (
    <ProductDetailProvider>
      <DollDetailBox />
    </ProductDetailProvider>
  );
};

export default Main;
