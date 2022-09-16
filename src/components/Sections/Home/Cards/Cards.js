import React from "react";
import styles from "./cards.module.css";
import Card from "./Card";
import vuee from "./cardsPics/vue.jpg";
import react from "./cardsPics/React.jpeg";
import angular from "./cardsPics/angular.jpg";
export default function cards() {
  return (
    <div className={styles.container}>
      <Card image={vuee} name={"Sneakers"} src={"/products"} third={false} />
      <Card image={react} name={"Jeans"} color={"blue"} src={"/products"} third={false} />
      <Card image={angular} name={"Custom Designs"} src={"/products"} third={true} />
    </div>
  );
}
