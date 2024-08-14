import React from "react";
import { removeLikeList } from "../../../customFcn/likeListController";
import { useLikeList } from "../../../contexts/LikeListContext";

const LikeListBtn = () => {
  const { checkList, reloadLikeList } = useLikeList();
  return (
    <div className="likeList_btn">
      <button
        className="delete"
        onClick={() => {
          if (!checkList.length) {
            window.alert("삭제할 상품을 선택해주세요");
            return;
          }
          if (window.confirm("삭제하시겠습니까?")) {
            checkList.map((item) => removeLikeList(item.id));
            reloadLikeList();
          }
        }}
      >
        선택 상품 삭제
      </button>
      <button className="add_basket">장바구니 담기</button>
    </div>
  );
};

export default LikeListBtn;
