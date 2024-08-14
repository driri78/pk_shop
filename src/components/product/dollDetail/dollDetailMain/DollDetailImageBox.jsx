import React, { useState } from "react";
import { motion } from "framer-motion";
import SubImageItem from "./SubImageItem";
import DollHeart from "../../doll/DollHeart";

const DollDetailImageBox = ({ product }) => {
  const { pokemonName } = product;
  const image = [
    {
      id: 1,
      path: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}1.jpg)`,
    },
    {
      id: 2,
      path: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}2.jpg)`,
    },
  ];
  const [imgPath, setImgPath] = useState(image[0].path);
  return (
    <div className="img_box">
      <DollHeart product={product} />
      <div className="sub_box">
        {image.map((image) => (
          <SubImageItem
            key={image.id}
            path={image.path}
            imgPath={imgPath}
            setImgPath={setImgPath}
          />
        ))}
      </div>
      <motion.div
        className="main"
        style={{
          backgroundImage: imgPath,
        }}
      ></motion.div>
    </div>
  );
};

export default DollDetailImageBox;
