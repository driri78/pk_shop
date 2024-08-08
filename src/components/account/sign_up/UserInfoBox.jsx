import React, { Fragment } from "react";
import AccountItem from "../AccountItem";
import GenderItem from "./item/GenderItem";
import { useRegister } from "../../../contexts/RegisterContext";
import "../../../assets/style/account/sign_up/UserInfo.css";
const UserInfoBox = () => {
  const { user02, userBirth } = useRegister();
  return (
    <Fragment>
      {user02.map((user) => (
        <AccountItem key={user.id} user={user} />
      ))}
      <div className="gender_box">
        <GenderItem />
        <AccountItem user={userBirth} />
      </div>
    </Fragment>
  );
};

export default UserInfoBox;
