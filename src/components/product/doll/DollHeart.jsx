import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const DollHeart = ({ product }) => {
  const [like, setLike] = useState(null);

  useEffect(() => {
    let prevLikeList = [];
    let findIndex = -1;
    const { productId, productPrice, productName, pokemonName } = product;
    if (window.localStorage.getItem("LikeList")) {
      prevLikeList = JSON.parse(window.localStorage.getItem("LikeList"));
      findIndex = prevLikeList.findIndex((item) => item.id === productId);
    }
    if (like === null) {
      if (findIndex !== -1) {
        setLike(true);
        return;
      }
    } else {
      if (like) {
        if (findIndex !== -1) return;
        window.localStorage.setItem(
          "LikeList",
          JSON.stringify([
            ...prevLikeList,
            {
              id: productId,
              ko: productName,
              en: pokemonName,
              price: productPrice,
            },
          ])
        );
      } else {
        prevLikeList.splice(findIndex, 1);
        window.localStorage.setItem("LikeList", JSON.stringify(prevLikeList));
      }
    }
  }, [product, like]);
  return (
    <div
      className="heart"
      onClick={() => setLike(!like)}
      style={like ? { color: "#f00000" } : { color: "#aaa" }}
    >
      {like ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </div>
  );
};

export default DollHeart;
