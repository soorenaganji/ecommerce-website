import React, { useState } from "react";
import styles from "./product.module.css";
import down from "../Home/Cards/down.svg";
import up from "../Home/Cards/up.svg";
export default function Card(props) {
  const [ifShow, showHanler] = useState(false);
  const [ifShowBtn, btnHandler] = useState(true);
  const [counter, counterSet] = useState(1);
  const upHandler = () => {
    counterSet((prevCounter) => prevCounter + 1);
  };
  const downHandler = () => {
    if (counter > 1) {
      counterSet((prevCounter) => prevCounter - 1);
    }
    if (counter === 1) {
      showHanler(false);
      btnHandler(true);
    }
  };
  const clickHandler = () => {
    showHanler(true);
    btnHandler(false);
  };

  return (
    <>
      <div className={props.Popular ? styles.containeer : styles.container}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.container2}>
          <img src={props.image} className={styles.image} />
          <p className={styles.matn}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quasiplaceat?
          </p>
        </div>
        <button
          className={ifShowBtn ? styles.buy : styles.doNot}
          onClick={clickHandler}
        >
          Add to Cart
        </button>
        <div className={ifShow ? styles.container3 : ""}>
          <div className={ifShow ? styles.btn : styles.doNot}>
            <img src={down} onClick={downHandler} className={styles.down} />
            <p>{counter}</p>
            <img src={up} onClick={upHandler} />
          </div>
          <div className={ifShow ? styles.price : styles.doNot}>
            {props.price * counter} $
          </div>
        </div>
      </div>
    </>
  );
}
