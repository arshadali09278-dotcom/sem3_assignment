import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseReducerApp from './assignments/use-reducer/UseReducerAssignment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseReducerApp />
  </StrictMode>,
)
