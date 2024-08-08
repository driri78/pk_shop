import React, { useState } from "react";
import SearchTab from "../SearchTab";
import SearchIdEmail from "./item/SearchIdEmail";
import SearchIdPhone from "./item/SearchIdPhone";
import SearchIdBtn from "./SearchIdBtn";
const SearchIdBox = () => {
  const [tab, setTab] = useState(true);

  return (
    <div className="search_box">
      <SearchTab tab={tab} setTab={setTab} />
      <div>{tab ? <SearchIdEmail /> : <SearchIdPhone />}</div>
      <SearchIdBtn />
    </div>
  );
};

export default SearchIdBox;
