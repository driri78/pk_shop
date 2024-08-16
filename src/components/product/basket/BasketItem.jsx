import React from "react";
import { useNavigate } from "react-router-dom";

const BasketItem = () => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <input type="checkBox" id="basketItem" />
        <label htmlFor="basketItem"></label>
      </td>
      <td>
        <div>
          <div>이미지</div>
          <div>
            <span>상품명</span>
          </div>
        </div>
      </td>
      <td>수량</td>
      <td>상품 금액</td>
      <td>할인</td>
      <td>합계</td>
      <td>배송</td>
    </tr>
  );
};

export default BasketItem;
