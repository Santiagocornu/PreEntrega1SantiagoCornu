import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/button/NavBar/NavBar'
import ItemListContainer from './assets/components/button/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
   <NavBar/>
   <ItemListContainer greeting="hola"/>
   </>
  )
}

export default App
