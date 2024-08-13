import React, { useEffect, useState } from "react";
import LikeListItem from "./LikeListItem";
import "../../../assets/style/product/LikeList.css";
import Paging from "../paging/Paging";
import { likeListPageJson, viewItem } from "../../../customFcn/paging";
import { useSearchParams } from "react-router-dom";
const LikeListBox = () => {
  const [likeList, setLikeList] = useState([]);
  const [isList, setIsList] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (window.localStorage.getItem("LikeList")) {
      const list = JSON.parse(window.localStorage.getItem("LikeList"));
      setLikeList(viewItem(list, likeListPageJson(list)));
      setIsList(true);
      return;
    }
    setIsList(false);
  }, [searchParams]);

  useEffect(() => {
    setAllCheck(false);
  }, [searchParams.get("nowPage")]);

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
              <input
                type="checkbox"
                id="all"
                checked={allCheck}
                onChange={() => {
                  setAllCheck(!allCheck);
                }}
              />
              <label htmlFor="all"></label>
            </th>
            <th>상품명</th>
            <th>상품 가격</th>
          </tr>
        </thead>
        <tbody>
          {likeList.map((product) => (
            <LikeListItem
              key={product.id}
              product={product}
              allCheck={allCheck}
            />
          ))}
        </tbody>
      </table>
      <div className="btn">
        <button className="delete">선택 상품 삭제</button>
        <button className="add_basket">장바구니 담기</button>
      </div>
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
