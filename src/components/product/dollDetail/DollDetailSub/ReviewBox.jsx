import React from "react";
import style from "../../../../assets/style/product/dollDetail/Review.module.css";
import reviewData from "../../../../api/reviewData.json";
import ReviewItem from "./ReviewItem";
const ReviewBox = () => {
  return (
    <div className={style.Review_box}>
      {reviewData.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewBox;
