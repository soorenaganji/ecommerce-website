import React, { Component } from 'react'
import styles from './card.module.css'
export default class card extends Component {
  render() {
    const {image,name} = this.props
        return (
      <div className={styles.container}>
        <img src={image} className={styles.image}/>
        <h3 className={styles.title} >{name}</h3>
        <p className={styles.matn} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi voluptate debitis illo magnam ab vero non numquam pariatur et, neque dignissimos cupiditate qui blanditiis nisi esse ipsam id placeat?</p>
      </div>
    )
  }
}
