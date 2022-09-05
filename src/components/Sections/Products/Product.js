import React, { useState, useContext } from "react";
import styles from "./product.module.css";
import down from "../Home/Cards/down.png";
import up from "../Home/Cards/up.png";
import trash from "../Home/Cards/trash.png";
import { Link } from "react-router-dom";
import { isInCart, shortener } from "../../Helper/functions";
import { CartContext } from "../../../Context/CartContextProvider";
import { counter } from "../../Helper/functions";
export default function Product({ productData , home }) {
  const { state, dispatch } = useContext(CartContext);
  return (
    <>
      <div className={home ? styles.containeer : styles.container}>
        <Link to={`/products/${productData.id}`}>
          <h3 className={styles.title}>{shortener(productData.title)}</h3>
          <div className={styles.container2}>
            <img src={productData.image} className={styles.image} />
            <p className={styles.matn}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quasiplaceat?
            </p>
          </div>
        </Link>
        {isInCart(state, productData.id) ? (
          <div className={styles.container3}>
            <div className={styles.btn}>
              {counter(state, productData.id) > 1 && (
                <img
                  src={down}
                  className={styles.down}
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: productData })
                  }
                />
              )}
              {counter(state, productData.id) === 1 && (
                <img
                  src={trash}
                  className={styles.down}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: productData })
                  }
                />
              )}
              <p>{counter(state, productData.id)}</p>

              <button
               
              >
                <img src={up}  onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                } />
              </button>
            </div>
            <div
              className={
                isInCart(state, productData.id) ? styles.price : styles.doNot
              }
            >
              {Math.round(productData.price) * counter(state, productData.id)} $
            </div>
          </div>
        ) : (
          <button
            className={styles.buy}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}
{
  /*  */
}

{
  /* <div className={counter(state, productData.id) > 0 ? styles.container3 : styles.doNot} >
        <div
          className={
            isInCart(state, productData.id) ? styles.btn : styles.doNot
          }
        >
          
        </div> */
}

//
