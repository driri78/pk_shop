import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketList, setBasketList] = useState();

  useEffect(() => {
    const initBasketList = () => {
      let basket = [];
      if (window.localStorage.getItem("basket")) {
        basket = JSON.parse(window.localStorage.getItem("basket"));
      }
      setBasketList(basket);
    };
    initBasketList();
  }, []);

  return (
    <BasketContext.Provider value={{ basketList }}>
      {children}
    </BasketContext.Provider>
  );
};
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
