import React from "react";
import { Link } from "react-router-dom";
import { useAll } from "../../contexts/AllContext";

const NoProductShort = () => {
  const { dispatch } = useAll();
  return (
    <div className="noProduct_shortMenu" title="포켓몬 스토어">
      <Link
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "basic", payload: "/product/doll" });
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/shortMenu/Logo_store.jpg`}
          alt="포켓몬 스토어"
        />
      </Link>
    </div>
  );
};

export default NoProductShort;
