import React, { Fragment } from "react";

const StarRatingItem = ({ isTrue }) => {
  return (
    <Fragment>
      {isTrue ? (
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/star/star_rating_icon01.svg`}
            alt="별점 아이콘"
          />
        </li>
      ) : (
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/star/star_rating_icon02.svg`}
            alt="별점 아이콘"
          />
        </li>
      )}
    </Fragment>
  );
};

export default StarRatingItem;
