import React from "react";
import { Link } from "react-router-dom";
import { useAll } from "../../../contexts/AllContext";

const SubMenuItem = ({ subMenu }) => {
  const { dispatch } = useAll();
  return (
    <li>
      <Link
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "basic", payload: subMenu.path });
        }}
      >
        {subMenu.name}
      </Link>
    </li>
  );
};

export default SubMenuItem;
