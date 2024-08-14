import React, { useRef } from "react";
import LikeListItem from "./LikeListItem";
import "../../../assets/style/product/LikeList.css";
import Paging from "../paging/Paging";
import { likeListPageJson } from "../../../customFcn/paging";
import LikeListBtn from "./LikeListBtn";
import { useLikeList } from "../../../contexts/LikeListContext";
const LikeListBox = () => {
  const { likeList, isList } = useLikeList();
  const allRef = useRef();
  return (
    <div className="likeList_box">
      <div className="title">관심 상품</div>
      <div className="count">
        총{" "}
        {likeList.length
          ? JSON.parse(window.localStorage.getItem("LikeList"))?.length
          : 0}
        건
      </div>
      <table>
        <colgroup>
          <col width="10%" />
          <col />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="all" ref={allRef} />
              <label htmlFor="all"></label>
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
      <LikeListBtn />
      {isList && (
        <Paging
          pageJson={likeListPageJson(
            JSON.parse(window.localStorage.getItem("LikeList"))
          )}
        />
      )}
    </div>
  );
};

export default LikeListBox;
