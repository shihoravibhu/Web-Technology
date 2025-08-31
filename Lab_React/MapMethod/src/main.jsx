import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Faculty from './Components/faculty.jsx'
import Products from './Components/product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* q3 */}
{/*     
    <table class = "table-hover" border={1} style={{margin:"10px", marginTop:"50px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <Faculty />
      </tbody>
    </table>   */}


    {/* q4 */}
    <Products />

  </StrictMode>
)
