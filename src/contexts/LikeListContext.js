import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { likeListPageJson, viewItem } from "../customFcn/paging";

const LikeListContext = createContext();

const LikeListProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [likeList, setLikeList] = useState([]);
  const [isList, setIsList] = useState(false);

  const [checkList, setCheckList] = useState([]);

  const checkListHandle = (check, id) => {
    if (check) {
      setCheckList([...checkList, { id }]);
    } else {
      const index = checkList.findIndex((item) => item.id === id);
      checkList.splice(index, 1);
      setCheckList(checkList);
    }
  };

  const reloadLikeList = () => {
    setCheckList([]);
    if (window.localStorage.getItem("LikeList")) {
      const list = JSON.parse(window.localStorage.getItem("LikeList"));
      setLikeList(viewItem(list, likeListPageJson(list)));
      setIsList(true);
    } else {
      setIsList(false);
    }
  };

  useEffect(() => {
    setCheckList([]);
    reloadLikeList();
  }, [searchParams]);
  return (
    <LikeListContext.Provider
      value={{
        isList,
        likeList,
        checkList,
        reloadLikeList,
        checkListHandle,
      }}
    >
      {children}
    </LikeListContext.Provider>
  );
};

const useLikeList = () => useContext(LikeListContext);

export { LikeListProvider, useLikeList };
