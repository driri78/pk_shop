import React, { useEffect, useState } from "react";
import DollItem from "./DollItem";
import DollMenu from "./dollMenu/DollMenu";
import { useProduct } from "../../../contexts/ProductContext";
import Paging from "../paging/Paging";
import { dollPageJson, viewItem } from "../../../customFcn/paging";

const DollBox = () => {
  const { pendding, products, searchParams } = useProduct();

  const [viewProducts, SetViewProducts] = useState(
    viewItem(products, dollPageJson(products))
  );
  useEffect(() => {
    SetViewProducts(viewItem(products, dollPageJson(products)));
  }, [searchParams]);
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
      <Paging pageJson={dollPageJson(products)} />
    </div>
  );
};

export default DollBox;
