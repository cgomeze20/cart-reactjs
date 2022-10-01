import React, { useContext, useMemo } from 'react'
import { AppContext } from '../Context/AppProvider'
import styles from '../styles/ListaCart.module.css'
import { ListItem } from './ListItem'

export const ListaCart = () => {

    const {cart,isShowCart, setIsShowCart } = useContext(AppContext)

    const price = useMemo(() => cart.reduce((prev,next) => prev + next.price,0), [cart]);

  return (
    <div className={isShowCart ? styles.Show : styles.Hide}>
    <div className={styles.titulo}>
    <h2>$ {price}</h2> 
    <button className={styles.closeCart} onClick={()=>setIsShowCart(!isShowCart)}>X</button>
    </div>
    <div>
        {
            cart.map(item =>(
                <ListItem key={item.name} item = {item}/>
            ))
        }
    </div>
    </div>
  )
}
