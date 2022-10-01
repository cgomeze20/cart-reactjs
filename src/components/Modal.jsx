import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppProvider'
import styles from '../styles/Modal.module.css'
import { SelectorBox } from './SelectorBox'

export const Modal = () => {

const {isShow} = useContext(AppContext)

  return (
    <div className={isShow ? styles.Show : styles.Hide }>
       <SelectorBox/>
    </div>
  )
}
