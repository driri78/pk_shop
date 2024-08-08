import React from "react";
import style from "../../assets/style/header/Lnb.module.css";
import { PiBasketFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAll } from "../../contexts/AllContext";

const Lnb = () => {
  const { dispatch } = useAll();
  return (
    <ul className={style.lnb}>
      <li title="포켓몬 도감">
        <Link
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "basic", payload: "/wiki" });
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/header/icon_ball_c.jpg`}
            alt="몬스터볼 이미지"
          />
          <span>포켓몬 도감</span>
        </Link>
      </li>
      <li title="로그인">
        <Link
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "basic", payload: "/account/sign_in" });
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/header/icon_login.jpg`}
            alt="로그인 이미지"
          />
          <span>로그인</span>
        </Link>
      </li>
      <li title="장바구니">
        <Link
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "basic", payload: "/product/basket" });
          }}
        >
          <PiBasketFill />
          <span>장바구니</span>
        </Link>
      </li>
    </ul>
  );
};

export default Lnb;
