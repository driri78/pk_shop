import React from "react";
import PagingNumItem from "./PagingNumItem";

const PagingNum = ({ pageNum }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <ul>
      {pageNum.map((item) => (
        <li key={item} onClick={scrollTop}>
          <PagingNumItem num={item} />
        </li>
      ))}
    </ul>
  );
};

export default PagingNum;
