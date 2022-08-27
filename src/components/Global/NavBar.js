import React, { Component } from "react";
import styles from "./NavBar.module.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import search from "./search.svg";
export default function NavBar({ home }) {
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
        <button className={styles.btn}>
          <Link to="/signup">Login/Signup</Link>
        </button>
        <img src={logo} className={styles.logo} />
      </div>
    </>
  );
}
