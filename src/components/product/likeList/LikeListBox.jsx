import React, { useEffect, useState } from "react";
import LikeListItem from "./LikeListItem";
import "../../../assets/style/product/LikeList.css";
const LikeListBox = () => {
  const [likeList, setLikeList] = useState([]);
  console.log(likeList);
  useEffect(() => {
    if (window.localStorage.getItem("LikeList")) {
      const list = JSON.parse(window.localStorage.getItem("LikeList"));
      setLikeList(list);
    }
  }, []);
  return (
    <div>
      <div>관심 상품</div>
      <table>
        <colgroup>
          <col width="12%" />
          <col />
          <col width="12%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="all" />
              <label htmlFor="all">all</label>
            </th>
            <th>상품명</th>
            <th>상품 가격</th>
          </tr>
        </thead>
        <tbody>
          {likeList.map((product) => (
            <LikeListItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <div>
        <button>선택 상품 삭제</button>
      </div>
    </div>
  );
};

export default LikeListBox;
