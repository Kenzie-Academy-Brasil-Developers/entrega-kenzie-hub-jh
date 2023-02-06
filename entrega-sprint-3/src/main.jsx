import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

import { GlobalStyle } from './Styles/GlobalStyle'
import {ResetStyles} from './Styles/ResetStyle'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <ResetStyles />
   <GlobalStyle />

    <BrowserRouter >
      <App />
    </BrowserRouter >

  </React.StrictMode>,
)
