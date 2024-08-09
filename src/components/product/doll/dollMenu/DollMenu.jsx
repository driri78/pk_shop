import React from "react";
import { useProduct } from "../../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { createURL } from "../../../../creatURL/createURL";
const DollMenu = () => {
  const { products, searchParams } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="doll_menu">
      <div>{`총 ${products.length}개의 상품`}</div>
      <ul className="product_sort">
        <li
          style={
            searchParams.get("order") === "desc"
              ? { fontWeight: 700, color: "#444" }
              : {}
          }
          onClick={() =>
            navigate(createURL(undefined, undefined, undefined, "desc"))
          }
        >
          낮은가격순
        </li>
        <li
          style={
            searchParams.get("order") === "asc"
              ? { fontWeight: 700, color: "#444" }
              : {}
          }
          onClick={() =>
            navigate(createURL(undefined, undefined, undefined, "asc"))
          }
        >
          높은가격순
        </li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
