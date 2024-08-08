import React from "react";
import { useProduct } from "../../../../contexts/ProductContext";
import { useAll } from "../../../../contexts/AllContext";
const DollMenu = () => {
  const { products, searchParams } = useProduct();
  const { dispatch } = useAll();
  return (
    <div className="doll_menu">
      <div>{`총 ${products.length}개의 상품`}</div>
      <ul className="product_sort">
        <li
          style={
            searchParams.get("order") === "desc"
              ? { fontWeight: 700, color: "#444" }
              : { fontWeight: 400, color: "#aaa" }
          }
          onClick={() => dispatch({ type: "order", payload: "desc" })}
        >
          낮은가격순
        </li>
        <li
          style={
            searchParams.get("order") === "asc"
              ? { fontWeight: 700, color: "#444" }
              : { fontWeight: 400, color: "#aaa" }
          }
          onClick={() => dispatch({ type: "order", payload: "asc" })}
        >
          높은가격순
        </li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
