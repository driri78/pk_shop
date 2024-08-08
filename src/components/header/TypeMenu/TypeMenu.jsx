import React, { useEffect, useReducer, useState } from "react";
import MenuDetail from "./TypeMenuDetail";
import types from "../../../api/pokemonType.json";
import style from "../../../assets/style/header/TypeMenu.module.css";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const reducer = (state, action) => {
  switch (action.type) {
    case "typeAdd": {
      return [...state, action.payload];
    }
    case "typeSub": {
      state.splice(
        state.findIndex((item) => item === action.payload),
        1
      );
      return state;
    }
    default: {
      return state;
    }
  }
};

const Menu = () => {
  const [typeArr, dispatch] = useReducer(reducer, []);

  const [pokemonType, setPokemonType] = useState([]);
  const [down, setDown] = useState(false);

  useEffect(() => {
    // async function getType() {
    //   const res = await fetch("https://pokeapi.co/api/v2/type");
    //   const jsonData = await res.json();
    //   setPokemonType(jsonData.results);
    // }
    // getType();
    setPokemonType(types);
  }, []);
  return (
    <nav className={style.product_menu_box}>
      <motion.div
        className={style.down_menuBtn}
        style={{ transformStyle: "preserve-3d" }}
        animate={{ y: 6 }}
        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className={style.product_menu_comment}>포켓몬 타입</div>
        <motion.div
          className={style.arrow}
          onClick={() => setDown(!down)}
          initial={{ rotateX: 0 }}
          animate={down ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
      <motion.ul
        className={style.product_menu}
        animate={down ? { height: 200, paddingBottom: 20 } : { height: 0 }}
      >
        {pokemonType.map((type) => (
          <MenuDetail
            key={type.id}
            type={type}
            typeArr={typeArr}
            dispatch={dispatch}
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default Menu;
