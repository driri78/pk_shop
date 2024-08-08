import React, { useState } from "react";
import "../../../../assets/style/product/dollDetail/DollDetailTab.css";
import Description from "./Description";
import ReviewBox from "./ReviewBox";
import TabBtn from "./TabBtn";

const DollDetailSub = () => {
  const menu = [
    { id: 1, name: "상품 상세정보" },
    { id: 2, name: "상품 리뷰" },
  ];
  const [isReview, setIsReview] = useState(menu[0].name);
  return (
    <div className="dollDetail_tab_box">
      <div className="tab_btn">
        {menu.map((menu) => (
          <TabBtn
            key={menu.id}
            menu={menu}
            isReview={isReview}
            setIsReview={setIsReview}
          />
        ))}
      </div>
      <div className="tab_content">
        {isReview === "상품 리뷰" ? <ReviewBox /> : <Description />}
      </div>
    </div>
  );
};

export default DollDetailSub;
