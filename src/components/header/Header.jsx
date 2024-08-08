import React, { useEffect, useRef } from "react";
import "../../assets/style/header/Header.css";
import { Logo, Search, Lnb, TypeMenu } from ".";

const Header = () => {
  const targetRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      targetRef.current.style.boxShadow = "0 1px 10px 0px rgba(0,0,0,0.3)";
    } else {
      targetRef.current.style.boxShadow = "none";
    }
  };

  //   이런 이유가 발생하는 이유는 React의 특성상 변화가 있을 때 DOM을 다시 탐색하고 변화가 있는 부분을 Render하여  다시 그려주기(이 부분이 브라우저의 동작원리 중 리플로우, 리페인팅에 해당합니다.) 때문인데 위와 같은 방식으로 구현을 하게 되면 성능에도 문제가 발생합니다.
  // 위와 같은 현상과 성능 개선을 위해 스크롤 이벤트에 Timer를 두어서 Timer안에서 이벤트가 발생하고 이벤트가 발생된 후 해당 타이머는 초기화를 시켜주어 이벤트의 중복을 통한 성능 지연을 방지합니다.
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header ref={targetRef}>
      <div className="product_header">
        <Logo />
        <Search />
        <Lnb />
      </div>
      <div>
        <TypeMenu />
      </div>
    </header>
  );
};

export default Header;
