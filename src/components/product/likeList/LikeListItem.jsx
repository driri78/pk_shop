import React from "react";

const LikeListItem = ({ product }) => {
  const { ko, en, price } = product;
  return (
    <tr>
      <td>
        <input type="checkbox" id="all" />
      </td>
      <td>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/pokemonDolls/${en}1.jpg`}
            alt=""
          />
          <span>{ko}</span>
        </div>
      </td>
      <td>{price.toLocaleString("ko-KR")}원</td>
    </tr>
  );
};

export default LikeListItem;
