import React from "react";
import Home from "./components/Sections/Home/Home";
import { Route } from "react-router-dom";
import Products from "./components/Sections/Products/Products";
import LoginOrSignup from "./components/Sections/LoginorSignup/LoginOrSignup";
import NavBar from "./components/Global/NavBar";
import Footer from "./components/Global/footer";
import Login from "./components/Sections/LoginorSignup/login";
import styles from "./App.module.css";
import forgotPass from "./components/Sections/LoginorSignup/forgotPass";
import About from "./components/Sections/Home/About/About";
import ProductsDetails from "./components/Sections/Products/ProductsDetails";
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import Cart from "./components/Sections/Cart/Cart";
const App = () => {
  return (
    <div className={styles.container}>
      <ProductContextProvider>
      <CartContextProvider> 
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={LoginOrSignup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/Cart" component={Cart} />
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/aboutUs" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotPass" component={forgotPass} />
        </div>
        <Footer />
        </CartContextProvider> 
      </ProductContextProvider>
    </div>
  );
};

export default App;
