import { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'
import styles from '../styles/SelectorBox.module.css'
import { Filtro } from './Filtro'

export const SelectorBox = () => {

    const {handleModal, handleCheck, cleanChecks, inputCheck} = useContext(AppContext)

  return (
    <div>
         <div className={styles.selectorBox}>
          <p>Filtros</p>
          <label className={styles.Label}><input ref={inputCheck} type="checkbox"  value='1' onChange={handleCheck} />Rubia</label>
          <label className={styles.Label}><input ref={inputCheck} type="checkbox"  value='2' onChange={handleCheck} />Morena</label>
          <label className={styles.Label}><input ref={inputCheck} type="checkbox"  value='3' onChange={handleCheck} />Roja</label>
          <button type='button' onClick={handleModal} className={styles.close}>X</button>
          <div className={styles.contenedorButtons}>
          <Filtro/>
          <button type='button' className={styles.btnClean} onClick={cleanChecks}>LIMPIAR</button>
          </div>
        </div>
    </div>
  )
}
