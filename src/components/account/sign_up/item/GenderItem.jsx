import React, { useState } from "react";
import { motion } from "framer-motion";
const GenderItem = () => {
  const [focus, setFocus] = useState(false);
  return (
    <motion.select
      animate={
        focus ? { border: "1px solid #000" } : { border: "1px solid #ddd" }
      }
      name="gender"
      id="userGender"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      defaultValue={"none"}
    >
      <option value="none" disabled>
        성별
      </option>
      <option value="1">남자</option>
      <option value="0">여자</option>
    </motion.select>
  );
};

export default GenderItem;
