// lastPage: Math.ceil(products.length / pagePerProduct)
// lastBlock: Math.floor(lastPage / blockPerPage)
const dollPageJson = (products) => {
  return {
    totalProduct: products.length,
    pagePerProduct: 20,
    lastPage: Math.ceil(products.length / 20),
    blockPerPage: 2,
    lastBlock: Math.floor(Math.ceil(products.length / 20) / 2),
  };
};
const likeListPageJson = (products) => {
  return {
    totalProduct: products.length,
    pagePerProduct: 6,
    lastPage: Math.ceil(products.length / 6),
    blockPerPage: 2,
    lastBlock: Math.floor(Math.ceil(products.length / 6) / 2),
  };
};
const viewItem = (products, pageJson) => {
  const searchParams = new URLSearchParams(window.location.search);
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
  console.log(arr);
  return arr;
};

export { dollPageJson, likeListPageJson, viewItem };
