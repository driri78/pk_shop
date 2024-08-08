import React, { Fragment } from "react";
import "../../../../assets/style/product/dollDetail/DollDetail.css";
import { useProductDetail } from "../../../../contexts/ProductDetailContext";
import DollDetailBtn from "./DollDetailBtn";
import DollDetailSub from "../DollDetailSub/DollDetailTab";
import DollDetailImageBox from "./DollDetailImageBox";
import StarRating from "../../starRating/StarRating";

const DollDetailBox = () => {
  const { doll, isPendding } = useProductDetail();
  const { productName, pokemonName, productPrice, productSize, productCount } =
    doll;
  return (
    <Fragment>
      {isPendding ? (
        <div className="dollDetail_container">
          <div className="dollDetail_box">
            {productName && <DollDetailImageBox pokemonName={pokemonName} />}
            <div className="info_box">
              <div>
                <StarRating />
              </div>
              <div className="name">{productName} 인형</div>
              <div className="price">
                {productPrice?.toLocaleString("ko-KR")}원
              </div>
              <div className="size">{productSize}</div>
              {productCount < 10 && <div>{productCount}개 남았음!!!</div>}
              <DollDetailBtn />
            </div>
          </div>
          <DollDetailSub />
        </div>
      ) : (
        <div>로딩중....</div>
      )}
    </Fragment>
  );
};

export default DollDetailBox;
