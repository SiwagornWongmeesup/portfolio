import { StrictMode } from 'react'
import './index.css'; // ต้องมีบรรทัดนี้
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
