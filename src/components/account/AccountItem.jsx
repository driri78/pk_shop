import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import "../../assets/style/account/AccountItem.css";
const AccountItem = ({ user }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Fragment>
      <div className="Account_item" title={`${user.ko}을 입력하세요!`}>
        <motion.input
          animate={
            focus ? { border: "1px solid #000" } : { border: "1px solid #ddd" }
          }
          type={user.type}
          placeholder={`${user.ko}`}
          readOnly={user.readOnly}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </Fragment>
  );
};

export default AccountItem;
