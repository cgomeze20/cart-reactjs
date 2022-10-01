import React,{ useContext } from 'react'
import menuLogo from '/svg/menu.svg'
import Logo from '/svg/logo.svg'
import searchLogo from '/svg/search.svg'
import cartLogo from '/svg/cart.svg'
import styles from '../styles/Navbar.module.css'
import { AppContext } from '../Context/AppProvider'

export const Navbar = () => {

    const { cart, handleShowCart } = useContext(AppContext)


  return (
    <nav style={styles.nav}>
        <div className={styles['logo-left']}>
            <img className={styles.menu} src={menuLogo} alt="menu" />
            <img className={styles.logo} src={Logo} alt="logo" />
        </div>
        <div className={styles['logo-right']}>
            <div className={styles.cantidad}>{cart.length > 9 ? '9+' : cart.length}</div>
            <img className={styles.search} src={searchLogo} alt="menu" />
            <img className={styles.cart} src={cartLogo} alt="logo" onClick={handleShowCart} />
        </div>
    </nav>
  )
}
