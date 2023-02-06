import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'

import {Login} from "./Pages/Login"
import {Cadastro} from "./Pages/Cadastro"
import {DashBoard} from "./Pages/DashBoard"

function App() {
  

  return (
    <div className="App">
 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/DashBoard' element={<DashBoard />} />
      </Routes>

    </div>
  )
}

export default App
