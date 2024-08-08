import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductShort = () => {
  const [hover, setHover] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTop(false);
      return;
    }
    setIsTop(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="product_shortMenu"
      animate={isTop ? { opacity: 0 } : { opacity: 1, visibility: "visible" }}
      transition={{ duration: 0.4 }}
    >
      <Link to={"/product/heart"}>
        <div
          title="찜!"
          className="heart"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <motion.div
            animate={hover ? { scale: 1.2 } : { scale: 1 }}
            transition={
              hover && {
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }
          >
            <FaHeart />
          </motion.div>
        </div>
      </Link>

      <div title="위로 가기" className="up_btn" onClick={scrollTop}>
        <div>TOP</div>
      </div>
    </motion.div>
  );
};

export default ProductShort;
