import React, { Component } from 'react'
import Cards from './Cards'
import styles from './Products.module.css'
import NavBar from './NavBar'
import Footer from "./footer"
export default class Products extends Component {
  render() {
    return (
      <>
      <NavBar home={false} />
      <div className={styles.container} >
        <Cards  />
      </div>
      <Footer />
      </>
    )
  }
}
