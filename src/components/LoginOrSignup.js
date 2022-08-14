import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from "./footer"
export default class LoginOrSignup extends Component {
  render() {
    return (
      <>
         <NavBar home={false} />
         <Footer/>
      </>
    )
  }
}
