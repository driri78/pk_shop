import React from "react";

const BasketItem = () => {
  return (
    <tr>
      <td>
        <input type="checkBox" id="basketItem" />
        <label htmlFor="basketItem"></label>
      </td>
      <td>상품명</td>
      <td>수량</td>
      <td>상품 금액</td>
      <td>할인</td>
      <td>합계</td>
      <td>배송</td>
    </tr>
  );
};

export default BasketItem;
