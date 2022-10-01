import { useState } from 'react'
import './App.css'
import { Filtro } from './components/Filtro'
import { GridProduct } from './components/GridProduct'
import { ListaCart } from './components/ListaCart'
import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'
import { AppProvider } from './Context/AppProvider'

function App() {

  return (
    <AppProvider>
    <div className="App">
      <Navbar/>
      <GridProduct/>
      <Modal/>
      <Filtro/>
      <ListaCart/>
    </div>
    </AppProvider>
  )
}

export default App
