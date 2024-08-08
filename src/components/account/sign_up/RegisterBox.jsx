import React from "react";
import AccountItem from "../AccountItem";
import RegisterBtn from "./RegisterBtn";
import { useRegister } from "../../../contexts/RegisterContext";
import UserInfoBox from "./UserInfoBox";
import AddrBox from "./AddrBox";

const RegisterBox = () => {
  const { user01 } = useRegister();
  return (
    <div className="Register_container">
      <div className="Register_title">회원가입</div>
      <div className="Register_box">
        {user01.map((user) => (
          <AccountItem key={user.id} user={user} />
        ))}
      </div>
      <div className="Register_box">
        <UserInfoBox />
      </div>
      <div className="Register_box">
        <AddrBox />
      </div>
      <RegisterBtn />
    </div>
  );
};

export default RegisterBox;
