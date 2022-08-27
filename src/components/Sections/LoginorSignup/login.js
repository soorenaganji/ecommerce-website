import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}></div>
      <div className={styles.main}>
        <div className={styles.math}>
          <h1>Log into your Account</h1>
          <p>
            Not a Member?{" "}
            <Link to={"/signup"} className={styles.link}>
              Sign Up
            </Link>
          </p>
        </div>
        <input type={"email"} placeholder="Email" className={styles.email} />
        <input
          type={"password"}
          placeholder="Password"
          className={styles.password}
        />
        <br />
        <div className={styles.idk}>
          <button className={styles.submit}>Log In</button>
          <Link className={styles.link} to={"/forgotPass"}>
            <p className={styles.link}>Forgot your Password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
