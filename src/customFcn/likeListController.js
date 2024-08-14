const prevLikeListFcn = () => {
  let prevLikeList = [];
  if (window.localStorage.getItem("LikeList")) {
    prevLikeList = JSON.parse(window.localStorage.getItem("LikeList"));
  }
  return prevLikeList;
};
const findIndexFcn = (prevLikeList, productId) => {
  let findIndex = -1;
  if (window.localStorage.getItem("LikeList")) {
    findIndex = prevLikeList.findIndex((item) => item.id === productId);
  }
  return findIndex;
};

const addLikeList = (product, prevLikeList) => {
  const { productId, productPrice, productName, pokemonName } = product;
  window.localStorage.setItem(
    "LikeList",
    JSON.stringify([
      ...prevLikeList,
      {
        id: productId,
        ko: productName,
        en: pokemonName,
        price: productPrice,
      },
    ])
  );
};

const subLikeList = (prevLikeList, findIndex) => {
  prevLikeList.splice(findIndex, 1);
  window.localStorage.setItem("LikeList", JSON.stringify(prevLikeList));
};

const likeListController = (product, like, setLike) => {
  let prevLikeList = [];
  let findIndex = -1;
  const { productId } = product;
  prevLikeList = prevLikeListFcn();
  findIndex = findIndexFcn(prevLikeList, productId);

  if (like === null) {
    if (findIndex !== -1) {
      setLike(true);
      return;
    }
  } else {
    if (like) {
      if (findIndex !== -1) return;
      addLikeList(product, prevLikeList);
    } else {
      subLikeList(prevLikeList, findIndex);
    }
  }
};

const removeLikeList = (productId) => {
  let prevLikeList = [];
  let findIndex = -1;
  prevLikeList = prevLikeListFcn();
  findIndex = findIndexFcn(prevLikeList, productId);

  subLikeList(prevLikeList, findIndex);
};

export { likeListController, removeLikeList };
