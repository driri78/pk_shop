import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createURL } from "../../../customFcn/createURL";

const PagingNumItem = ({ num, searchParams }) => {
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
