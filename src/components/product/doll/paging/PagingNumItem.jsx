import React from "react";
import { Link } from "react-router-dom";
import { useAll } from "../../../../contexts/AllContext";
import { useProduct } from "../../../../contexts/ProductContext";

const PagingNumItem = ({ num }) => {
  const { dispatch } = useAll();
  const { searchParams } = useProduct();

  return (
    <Link
      style={
        num === +searchParams.get("nowPage")
          ? { fontWeight: "bold", cursor: "default" }
          : { fontWeight: "normal" }
      }
      onClick={(e) => {
        e.preventDefault();
        if (num === +searchParams.get("nowPage")) {
          console.log("같음");
          return;
        }
        dispatch({ type: "pageNum", payload: num });
      }}
    >
      {num + 1}
    </Link>
  );
};

export default PagingNumItem;
