import React from "react";
import style from "../../../../assets/style/product/dollDetail/Review.module.css";
import StarRating from "../../starRating/StarRating";
const ReviewItem = ({ review }) => {
  return (
    <div className={style.Review_item}>
      <div className={style.user_info}>
        <div className={style.section01}>
          <div
            className={style.icon}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/header/icon_ball_c.jpg)`,
            }}
          ></div>
          <div>{review.name}</div>
        </div>
        <div className={style.section02}>
          <StarRating rating={review.starRating} />
          <div>{review.date}</div>
        </div>
      </div>
      <div className={style.comment}>{review.comment}</div>
    </div>
  );
};

export default ReviewItem;
