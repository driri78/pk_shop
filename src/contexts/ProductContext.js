import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import dollData from "../api/dollData.json";

const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getData = useCallback(() => {
    let data = [];
    if (searchParams.get("q")) {
      dollData.map(
        (doll) =>
          doll.productName.indexOf(searchParams.get("q")) !== -1 &&
          data.push(doll)
      );
    } else {
      data = dollData;
    }
    const sortLowPrice = () => {
      const sortProducts = [...data].sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
      return sortProducts;
    };
    const sortHighPrice = () => {
      const sortProducts = [...data].sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
      return sortProducts;
    };
    if (searchParams.get("order") === "desc") {
      data = sortLowPrice();
    } else if (searchParams.get("order") === "asc") {
      data = sortHighPrice();
    }
    return data;
  }, [searchParams]);

  const [products, setProducts] = useState(getData);
  const [pendding, setPendding] = useState(true);

  useEffect(() => {
    setProducts(getData);
  }, [searchParams, getData]);

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

  const pageJson = {
    totalProduct: products.length,
    pagePerProduct: 20,
    lastPage: Math.ceil(products.length / 20),
    blockPerPage: 2,
    lastBlock: Math.floor(Math.ceil(products.length / 20) / 2),
  };

  const viewProductsInit = () => {
    let arr = [];
    for (let i = 0; i < pageJson.pagePerProduct; i++) {
      if (
        pageJson.pagePerProduct * searchParams.get("nowPage") + i >=
        products.length
      ) {
        break;
      }
      let index = pageJson.pagePerProduct * searchParams.get("nowPage") + i;
      arr.push(products[index]);
    }
    return arr;
  };

  const [viewProducts, SetViewProducts] = useState(viewProductsInit);
  // lastPage: Math.ceil(products.length / pagePerProduct)
  // lastBlock: Math.floor(lastPage / blockPerPage)

  useEffect(() => {
    const viewProductsHandle = () => {
      let arr = [];
      for (let i = 0; i < pageJson.pagePerProduct; i++) {
        if (
          pageJson.pagePerProduct * searchParams.get("nowPage") + i >=
          products.length
        ) {
          break;
        }
        let index = pageJson.pagePerProduct * searchParams.get("nowPage") + i;
        arr.push(products[index]);
      }
      SetViewProducts(arr);
    };
    viewProductsHandle();
  }, [searchParams, pageJson.pagePerProduct, products]);

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        pendding,
        searchParams,
        pageJson,
        viewProducts,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
