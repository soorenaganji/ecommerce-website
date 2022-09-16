import React, { useContext, useState, useEffect } from "react";
import styles from "./ProductsDetails.module.css";
import down from "../Home/Cards/down.png";
import axios from "axios";
import up from "../Home/Cards/up.png";
import trash from "../Home/Cards/trash.png";
import { ProductContext } from "../../../Context/ProductContextProvider";
const ProductsDetails = ({ match }) => {
  const id = JSON.parse(match.params.id)
  const [product , setProduct] = useState({})
  useEffect( () => {
   axios.get(`https://fakestoreapi.com/products/${id}`)
   .then(Response => setProduct(Response.data))
  
  }) 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.main}>
        <img src={product.image} className={styles.image} />
        <p className={styles.description}>{product.description}</p>
      </div>
      <div className={styles.main2}>
        <p>
          Category : <span className={styles.category}>{product.category}</span>
        </p>
       
      </div>
    </div>
  );
};

export default ProductsDetails;
