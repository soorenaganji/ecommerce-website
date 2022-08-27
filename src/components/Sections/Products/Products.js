import React, { Component } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import Product from "./Product";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }
  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products/`).then((Response) => {
      this.setState({
        productData: Response.data,
      });
    });
  }
  render() {
    const { productData } = this.state;
    return (
      <>
        <div>
          <div className={styles.container}>
            {productData ? (
              productData.map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={`${Math.round(product.price)}`}
                />
              ))
            ) : (
              <h1>loading...</h1>
            )}
          </div>
        </div>
      </>
    );
  }
}
