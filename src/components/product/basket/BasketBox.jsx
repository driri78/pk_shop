import React from "react";
import "../../../assets/style/product/doll/Basket.css";
import BasketItem from "./BasketItem";
import BasketResult from "./BasketResult";
import BasketBtn from "./BasketBtn";

const BasketBox = () => {
  return (
    <div className="basket_box">
      <div>장바구니</div>
      <table>
        <colgroup>
          <col />
          <col width="33%" />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkBox" id="all" />
              <label htmlFor="all"></label>
            </th>
            <th>상품/옵션 정보</th>
            <th>수량</th>
            <th>상품 금액</th>
            <th>할인/적립</th>
            <th>합계 금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </tbody>
      </table>
      <div>
        <BasketResult />
      </div>
      <div>
        <BasketBtn />
      </div>
    </div>
  );
};

export default BasketBox;
