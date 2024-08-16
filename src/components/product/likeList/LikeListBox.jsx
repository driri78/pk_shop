import React, { useEffect, useState } from "react";
import "../../../assets/style/product/LikeList.css";
import LikeListItem from "./LikeListItem";
import LikeListBtn from "./LikeListBtn";
import Paging from "../paging/Paging";
import { likeListPageJson } from "../../../customFcn/paging";
import { useLikeList } from "../../../contexts/LikeListContext";
const LikeListBox = () => {
  const { likeList, isList, allCheckListHandle, checkList } = useLikeList();
  const [allChecked, setAllChecked] = useState(false);
  useEffect(() => {
    if (!likeList.length) {
      setAllChecked(false);
      return;
    }
    if (checkList.length === likeList.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [likeList, checkList]);
  console.log(isList);

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
                checked={allChecked}
                onChange={(e) => {
                  allCheckListHandle(e.target.checked);
                }}
              />
              <label htmlFor="all"></label>
            </th>
            <th>상품명</th>
            <th>상품 가격</th>
          </tr>
        </thead>
        {isList && (
          <tbody>
            {likeList.map((product) => (
              <LikeListItem key={product.id} product={product} />
            ))}
          </tbody>
        )}
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
