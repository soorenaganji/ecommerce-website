import React from 'react'
import styles from './supporters.module.css'
import telegram from '../logos/telegram.png'
import twitter from '../logos/twitter.png'
import Meta from '../logos/Meta.png'
export default function supporters() {
  return (<>
        <h2 className={styles.title} >WHO SUPPORTS US?</h2>
        <div className={styles.container}>
        <img src={Meta} />
        <img src={telegram} />
        <img src={twitter} />
    </div></>
  )
}
