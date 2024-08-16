import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLikeList } from "../../../contexts/LikeListContext";

const LikeListItem = ({ product }) => {
  const { id, ko, en, price } = product;
  const { checkList, checkListHandle } = useLikeList();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkList.find((item) => item.id === id)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checkList, id]);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={`like_${en}`}
          checked={checked}
          onChange={(e) => {
            checkListHandle(e.target.checked, product);
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
