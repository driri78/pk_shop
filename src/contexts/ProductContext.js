import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState();
  const [pendding, setPendding] = useState(true);

  useEffect(() => {
    // spring boot
    // async function getData() {
    //   try {
    //     const res = await fetch(
    //       `/api/shop?nowPage=${searchParams.get("nowPage")}`
    //     );
    //     const productData = await res.json();
    //     if (productData) {
    //       setProduct(productData);
    //       setPendding(true);
    //     } else {
    //       setPendding(false);
    //     }
    //   } catch (err) {
    //     setPendding(false);
    //     console.log(err);
    //   }
    // }
  }, [searchParams]);

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        pendding,
        searchParams,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
