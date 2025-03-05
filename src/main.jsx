import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AddButtonAndSearch} from './Components/AddButton/AddButtonAndSearch.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddButtonAndSearch/>
  </React.StrictMode>,
)
