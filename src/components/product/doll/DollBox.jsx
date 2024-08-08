import React, { useEffect, useState } from "react";
import DollItem from "./DollItem";
import DollMenu from "./dollMenu/DollMenu";
import Paging from "./paging/Paging";
import { useProduct } from "../../../contexts/ProductContext";

const DollBox = () => {
  const { pendding, viewProducts } = useProduct();

  return (
    <div className="product_content">
      <DollMenu />
      <div className="doll_box">
        {pendding ? (
          viewProducts.length ? (
            viewProducts.map((item) => (
              <DollItem key={item.pokemonName} product={item} />
            ))
          ) : (
            <div>상품을 찾을수 없습니다</div>
          )
        ) : (
          <div>로딩중.....</div>
        )}
      </div>
      <Paging />
    </div>
  );
};

export default DollBox;
