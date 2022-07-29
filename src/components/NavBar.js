import React from 'react'
import styles from './NavBar.module.css'
import logo from '../logo.png'
export default function NavBar() {
 const clickHandler = () => {
window.open("https://google.com")
  }
  return (<> 
        <div className={styles.headerImage} > </div>
    <div className={styles.main} >
      <ul className={styles.navContainer} >
        <li className={styles.nav}>Home</li>
        <li className={styles.nav}>Products</li>
        <li className={styles.nav}>Contact us</li>
      </ul>
        <input type={"search"} placeholder='Search ...' className={styles.searchBar} />
        <button onClick={clickHandler} className={styles.btn} >login / signup</button>
        <img src={logo}  className={styles.logo} />
      
    </div>
  
       </>
  )
}
