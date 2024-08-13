import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LikeListItem = ({ product, allCheck }) => {
  const { ko, en, price } = product;
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setCheck(allCheck);
  }, [allCheck]);
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={`like_${en}`}
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
        />
        <label htmlFor={`like_${en}`}></label>
      </td>
      <td>
        <div>
          <img
            onClick={() => {
              navigate(`/product/doll/${en}`);
            }}
            src={`${process.env.PUBLIC_URL}/images/pokemonDolls/${en}1.jpg`}
            alt=""
          />
          <div>
            <span
              onClick={() => {
                navigate(`/product/doll/${en}`);
              }}
            >
              {ko}
            </span>
          </div>
        </div>
      </td>
      <td>{price.toLocaleString("ko-KR")}원</td>
    </tr>
  );
};

export default LikeListItem;
