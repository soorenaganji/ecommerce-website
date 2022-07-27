import React, { Component } from 'react'
import styles from './card.module.css'
import down from './down.svg'
import up from './up.svg'
export default class card extends Component {
  constructor () {
    super();
    this.state = {
      ifShow : false ,
      ifShowBtn : true ,
      counter : 1
    }
  }
upHandler = () => {
this.setState((prevState) => ({
  counter : prevState.counter + 1
}))
}
downHandler = () => {
  if (this.state.counter > 1){
  this.setState((prevState) => ({
    counter : prevState.counter - 1
  }))}
  if (this.state.counter === 1){
    this.setState(() => ({
      ifShow : false ,
      ifShowBtn: true ,
      
          }))
  }
}

   clickHandler = () => {
    this.setState(() => ({
ifShow : true ,
ifShowBtn: false ,

    }))
    
     }
  render() {
    const {image,name} = this.props
        return (<>
      <div className={styles.container}>
        <img src={image} className={styles.image}/>
        <h3 className={styles.title} >{name}</h3>
        <p className={styles.matn} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi voluptate debitis illo magnam ab vero non numquam pariatur et, neque dignissimos cupiditate qui blanditiis nisi esse ipsam id placeat?</p>
      <button className={this.state.ifShowBtn ? styles.buy : styles.doNot} onClick={this.clickHandler} >Buy Tutorial</button>
       <div className={this.state.ifShow ? styles.btn : styles.doNot} >
       <img src={down} onClick={this.downHandler} className={styles.down} />
        <p>{this.state.counter}</p>
        <img src={up} onClick={this.upHandler}  />
       </div>
      </div>
       </>
    )
  }
}
