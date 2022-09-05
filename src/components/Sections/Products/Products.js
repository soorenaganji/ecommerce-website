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
// import React, { useContext } from "react";

// // Components
// import Product from "./Product";

// // Context
// import ProductsContext from "../../../Context/ProductContextProvider";

// const Products = () => {
//   const productss = useContext(ProductsContext);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//       }}
//     >
//       {productss.map(product => (
//         <Product key={product.id} productData={product} />
//       ))}
//     </div>
//   );
// };

// export default Products;
