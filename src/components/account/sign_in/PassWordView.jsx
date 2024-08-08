import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import { motion } from "framer-motion";
const PassWordView = ({ view, setView, setVal, setFocus }) => {
  return (
    <div className="password_fcnBox">
      <motion.div
        className="password_viewBtn"
        onClick={() => setView(!view)}
        animate={view ? { opacity: 1 } : { opacity: 0.4 }}
      >
        {view ? <FaEye /> : <FaEyeSlash />}
      </motion.div>
      <div
        className="password_deleteBtn"
        onMouseDown={() => {
          setVal("");
          setFocus(false);
        }}
      >
        <TiDelete />
      </div>
    </div>
  );
};

export default PassWordView;
