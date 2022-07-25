import React from 'react'
import styles from './supporters.module.css'
import telegram from '../logos/telegram.webp'
import twitter from '../logos/twitter.png'
import Meta from '../logos/Meta.png'
export default function supporters() {
  return (<>
        <h1 className={styles.title} >WHO SUPPORTS US?</h1>
        <div className={styles.container}>
        <img src={Meta} />
        <img src={telegram} />
        <img src={twitter} />
    </div></>
  )
}
