import React, { Component } from "react";
import Cards from "./Cards/Cards";
import Supporters from "./Supporters/supporters";
import Header from "../../Global/Header";
import styles from "./Home.module.css";
import About from "./About/About";
import Popular from "./Popular/Popular";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Cards />
      <About home={true} />
      <Popular />
      <Supporters />
    </div>
  );
}
