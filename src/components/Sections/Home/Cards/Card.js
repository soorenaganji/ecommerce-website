import React, { useState } from 'react'
import styles from './card.module.css'
import { Link } from 'react-router-dom'
export default function Card ({ image , name  , src}) {
        return (<>
        
      <div className={styles.container}>
        <h3 className={styles.title} >{name}</h3>
        <div className={styles.container2} > 
        <img src={image} className={styles.image}/>
        <p className={styles.matn} > We have the Best one . Doubt it? Take a look</p>
        </div>
      <Link className={styles.buy} to={src} >Take a look</Link>
      
      
      </div>
       </>
    )
  }

