import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/app-router'
import Hero from './components/hero';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Hero/>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
