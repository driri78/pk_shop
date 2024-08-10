import React, { useEffect, useState } from "react";
import LikeListItem from "./LikeListItem";
import "../../../assets/style/product/LikeList.css";
import Paging from "../paging/Paging";
import { likeListPageJson, viewItem } from "../../../customFcn/paging";
import { useSearchParams } from "react-router-dom";
const LikeListBox = () => {
  const [likeList, setLikeList] = useState([]);
  const [isList, setIsList] = useState(false);
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
  return (
    <div>
      <div>관심 상품 총</div>
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
      <Paging
        pageJson={
          isList
            ? likeListPageJson(
                JSON.parse(window.localStorage.getItem("LikeList"))
              )
            : []
        }
      />
      <div>
        <button>선택 상품 삭제</button>
      </div>
    </div>
  );
};

export default LikeListBox;
