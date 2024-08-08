import React from "react";
import { useLogin } from "../../../contexts/LoginContext";
import LoginItem from "./LoginItem";

const LoginBox = ({ children }) => {
  const { loginUser } = useLogin();
  return (
    <div className="login_box">
      <div className="login_title">Login</div>
      {loginUser.map((user) => (
        <LoginItem key={user.id} user={user} />
      ))}
      {children}
    </div>
  );
};

export default LoginBox;
