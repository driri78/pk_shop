import React, { useState } from "react";
import SearchPwBtn from "./SearchPwBtn";
import SearchTab from "../SearchTab";
import SearchPwEmail from "./item/SearchPwEmail";
import SearchPwPhone from "./item/SearchPwPhone";

const SearchPwBox = () => {
  const [tab, setTab] = useState(true);
  return (
    <div className="search_box">
      <SearchTab tab={tab} setTab={setTab} />
      <div>{tab ? <SearchPwEmail /> : <SearchPwPhone />}</div>
      <SearchPwBtn />
    </div>
  );
};

export default SearchPwBox;
