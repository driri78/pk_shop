import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLikeList } from "../../../contexts/LikeListContext";

const LikeListItem = ({ product }) => {
  const { id, ko, en, price } = product;
  const { checkListHandle } = useLikeList();
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={`like_${en}`}
          checked={check}
          onChange={(e) => {
            setCheck(!check);
            checkListHandle(!check, id);
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
