function createURL(search, page, block, order) {
  const searchParams = new URLSearchParams(window.location.search);
  let urlObj = {
    q: "",
    nowPage: ``,
    nowBlock: ``,
    nowOrder: "",
  };
  if (search !== undefined) {
    urlObj.q = `&q=${search}`;
  } else {
    if (searchParams.get("q")) {
      urlObj.q = `&q=${searchParams.get("q")}`;
    }
  }

  if (page !== undefined) {
    urlObj.nowPage = `&nowPage=${page}`;
  } else {
    if (searchParams.get("nowPage")) {
      urlObj.nowPage = `&nowPage=${searchParams.get("nowPage")}`;
    } else {
      urlObj.nowPage = `&nowPage=0`;
    }
  }
  if (block !== undefined) {
    urlObj.nowBlock = `&nowBlock=${block}`;
  } else {
    if (searchParams.get("nowBlock")) {
      urlObj.nowBlock = `&nowBlock=${searchParams.get("nowBlock")}`;
    } else {
      urlObj.nowBlock = `&nowBlock=0`;
    }
  }
  if (order !== undefined) {
    urlObj.nowOrder = `&order=${order}`;
  } else {
    if (searchParams.get("order")) {
      urlObj.nowOrder = `&order=${searchParams.get("order")}`;
    }
  }

  const { q, nowOrder, nowPage, nowBlock } = urlObj;
  const result = `/product/doll?${q}${nowOrder}${nowPage}${nowBlock}`;
  return result.replace("&", "");
}

const reducer = (state, action) => {
  switch (action.type) {
    case "pageNum":
      return createURL(undefined, action.payload, undefined, undefined);
    case "pageRemote":
      return createURL(undefined, undefined, action.payload, undefined);
    case "search":
      return createURL(action.payload, 0, 0, undefined);
    case "order":
      return createURL(undefined, undefined, undefined, action.payload);
    case "basic":
      return action.payload;
    default:
      return state;
  }
};
export { createURL, reducer };
