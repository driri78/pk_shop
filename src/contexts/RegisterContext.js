import { createContext, useContext, useRef } from "react";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const user01 = [
    { id: 1, en: "userEmail", ko: "이메일", type: "text", userRef: useRef() },
    { id: 2, en: "userId", ko: "아이디", type: "text", userRef: useRef() },
    {
      id: 3,
      en: "userPw",
      ko: "비밀번호",
      type: "password",
      userRef: useRef(),
    },
  ];
  const user02 = [
    { id: 1, en: "userko", ko: "이름", type: "text", userRef: useRef() },
    {
      id: 2,
      en: "userPhone",
      ko: "휴대전화번호",
      type: "text",
      userRef: useRef(),
    },
  ];

  const userBirth = {
    en: "userBirth",
    ko: "생년월일",
    type: "text",
    userRef: useRef(),
  };
  const userAddrDetail = {
    en: "userAddrDetail",
    ko: "상세 주소",
    type: "text",
    userRef: useRef(),
  };

  return (
    <RegisterContext.Provider
      value={{
        user01,
        user02,
        userBirth,
        userAddrDetail,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);

export { RegisterProvider, useRegister };
