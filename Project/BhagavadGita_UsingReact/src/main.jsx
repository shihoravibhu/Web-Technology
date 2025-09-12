import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './componets/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import Quotes from './componets/Quotes'
import About from './componets/About'
import Donate from './componets/Donate'
import Chapter from './Chapters'
import BhagavadGitaChatbot from './componets/Ai'
import Verses from './Verses'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/Quotes' element={<Quotes/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Donate' element={<Donate/>}></Route>
          <Route path='/Chapter/:id' element={<Chapter/>}></Route>
          <Route path='/BhagavadGitaChatbot' element={<BhagavadGitaChatbot/>}></Route>
          <Route path='/Verse/:id/:id2' element={<Verses/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  </StrictMode>
)
