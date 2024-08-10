import { Route, Routes } from "react-router-dom";
import {
  Basket,
  Doll,
  DollDetail,
  Home,
  LikeList,
  Login,
  Register,
  SearchId,
  SearchPw,
  Wiki,
  WikiDetail,
} from "./routes";
import ShopLayout from "./layout/ShopLayout";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/wiki/:id" element={<WikiDetail />} />
        <Route element={<ShopLayout />}>
          <Route path="/account">
            <Route path="sign_in" element={<Login />} />
            <Route path="sign_up" element={<Register />} />
            <Route path="search_id" element={<SearchId />} />
            <Route path="search_pw" element={<SearchPw />} />
          </Route>
          <Route path="/product">
            <Route path="heart" element={<LikeList />} />
            <Route path="doll">
              <Route index element={<Doll />} />
              <Route path=":pokemonName" element={<DollDetail />} />
            </Route>
            <Route path="basket" element={<Basket />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
