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
          <a href="https://www.google.com/search?q=Fuck+you&sxsrf=ALiCzsaj3QEtIMgBdNVExhRyQzDO37s6Yg%3A1662115677529&ei=Xd8RY-S8H5eF9u8P7c-suAQ&ved=0ahUKEwik36K09_X5AhWXgv0HHe0nC0cQ4dUDCA4&uact=5&oq=Fuck+you&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjEOoCECc6CgguEMcBENEDECc6BAgjECc6BAgAEEM6CgguEMcBENEDEEM6BQgAEIAEOgsILhCABBDHARDRAzoFCC4QkQI6BQgAEJECOgUILhCABDoOCC4QgAQQxwEQ0QMQ1AI6CwguEIAEEMcBEK8BOggILhCABBDUAkoECEEYAEoECEYYAFAAWMNDYMtFaANwAXgAgAHOAogBrxWSAQUyLTkuMZgBAKABAbABCrgBA8ABAQ&sclient=gws-wiz" target={"_blank"} >
            <button className={styles.checkOut}>Check Out</button>
          </a>
          
        </div> 
        
      ) : <><h1>Your Shopping Cart is Empty </h1>
      <span className={styles.link} ><Link to="/products" >Back to Shop</Link></span></> }

    </div>
  );
};

export default Cart;
