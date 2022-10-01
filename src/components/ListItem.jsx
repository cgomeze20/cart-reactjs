import React from 'react'
import styles from '../styles/ListItem.module.css'

export const ListItem = ({item}) => {
  return (
    <div className={styles.ListItem}>
        <img src={`img/${item.img}`} alt={item.name} />
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
        </div>
    </div>
  )
}
