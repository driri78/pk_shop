import React from "react";
import { motion } from "framer-motion";
const SubImageItem = ({ path, imgPath, setImgPath }) => {
  return (
    <motion.div
      className="sub"
      style={{
        backgroundImage: path,
      }}
      animate={
        imgPath === path
          ? { border: "2px solid #bbb" }
          : { border: "2px solid #fff" }
      }
      onMouseOver={() => {
        setImgPath(path);
      }}
    ></motion.div>
  );
};

export default SubImageItem;
