import React,{useContext, useState} from 'react'
import { products } from '../../products'
import { ProductCard } from './ProductCard'
import styles from '../styles/GridProduct.module.css'
import { AppContext } from '../Context/AppProvider'

export const GridProduct = () => {

    const {handleClick,handleCheck,selectedValues} = useContext(AppContext)

    const filterdProducts = selectedValues.length == 0 
    ? products 
    :  products.filter(product => selectedValues.includes(product.filterId))

  return (
    <div className={styles.GridProduct}>
        {
            filterdProducts
            .map(beer =>(
                <ProductCard key={beer.name} product={beer} handleAddToCart={()=>handleClick(beer)} />
            ))
        }
    </div>
  )
}
