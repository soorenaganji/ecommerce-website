import React , { useState } from 'react';
import Product from '../../Products/Product';
import shoes from './IMG_1220.JPG'
import Hoodie from './IMG_1217.JPG'
import Jacket from './IMG_1219.JPG'
import Shorts from './IMG_1218.JPG'
import styles from './Popular.module.css'
const Popular = () => {
    return (
        <>
        <div className={styles.cont} >
        <h1>Populars</h1>
        <div className={styles.container} >
         <Product title="Pinky NIKE Sneakers" image={shoes} Popular={true} price={200} />
         <Product title="Yellow/Black Off white Hoodie" image={Hoodie} Popular={true} price={990}/>
         <Product title="Blue/Black Under Armor Jacket" image={Jacket} Popular={true} price={740} />
         <Product title="Black Jean Shorts"  image={Shorts} Popular={true} price={150} />
         <Product title="Yellow/Black Off white Hoodie" image={Hoodie} Popular={true} price={990}/>
         <Product title="Black Jean Shorts"  image={Shorts} Popular={true} price={150} />
        </div></div>
        </>
    );
    };

export default Popular;