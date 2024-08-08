import React from "react";
import { Link } from "react-router-dom";
import { useAll } from "../../contexts/AllContext";

const Logo = () => {
  const { dispatch } = useAll();
  return (
    <div className="Logo_img" title="홈">
      <Link
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "basic", payload: "/" });
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/header/main_logo.jpg`}
          alt="로고 이미지"
        />
      </Link>
    </div>
  );
};

export default Logo;
