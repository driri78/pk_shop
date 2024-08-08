import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const DollHeart = ({ product }) => {
  const [like, setLike] = useState(false);
  useEffect(() => {
    const prevLikeList = localStorage.getItem("likeList");
    const likeList = {
      ...JSON.parse(prevLikeList),
      id: product.productId,
    };
    if (like) {
      localStorage.setItem("likeList", JSON.stringify(likeList));
    } else {
    }
  }, [like]);
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
