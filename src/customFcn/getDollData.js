const getDollData = (dollData) => {
  const searchParams = new URLSearchParams(window.location.search);
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
};
export { getDollData };
