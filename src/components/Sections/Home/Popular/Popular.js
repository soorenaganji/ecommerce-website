import React, { useState, useContext, useEffect } from "react";
import Product from "../../Products/Product";
import styles from "./Popular.module.css";
import { ProductContext } from "../../../../Context/ProductContextProvider";
import Slider from "react-slick";
import axios from "axios";
const Popular = () => {
  const [slideToShow, setSlideToShow] = useState(3);
  const [dots, setDots] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const Data = useContext(ProductContext);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth <= 666) {
      setSlideToShow(1);
    } if (windowSize.innerWidth < 500) {
      setSlideToShow(1);
      setDots(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  let settings = {
    dots: dots,
    infinite: true,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <>
      <div className={styles.cont}>
        <h1>Populars</h1>
        <div className={styles.container}>
          <Slider {...settings}>
          {Data.map((item) => (
            <Product key={item.id} productData={item} home={true} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Popular;
