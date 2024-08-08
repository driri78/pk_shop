import React, { useState } from "react";
import { motion } from "framer-motion";
import PassWordView from "./PassWordView";

const LoginItem = ({ user }) => {
  const [focus, setFocus] = useState(false);
  const [view, setView] = useState(false);
  const [val, setVal] = useState("");

  return (
    <div className="login_item" title={user.name}>
      <motion.label
        htmlFor={user.id}
        animate={focus ? { top: -6, opacity: 1, fontWeight: 700 } : {}}
      >
        {user.name}
      </motion.label>
      <motion.div
        className="animate_bar"
        animate={focus ? { width: "100%" } : { width: 0 }}
      ></motion.div>
      <input
        type={user.type === "password" && view ? "text" : user.type}
        id={user.id}
        name={user.id}
        ref={user.ref}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          if (!val) {
            setFocus(false);
          }
        }}
        onChange={(e) => setVal(e.target.value)}
        value={val}
        autoComplete={user.type === "password" ? "off" : "on"}
      />
      {user.type === "password" && (
        <PassWordView
          view={view}
          setView={setView}
          setVal={setVal}
          setFocus={setFocus}
          userRef={user.ref}
        />
      )}
    </div>
  );
};

export default LoginItem;
