import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Pneus from './pages/pneus'
import PapaiNoel from './pages/PapaiNoel'
import Bomba from './pages/Bomba'
import Lesmas from './pages/Lesmas'
import Combustivel from './pages/Combustivel'
function App() {
 
  return (
    <div className="app">
      <Home />
      <Demo />
      <Pneus/>
      <PapaiNoel/>
      <Bomba />
      <Lesmas />
      <Combustivel />
    
    </div>
  )
}

export default App
