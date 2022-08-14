import React, { Component } from 'react'
import Cards from './Cards';
import NavBar from './NavBar';
import Supporters from './supporters';
import Footer from './footer';
export default class Home extends Component {
  render() {
    return (
      <>
      <NavBar home={true} />
       <Cards />
       <Supporters />
       <Footer/>
      </>
    )
  }
}
