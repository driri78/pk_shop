import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="Logo_img" title="홈">
      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
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
