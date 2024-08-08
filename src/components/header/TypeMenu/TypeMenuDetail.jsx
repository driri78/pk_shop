import React, { useEffect, useState } from "react";
import style from "../../../assets/style/header/TypeMenu.module.css";
const MenuDetail = ({ type, typeArr, dispatch }) => {
  const [check, setCheck] = useState(false);
  const checkTypeArr = () => {
    if (!check) {
      dispatch({ type: "typeAdd", payload: type.en });
    } else {
      dispatch({ type: "typeSub", payload: type.en });
    }
  };

  useEffect(() => {}, [check]);

  return (
    <li
      className={style.menu_font}
      style={check ? { background: type.color } : { background: "transparent" }}
    >
      <label
        htmlFor={type.id}
        style={check ? { color: "#fff" } : { color: "#666" }}
      >
        {type.ko}
      </label>
      <input
        type="checkbox"
        id={type.id}
        value={check}
        onChange={(e) => {
          if (typeArr.length >= 2 && !check) {
            window.alert("타입은 2개까지만 선택 가능합니다.");
            return;
          }
          checkTypeArr();
          console.log(typeArr);
          setCheck(!check);
        }}
      />
    </li>
  );
};

export default MenuDetail;
