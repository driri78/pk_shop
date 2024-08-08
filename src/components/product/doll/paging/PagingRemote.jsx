import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../assets/style/product/doll/Paging.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useProduct } from "../../../../contexts/ProductContext";
import { useAll } from "../../../../contexts/AllContext";

const PagingRemote = ({ children, pageJson }) => {
  const { searchParams } = useProduct();
  const { dispatch } = useAll();

  return (
    <Fragment>
      {
        <div className={style.prev}>
          {searchParams.get("nowBlock") > 0 && (
            <GrFormPrevious
              onClick={() => {
                dispatch({
                  type: "pageRemote",
                  payload: +searchParams.get("nowBlock") - 1,
                });
              }}
            />
          )}
        </div>
      }
      {children}
      {
        <div className={style.next}>
          {+searchParams.get("nowBlock") + 1 <
            pageJson.lastPage / pageJson.blockPerPage && (
            <GrFormNext
              onClick={() => {
                dispatch({
                  type: "pageRemote",
                  payload: +searchParams.get("nowBlock") + 1,
                });
              }}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default PagingRemote;
