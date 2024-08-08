import React, { useEffect, useState } from "react";
import style from "../../../assets/style/product/starRating/StarRating.module.css";
import StarRatingItem from "./StarRatingItem";
const StarRating = ({ rating }) => {
  const [isTrue, setIsTrue] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        arr.push({ id: i, val: true });
      } else {
        arr.push({ id: i, val: false });
      }
    }
    setIsTrue(arr);
  }, [rating]);
  return (
    <ul className={style.star_box}>
      {isTrue.map((isTrue) => (
        <StarRatingItem key={isTrue.id} isTrue={isTrue.val} />
      ))}
    </ul>
  );
};

export default StarRating;
