import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/app-router'
import Navbar from './components/navbar';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
