import React from "react";
import { motion } from "framer-motion";
import style from "../../../assets/style/account/search/SearchTab.module.css";
const SearchIdTab = ({ tab, setTab }) => {
  return (
    <div className={style.tab}>
      <motion.div
        animate={
          tab
            ? { backgroundColor: "#444", color: "#fff" }
            : { backgroundColor: "#fff", color: "#000" }
        }
        onClick={() => setTab(true)}
      >
        이메일로 찾기
      </motion.div>
      <motion.div
        animate={
          tab
            ? { backgroundColor: "#fff", color: "#000" }
            : { backgroundColor: "#444", color: "#fff" }
        }
        onClick={() => setTab(false)}
      >
        전화번호로 찾기
      </motion.div>
    </div>
  );
};

export default SearchIdTab;
