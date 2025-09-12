import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Validation from './Form'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Validation/>
  </StrictMode>
)
