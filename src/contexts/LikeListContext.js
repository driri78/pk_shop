import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { likeListPageJson, viewItem } from "../customFcn/paging";

const LikeListContext = createContext();

const LikeListProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [likeList, setLikeList] = useState([]);
  const [isList, setIsList] = useState(false);

  const [checkList, setCheckList] = useState([]);

  const checkListHandle = (check, product) => {
    let newCheckList = [];
    const { id } = product;
    if (check) {
      newCheckList = [...checkList, product];
    } else {
      newCheckList = checkList.filter((item) => item.id !== id);
    }
    setCheckList(newCheckList);
  };

  const allCheckListHandle = (check) => {
    let newCheckList = [];
    if (check) {
      newCheckList = likeList;
    }
    setCheckList(newCheckList);
  };
  const reloadLikeList = () => {
    setCheckList([]);
    if (window.localStorage.getItem("LikeList")) {
      const list = JSON.parse(window.localStorage.getItem("LikeList"));
      if (list.length) {
        setLikeList(viewItem(list, likeListPageJson(list)));
        setIsList(true);
        return;
      }
    }
    setIsList(false);
  };
  useEffect(() => {
    reloadLikeList();
    setCheckList([]);
  }, [searchParams]);
  return (
    <LikeListContext.Provider
      value={{
        isList,
        likeList,
        checkList,
        reloadLikeList,
        checkListHandle,
        allCheckListHandle,
      }}
    >
      {children}
    </LikeListContext.Provider>
  );
};

const useLikeList = () => useContext(LikeListContext);

export { LikeListProvider, useLikeList };
