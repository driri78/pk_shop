import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../assets/style/product/doll/Paging.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useProduct } from "../../../../contexts/ProductContext";
import { createURL } from "../../../../creatURL/createURL";

const PagingRemote = ({ children, pageJson }) => {
  const { searchParams } = useProduct();
  const navigate = useNavigate();
  return (
    <Fragment>
      {
        <div className={style.prev}>
          {searchParams.get("nowBlock") > 0 && (
            <GrFormPrevious
              onClick={() => {
                navigate(
                  createURL(
                    undefined,
                    undefined,
                    +searchParams.get("nowBlock") - 1
                  )
                );
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
                navigate(
                  createURL(
                    undefined,
                    undefined,
                    +searchParams.get("nowBlock") + 1
                  )
                );
              }}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default PagingRemote;
