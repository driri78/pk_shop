import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SubMenuItem = ({ subMenu }) => {
  const navigate = useNavigate();
  return (
    <li>
      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate(subMenu.path);
        }}
      >
        {subMenu.name}
      </Link>
    </li>
  );
};

export default SubMenuItem;
