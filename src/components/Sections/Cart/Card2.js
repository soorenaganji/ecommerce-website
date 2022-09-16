import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContextProvider";
import { shortener } from "../../Helper/functions";
import up from "../Home/Cards/up.png";
import down from "../Home/Cards/down.png";
import trash from "../Home/Cards/trash.png";
import styles from "./Card2.module.css";
const Card2 = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3>{shortener(title)}</h3>
      <div className={styles.container3}>
        <p className={styles.price} >{Math.round(price) * quantity}</p>
        <div className={styles.btn}>
          {quantity > 1 ? (
            <img
              src={down}
              className={styles.down}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            />
          ) : (
            <img
              src={trash}
              className={styles.down}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            />
          )}
          <p>{quantity}</p>
          <button>
            <img
              src={up}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: props.data })
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
