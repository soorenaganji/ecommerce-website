import React, { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import axios from "axios";
import Header from "../../Global/Header";
import styles from "./Home.module.css";
import About from "./About/About";
import Popular from "./Popular/Popular";
export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <Cards />
      <Popular />
      <About home={true} />
    </div>
  );
}
