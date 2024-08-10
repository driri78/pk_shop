import React, { useEffect, useState } from "react";
import DollItem from "./DollItem";
import DollMenu from "./dollMenu/DollMenu";
import Paging from "../paging/Paging";
import { dollPageJson, viewItem } from "../../../customFcn/paging";
import { getDollData } from "../../../customFcn/getDollData";
import dollData from "../../../api/dollData.json";
import { useSearchParams } from "react-router-dom";
const DollBox = () => {
  const [pending, setPending] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewProducts, SetViewProducts] = useState(
    viewItem(getDollData(dollData), dollPageJson(getDollData(dollData)))
  );

  useEffect(() => {
    const products = getDollData(dollData);
    SetViewProducts(viewItem(products, dollPageJson(products)));
  }, [searchParams]);

  return (
    <div className="product_content">
      <DollMenu products={getDollData(dollData)} />
      <div className="doll_box">
        {pending ? (
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
      <Paging pageJson={dollPageJson(getDollData(dollData))} />
    </div>
  );
};

export default DollBox;
