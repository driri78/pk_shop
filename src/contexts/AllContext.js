import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createURL, reducer } from "../creatURL/createURL";
import { useNavigate } from "react-router-dom";

const AllContext = createContext();

const AllProvider = ({ children }) => {
  const [url, dispatch] = useReducer(reducer, createURL);
  const [href, setHref] = useState(window.location.href);
  const navigate = useNavigate();
  const goPage = useCallback(
    (url) => {
      navigate(url);
    },
    [navigate]
  );
  useEffect(() => {
    goPage(url);
  }, [url, goPage]);
  useEffect(() => {
    dispatch({
      type: "basic",
      payload: window.location.pathname + window.location.search,
    });
  }, [href]);
  return (
    <AllContext.Provider value={{ url, dispatch }}>
      {children}
    </AllContext.Provider>
  );
};
const useAll = () => useContext(AllContext);

export { AllProvider, useAll };
