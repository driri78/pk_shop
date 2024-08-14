import React from "react";
import LikeListBox from "./LikeListBox";
import { LikeListProvider } from "../../../contexts/LikeListContext";

const Main = () => {
  return (
    <LikeListProvider>
      <LikeListBox />
    </LikeListProvider>
  );
};

export default Main;
