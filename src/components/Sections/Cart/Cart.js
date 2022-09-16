import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../../Context/CartContextProvider";
import Card2 from "./Card2";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      {state.selectedItems.map((item) => (
        <Card2 key={item.id + 100} data={item} />
      ))}
      {state.itemsCounter ? (
        <div className={styles.cont}>
          <p>
            <span>Total items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payment : </span>
            {Math.round(state.total)} $
          </p>
          <a href="https://www.google.com" target={"_blank"} >
            <button className={styles.checkOut}>Check Out</button>
          </a>
          
        </div> 
        
      ) : <><h1>Your Shopping Cart is Empty </h1>
      <span className={styles.link} ><Link to="/products" >Back to Shop</Link></span></> }

    </div>
  );
};

export default Cart;
