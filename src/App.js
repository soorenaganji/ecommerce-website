import React from 'react';
import Home from './components/Home'
import { Route } from 'react-router-dom';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import LoginOrSignup from './components/LoginOrSignup'
const App = () => {
    
        return (
        <>
           <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginOrSignup} />
            <Route path="/products" component={Products} />
            <Route path="/contactus" component={ContactUs} />
           </div>
        </>
        );
    }

export default App;
