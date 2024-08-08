import { createContext, useContext, useRef } from "react";

const SearchIdContext = createContext();

const SearchIdProvider = ({ children }) => {
  const searchEmail = [
    {
      id: 1,
      en: "userName",
      ko: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 2,
      en: "userEmail",
      ko: "이메일",
      type: "text",
      userRef: useRef(),
    },
  ];
  const searchPhone = [
    {
      id: 1,
      en: "userName",
      ko: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: 2,
      en: "userPhone",
      ko: "휴대전화번호",
      type: "text",
      userRef: useRef(),
    },
  ];
  return (
    <SearchIdContext.Provider value={{ searchEmail, searchPhone }}>
      {children}
    </SearchIdContext.Provider>
  );
};

const useSearchId = () => useContext(SearchIdContext);

export { SearchIdProvider, useSearchId };
