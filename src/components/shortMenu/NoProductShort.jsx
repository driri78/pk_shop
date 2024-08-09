import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NoProductShort = () => {
  const navigate = useNavigate();
  return (
    <div className="noProduct_shortMenu" title="포켓몬 스토어">
      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate("/product/doll");
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
