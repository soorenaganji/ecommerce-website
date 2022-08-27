import React from "react";
import styles from "./forgotPass.module.css";
import { Link } from "react-router-dom";
const forgotPass = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}></div>
      <div className={styles.main}>
        <div className={styles.math}>
          <h1>Password Recovery</h1>
          <p>Enter your Email to send a Recovery link</p>
        </div>
        <input type={"email"} placeholder="Email" className={styles.email} />
        <div className={styles.idk}>
          <button className={styles.submit}>Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default forgotPass;
