import React, { useContext, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../logo.webp";
import { Link } from "react-router-dom";
import search from "./search.svg";
import logoMain from "../../logoMain.webp";
import { CartContext } from "../../Context/CartContextProvider";
import Right from "./chevron-right.svg";
import Left from "./chevron-left.svg";
export default function NavBar() {
  const { state } = useContext(CartContext);
  const [open, opener] = useState(Right);
  const [shown, setShown] = useState(false);
  const navHandler = () => {
    if (!shown) {
      opener(Left);
      setShown(true);
    } else {
      opener(Right);
      setShown(false);
    }
  };
  return (
    <>
      <div className={shown ? styles.main : styles.off}>
        <ul className={styles.navContainer}>
          <li className={styles.nav}>
            <Link to="/" className={styles.nav} onClick={navHandler} >
              Home
            </Link>
          </li>
          <li className={styles.nav}>
            <Link to="/products" className={styles.nav} onClick={navHandler} >
              Products
            </Link>
          </li>
          <li className={styles.nav}>
            <Link to="/aboutUs" className={styles.nav} onClick={navHandler} >
              About
            </Link>
          </li>
        </ul>
        <img
          src={open}
          className={styles.responsiveMenu}
          onClick={navHandler}
        />
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
        <div className={styles.loginAndSignup}>
          <Link to={"/login"} className={styles.loginBtn}>
            Login
          </Link>
          <button className={styles.signupBtn}>
            <Link to="/signup" onClick={navHandler} > Signup</Link>
          </button>
        </div>
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
        <Link to={"/"} onClick={navHandler} >
          <img src={logoMain} className={styles.logo3} />
        </Link>
      </div>
      <div className={styles.ResponsiveSearch}>
        <div className={styles.loginAndSignup}>
          <Link to={"/login"} className={styles.loginBtn}>
            Login
          </Link>
          <button className={styles.signupBtn}>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
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
      </div>
    </>
  );
}
