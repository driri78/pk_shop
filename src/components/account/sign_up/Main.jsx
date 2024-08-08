import React, { Fragment } from "react";
import "../../../assets/style/account/sign_up/Register.css";
import RegisterBox from "./RegisterBox";
import { RegisterProvider } from "../../../contexts/RegisterContext";
import SubMenuBox from "../subMenu/SubMenuBox";

const Main = () => {
  const subMenu = [
    { id: 1, name: "아이디 찾기", path: "/account/search_id" },
    { id: 2, name: "비밀번호 찾기", path: "/account/search_pw" },
    { id: 3, name: "로그인", path: "/account/sign_in" },
  ];
  return (
    <Fragment>
      <RegisterProvider>
        <RegisterBox />
      </RegisterProvider>
      <SubMenuBox subMenu={subMenu} />
    </Fragment>
  );
};

export default Main;
