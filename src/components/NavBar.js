import React , { Component } from 'react'
import styles from './NavBar.module.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
  render () {
  return (<> 
        <div className={ this.props.home ? styles.headerImage : "" } > </div>
    <div className={styles.main} >
      <ul className={styles.navContainer} >
        <li className={styles.nav}><Link to="/" className={styles.nav} >Home</Link></li>
        <li className={styles.nav}><Link to="/products" className={styles.nav} >Products</Link></li>
        <li className={styles.nav}><Link to="/contactus" className={styles.nav} >Contact us</Link></li>
      </ul>
        <input type={"search"} placeholder='Search ...' className={styles.searchBar} />
        <button className={styles.btn} ><Link to="/login" >login / signup</Link></button>
        <img src={logo}  className={styles.logo} />
      
    </div>
  
       </>
  )
}
}
