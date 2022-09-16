import React from "react";
import styles from "./footer.module.css";
import Supporters from "../Sections/Home/Supporters/supporters";
import instagram from "./Instagram.svg";
import Tiktok from "./Tiktok.svg";
import Tel from "./Tel.svg";
import youtube from "./Youtube.svg";
export default function footer() {
  return (
    <div className={styles.container}>
      <Supporters />
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="https://google.com" target={"_blank"}>
              {" "}
              <img src={instagram} />{" "}
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"}>
              {" "}
              <img src={Tiktok} />{" "}
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"}>
              {" "}
              <img src={Tel} />{" "}
            </a>
          </li>
          <li>
            <a href="https://google.com" target={"_blank"}>
              {" "}
              <img src={youtube} />{" "}
            </a>
          </li>
        </ul>
      </div>
      <h5>Powered By ❤️ With Sourena Ganji (Aneroos)</h5>
      <h4> &copy; 2022 All rights reserved</h4>
    </div>
  );
}
