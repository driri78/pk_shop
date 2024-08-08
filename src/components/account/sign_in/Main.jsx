import React, { Fragment } from "react";
import "../../../assets/style/account/sign_in/Login.css";
import LoginBox from "./LoginBox";
import { LoginProvider } from "../../../contexts/LoginContext";
import LoginBtn from "./LoginBtn";
import SubMenuBox from "../subMenu/SubMenuBox";

const Main = () => {
  const subMenu = [
    { id: 1, name: "아이디 찾기", path: "/account/search_id" },
    { id: 2, name: "비밀번호 찾기", path: "/account/search_pw" },
    { id: 3, name: "회원가입", path: "/account/sign_up" },
  ];

  return (
    <Fragment>
      <div className="login_content">
        <LoginProvider>
          <LoginBox>
            <LoginBtn />
          </LoginBox>
        </LoginProvider>
        <SubMenuBox subMenu={subMenu} />
      </div>
    </Fragment>
  );
};

export default Main;
