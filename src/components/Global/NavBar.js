import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import logo from "../../logo.webp";
import { Link } from "react-router-dom";
import search from "./search.svg";
import logoMain from "../../logoMain.webp";
import { CartContext } from "../../Context/CartContextProvider";
export default function NavBar() {
  const { state } = useContext(CartContext);
  return (
    <>
      <div className={styles.main}>
        <ul className={styles.navContainer}>
          <li className={styles.nav}>
            <Link to="/" className={styles.nav}>
              Home
            </Link>
          </li>
          <li className={styles.nav}>
            <Link to="/products" className={styles.nav}>
              Products
            </Link>
          </li>
          <li className={styles.nav}>
            <Link to="/aboutUs" className={styles.nav}>
              About Us
            </Link>
          </li>
        </ul>
        <form className={styles.forme}>
          <input
            type={"search"}
            placeholder="What are you searching for?"
            className={styles.searchBar}
          />
          <button type={"button"} onClick={(event) => event.preventDefault()}>
            <img src={search} className={styles.icon} />
          </button>
        </form>
        <Link to={"/login"} className={styles.loginBtn}>
          Login
        </Link>
        <button className={styles.signupBtn}>
          <Link to="/signup">Signup</Link>
        </button>
        <div>
          <p className={state.itemsCounter ? styles.num : styles.null}>
            {state.itemsCounter}
          </p>
          <Link to={"/Cart"}>
            <img
              src={logo}
              className={state.itemsCounter ? styles.logo : styles.logo2}
            />
          </Link>
        </div>
        <Link to={"/"}>
          <img src={logoMain} className={styles.logo3} />
        </Link>
      </div>
    </>
  );
}
