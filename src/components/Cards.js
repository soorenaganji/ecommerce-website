import React from 'react'
import styles from './cards.module.css'
import Card from './Card'
import vuee from '../cardsPics/vue.png'
import react from '../cardsPics/React.webp'
import angular from '../cardsPics/angular.png'
export default function cards() {
  return (
    <div className={styles.container}>
<Card image={vuee} name={"Vue"} color={"green"}  />
<Card image={react} name={"React"} color={"blue"} className={styles.react} />
<Card image={angular} name={"Angular"} color={"red"} className={styles.angular} />
    </div>
  )
}
