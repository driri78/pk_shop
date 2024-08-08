import React, { Fragment, useState } from "react";
import RegisterItem from "../../AccountItem";
import { useRegister } from "../../../../contexts/RegisterContext";
import DaumPostcodeEmbed from "react-daum-postcode";

const AddrItem = () => {
  const { userAddrDetail } = useRegister();
  const [show, setShow] = useState(false);
  const [post, setPost] = useState("");
  const [addr, setAddr] = useState("");
  const style = {
    width: "400px",
    height: "470px",
    border: "1px solid #ddd",
  };
  const completeHandler = (data) => {
    setShow(false);
    setPost(data.zonecode);
    setAddr(data.address);
  };
  return (
    <Fragment>
      <div className="addr_box">
        <div className="input_box">
          <input
            className="readOnly"
            type="text"
            placeholder="우편번호"
            readOnly
            value={post}
          />
        </div>
        <div className="btn_box">
          {show && (
            <div className="daum_box" onClick={() => setShow(false)}>
              <DaumPostcodeEmbed style={style} onComplete={completeHandler} />
            </div>
          )}
          <button onClick={() => setShow(true)}>주소 찾기</button>
        </div>
      </div>
      <div>
        <input
          className="readOnly"
          type="text"
          placeholder="주소"
          readOnly
          value={addr}
        />
      </div>
      <div>
        <RegisterItem user={userAddrDetail} />
      </div>
    </Fragment>
  );
};

export default AddrItem;
