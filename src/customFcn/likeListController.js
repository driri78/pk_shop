const likeListController = (product, like, setLike) => {
  let prevLikeList = [];
  let findIndex = -1;
  const { productId, productPrice, productName, pokemonName } = product;
  if (window.localStorage.getItem("LikeList")) {
    prevLikeList = JSON.parse(window.localStorage.getItem("LikeList"));
    findIndex = prevLikeList.findIndex((item) => item.id === productId);
  }
  if (like === null) {
    if (findIndex !== -1) {
      setLike(true);
      return;
    }
  } else {
    if (like) {
      if (findIndex !== -1) return;
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
    } else {
      prevLikeList.splice(findIndex, 1);
      window.localStorage.setItem("LikeList", JSON.stringify(prevLikeList));
    }
  }
};
export { likeListController };
