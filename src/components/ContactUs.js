import React, { Component } from 'react'
import styles from './ContactUs.module.css'
import NavBar from './NavBar'
import Footer from "./footer"
export default class ContactUs extends Component {
  render() {
    return (
      <>
       <NavBar home={false} />
       <div className={styles.container} >
        <p className={styles.main} >Email : <a target={"blank"} href='https://sorena.ganji83@gmail.com' >sorena.ganji83@gmail.com</a> </p>
        <div className={styles.main} >
          Location
        </div>
        <p className={styles.main} >phone number : +98 902 660 7436</p>
       </div>
       <Footer/>
      </>
    )
  }
}
