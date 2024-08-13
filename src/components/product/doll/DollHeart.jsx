import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { likeListController } from "../../../customFcn/likeListController";

const DollHeart = ({ product }) => {
  const [like, setLike] = useState(null);

  useEffect(() => {
    likeListController(product, like, setLike);
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
