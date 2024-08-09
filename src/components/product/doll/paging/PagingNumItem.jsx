import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../../../../contexts/ProductContext";
import { createURL } from "../../../../creatURL/createURL";

const PagingNumItem = ({ num }) => {
  const { searchParams } = useProduct();
  const navigate = useNavigate();

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
        navigate(createURL(undefined, num));
      }}
    >
      {num + 1}
    </Link>
  );
};

export default PagingNumItem;
