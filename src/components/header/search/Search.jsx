import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SearchBtn from "./SearchBtn";
import { useNavigate } from "react-router-dom";
import { createURL } from "../../../creatURL/createURL";

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  return (
    <form
      className="product_search_box"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchVal.length) {
          navigate(createURL(searchVal, 0, 0));
        } else {
          alert("검색어를 입력하세요");
          inputRef.current.focus();
        }
      }}
    >
      <div className="product_input_box" title="검색어를 입력하세요!!">
        <input
          type="text"
          id="pdt_search"
          name="pdt_search"
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (!searchVal.trim().length) {
              setFocus(false);
              setSearchVal("");
            } else {
              setSearchVal(searchVal.trim());
            }
          }}
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
          ref={inputRef}
        />
        <motion.label
          htmlFor="pdt_search"
          animate={
            focus || searchVal
              ? {
                  y: -28,
                  fontWeight: 700,
                  opacity: 1,
                  fontSize: "20px",
                }
              : {}
          }
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
        >
          search
          <img
            src={`${process.env.PUBLIC_URL}/images/header/pikachu_happy_icon.svg`}
            alt=""
          />
        </motion.label>
      </div>
      <div className="product_btn_box">
        <SearchBtn searchVal={searchVal} />
      </div>
    </form>
  );
};

export default Search;
