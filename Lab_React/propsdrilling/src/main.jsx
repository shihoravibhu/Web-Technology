import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import A from './components'
import ProductName from './card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <A />
  <ProductName/>
  </StrictMode>
)
