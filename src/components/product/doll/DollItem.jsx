import React, { useState } from "react";
import DollHeart from "./DollHeart";
import StarRating from "../starRating/StarRating";
import { useAll } from "../../../contexts/AllContext";

const DollItem = ({ product }) => {
  const { productName, pokemonName, productPrice, productSize, productCount } =
    product;
  const { dispatch } = useAll();
  const [hover, setHover] = useState(true);
  return (
    <div className="doll_item">
      <DollHeart product={product} />
      <div
        className="content"
        onClick={() =>
          dispatch({ type: "basic", payload: `/product/doll/${pokemonName}` })
        }
      >
        <div
          onMouseOver={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
          className="doll_img"
          style={
            hover
              ? {
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}1.jpg)`,
                }
              : {
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}2.jpg)`,
                }
          }
        ></div>
        <div>
          <div>{productName} 인형</div>
          <div className="starRating_box">
            <StarRating />
          </div>
          <div className="price_font">
            {productPrice.toLocaleString("ko-KR")}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollItem;
