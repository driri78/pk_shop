import React from "react";
import SubMenuItem from "./SubMenuItem";
import style from "../../../assets/style/account/SubMenu.module.css";
const SubMenuBox = ({ subMenu }) => {
  return (
    <div className={style.subMenu_container}>
      <ul className={style.subMenu_box}>
        {subMenu.map((subMenu) => (
          <SubMenuItem key={subMenu.id} subMenu={subMenu} />
        ))}
      </ul>
    </div>
  );
};

export default SubMenuBox;
