import React, { useContext, useEffect } from "react";
import styles from "./Products.module.css";
import Product from "./Product";
import { ProductContext } from "../../../Context/ProductContextProvider";
export default function Products() {
  const productData = useContext(ProductContext);
  return (
    <>
      <div>
        <div className={styles.container}>
          {productData.map((item) => (
            <Product key={item.id} productData={item} home={false} />
          ))}
        </div>
      </div>
    </>
  );
}