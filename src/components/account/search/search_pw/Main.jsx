import React from "react";
import "../../../../assets/style/account/search/Search.css";
import { SearchPwProvider } from "../../../../contexts/SearchPwContext";
import SubMenuBox from "../../subMenu/SubMenuBox";
import SearchPwBox from "./SearchPwBox";

const Main = () => {
  const subMenu = [
    { id: 1, name: "아이디 찾기", path: "/account/search_id" },
    { id: 2, name: "로그인", path: "/account/sign_in" },
    { id: 3, name: "회원가입", path: "/account/sign_up" },
  ];
  return (
    <SearchPwProvider>
      <div className="search_container">
        <SearchPwBox />
        <SubMenuBox subMenu={subMenu} />
      </div>
    </SearchPwProvider>
  );
};

export default Main;
