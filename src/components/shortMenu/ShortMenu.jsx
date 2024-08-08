import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/style/shortMenu/ShortMenu.css";
import ProductShort from "./ProductShort";
import NoProductShort from "./NoProductShort";

const ShortMenu = () => {
  const [isProduct, SetIsroduct] = useState();
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  useEffect(() => {
    if (pathArr[1] !== "product") {
      SetIsroduct(false);
    } else {
      SetIsroduct(true);
    }
  }, [pathArr, SetIsroduct]);

  return (
    <div className="short_menu">
      {isProduct ? <ProductShort /> : <NoProductShort />}
    </div>
  );
};

export default ShortMenu;
