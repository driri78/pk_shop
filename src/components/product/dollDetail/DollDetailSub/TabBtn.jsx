import React from "react";
import { motion } from "framer-motion";

const TabBtn = ({ menu, isReview, setIsReview }) => {
  return (
    <motion.button
      animate={
        isReview === menu.name
          ? { backgroundColor: "#ec0000", color: "#fff", fontWeight: 700 }
          : { backgroundColor: "#ddd", color: "#aaa" }
      }
      onClick={() => setIsReview(menu.name)}
    >
      {menu.name}
    </motion.button>
  );
};

export default TabBtn;
