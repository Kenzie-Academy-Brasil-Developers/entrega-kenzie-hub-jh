import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'


import { GlobalStyle } from './Styles/GlobalStyle'
import {ResetStyles} from './Styles/ResetStyle'
import { TechContextProvider } from "./Contexts/TechContext/TechContext"
import { UserContextProvider } from './Contexts/UserContext/userContext'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <ResetStyles />
    <GlobalStyle />

    <BrowserRouter >
     
       <TechContextProvider>
       
          <UserContextProvider>
         
          <App />

          </UserContextProvider>
       
       </TechContextProvider>
       
    </BrowserRouter>

  </React.StrictMode>
)
