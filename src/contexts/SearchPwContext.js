import { createContext, useContext, useRef } from "react";

const SearchPwContext = createContext();

const SearchPwProvider = ({ children }) => {
  const searchEmail = [
    {
      id: 1,
      en: "userId",
      ko: "아이디",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 2,
      en: "userName",
      ko: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 3,
      en: "userEmail",
      ko: "이메일",
      type: "text",
      userRef: useRef(),
    },
  ];
  const searchPhone = [
    {
      id: 1,
      en: "userId",
      ko: "아이디",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 2,
      en: "userName",
      ko: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 3,
      en: "userPhone",
      ko: "휴대전화번호",
      type: "text",
      userRef: useRef(),
    },
  ];
  return (
    <SearchPwContext.Provider value={{ searchEmail, searchPhone }}>
      {children}
    </SearchPwContext.Provider>
  );
};

const useSearchPw = () => useContext(SearchPwContext);

export { SearchPwProvider, useSearchPw };
