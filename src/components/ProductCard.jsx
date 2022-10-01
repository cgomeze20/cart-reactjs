import React, { useState } from 'react'
import styles from '../styles/ProductCard.module.css'

export const ProductCard = ({product,handleAddToCart}) => {


  return (
    <div className={styles.ProductCard}>
        <img className={styles.imagen} src={`img/${product.img}`} alt={product.name} />
        <p className={styles.name}>{product.name}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>$ {product.price}</p>
        <button className={styles.boton} type='button' onClick={handleAddToCart}>AGREGAR</button>
    </div>
  )
}
