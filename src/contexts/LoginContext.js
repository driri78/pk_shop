import { createContext, useContext, useReducer, useRef } from "react";

const loginContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "userId": {
      return { ...state, userId: action.payload };
    }
    case "userPw": {
      return { ...state, userPw: action.payload };
    }
    default: {
      return state;
    }
  }
};

const LoginProvider = ({ children }) => {
  const loginUser = [
    {
      type: "text",
      id: "userId",
      name: "아이디",
      ref: useRef(),
    },
    {
      type: "password",
      id: "userPw",
      name: "비밀번호",
      ref: useRef(),
    },
  ];
  const [user, dispatch] = useReducer(reducer, []);
  return (
    <loginContext.Provider value={{ loginUser, user, dispatch }}>
      {children}
    </loginContext.Provider>
  );
};

const useLogin = () => useContext(loginContext);

export { LoginProvider, useLogin };
