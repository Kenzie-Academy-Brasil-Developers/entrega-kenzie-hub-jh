import { Route , Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </div>
  )
}

export default App
