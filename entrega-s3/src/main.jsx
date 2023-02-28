import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ModalAtualizaExcluirProvider } from "./Contexts/ModalEditaExluir/ModalEditaExluir"
import { GlobalStyle } from './Styles/GlobalStyle'
import {ResetStyles} from './Styles/ResetStyle'
import { ModalAddTechProvider } from "/src/Contexts/ModalAddTech/ModalAddTech.jsx"
import { RenderTechsProvider } from "./Contexts/RenderTechsContexto/RenderTechsContextos"
import { UserContextProvider } from './Contexts/UserContext/userContext'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <ResetStyles />
    <GlobalStyle />

    <BrowserRouter >
      <ModalAddTechProvider>
       <RenderTechsProvider>
        <ModalAtualizaExcluirProvider>
          <UserContextProvider>
         
          <App />

          </UserContextProvider>
         </ModalAtualizaExcluirProvider>
       </RenderTechsProvider>
      </ModalAddTechProvider>
    </BrowserRouter>

  </React.StrictMode>
)
