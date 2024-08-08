import React from "react";
import "../../../../assets/style/account/search/Search.css";
import SearchIdBox from "./SearchIdBox";
import SubMenuBox from "../../subMenu/SubMenuBox";
import { SearchIdProvider } from "../../../../contexts/SearchIdContext";

const Main = () => {
  const subMenu = [
    { id: 1, name: "비밀번호 찾기", path: "/account/search_pw" },
    { id: 2, name: "로그인", path: "/account/sign_in" },
    { id: 3, name: "회원가입", path: "/account/sign_up" },
  ];
  return (
    <SearchIdProvider>
      <div className="search_container">
        <SearchIdBox />
        <SubMenuBox key={subMenu.id} subMenu={subMenu} />
      </div>
    </SearchIdProvider>
  );
};

export default Main;
