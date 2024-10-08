function createURL(
  search,
  page,
  block,
  order,
  path = window.location.pathname
) {
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
  const result = `${path}?${q}${nowOrder}${nowPage}${nowBlock}`;
  return result.replace("&", "");
}

export { createURL };
