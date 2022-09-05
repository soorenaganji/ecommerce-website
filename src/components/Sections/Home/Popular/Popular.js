import React, { useState, useContext, useEffect } from "react";
import Product from "../../Products/Product";
import styles from "./Popular.module.css";
import { ProductContext } from "../../../../Context/ProductContextProvider";

const Popular = () => {
  const Data = useContext(ProductContext);
  return (
    <>
      <div className={styles.cont}>
        <h1>Populars</h1>
        <div className={styles.container}>
          <Product
            key={33}
            productData={Data[2]}
            className={styles.product}
            home={true}
          />
          <Product
            key={43}
            productData={Data[7]}
            className={styles.product}
            home={true}
          />
          <Product
            key={53}
            productData={Data[18]}
            className={styles.product}
            home={true}
          />
          <Product
            key={63}
            productData={Data[11]}
            className={styles.product}
            home={true}
          />
          <Product
            key={73}
            productData={Data[13]}
            className={styles.product}
            home={true}
          />
        </div>
      </div>
    </>
  );
};

export default Popular;
