import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dollData from "../api/dollData.json";

const productDetailContext = createContext(null);

const ProductDetailProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [isPendding, setIsPendding] = useState(true);
  const params = useParams();

  useEffect(() => {
    // const getDoll = async () => {
    //   await fetch("/api/doll", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(params.pokemonName),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (res) {
    //         setDoll(res);
    //         setIsPendding(true);
    //       }
    //     });
    // };

    const getDoll = () => {
      setProduct(
        dollData.find((doll) => doll.pokemonName === params.pokemonName)
      );
    };
    getDoll();
  }, [params]);
  return (
    <productDetailContext.Provider value={{ product, isPendding }}>
      {children}
    </productDetailContext.Provider>
  );
};

const useProductDetail = () => useContext(productDetailContext);

export { ProductDetailProvider, useProductDetail };
