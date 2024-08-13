import React, { Fragment, useReducer } from "react";
import "../../../../assets/style/product/dollDetail/DollDetail.css";
import { motion } from "framer-motion";
import { useProductDetail } from "../../../../contexts/ProductDetailContext";
import DollDetailBtn from "./DollDetailBtn";
import DollDetailSub from "../DollDetailSub/DollDetailTab";
import DollDetailImageBox from "./DollDetailImageBox";
import StarRating from "../../starRating/StarRating";

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return action.payload + 1;
    }
    case "sub": {
      if (action.payload === 1) return 1;
      return action.payload - 1;
    }
    case "input": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const DollDetailBox = () => {
  const { doll, isPendding } = useProductDetail();
  const { productName, pokemonName, productPrice, productSize, productCount } =
    doll;
  const [count, dispatch] = useReducer(reducer, 1);
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
              {/* {productCount < 10 && <div>{productCount}개 남았음!!!</div>} */}
              <div>{productCount}개 남았음!!!</div>
              <div className="totalCount_box">
                <div className="totalCount">
                  <motion.div
                    whileTap={{
                      scale: 1.2,
                    }}
                    onClick={() => {
                      dispatch({ type: "sub", payload: count });
                    }}
                  >
                    -
                  </motion.div>
                  <div>
                    <input
                      title="수량"
                      type="text"
                      value={count}
                      onChange={(e) => {
                        if (isNaN(+e.target.value)) {
                          dispatch({ type: "input", payload: 1 });
                          return;
                        }
                        if (+e.target.value > productCount) {
                          alert("남아있는 재고가 없습니다....");
                          dispatch({ type: "input", payload: 1 });
                          return;
                        }
                        dispatch({ type: "input", payload: +e.target.value });
                      }}
                      onBlur={(e) => {
                        if (!+e.target.value) {
                          dispatch({ type: "input", payload: 1 });
                        }
                      }}
                    />
                  </div>
                  <motion.div
                    whileTap={{
                      scale: 1.1,
                    }}
                    onClick={() => {
                      if (count === productCount) {
                        alert("남아있는 재고가 없습니다....");
                        return;
                      }
                      dispatch({ type: "add", payload: count });
                    }}
                  >
                    +
                  </motion.div>
                </div>
                <div className="totalPrice">
                  총 금액: {(count * productPrice).toLocaleString("ko-KR")}원
                </div>
              </div>
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
