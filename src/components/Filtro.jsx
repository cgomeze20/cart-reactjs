import React, { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import styles from '../styles/Filtro.module.css'

export const Filtro = () => {

    const {handleModal, selectedValues} = useContext(AppContext)

  return (
    <div className={styles.Filtro}>
    <button type='button' className={styles.boton}  onClick={handleModal}>
        FILTRAR
        <img src='svg/filters.svg'/>
    </button>
    { selectedValues.length > 0 
    ? <div className={styles.contador}>{selectedValues.length}</div> 
  : ''
  }
    </div>
  )
}
