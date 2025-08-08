import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Greet1,Greet2,Greet3 , name} from './Component/greet.jsx'
import Greet4 from './Component/greet.jsx'

// Lab 8

// class Xyz extends React.Component{   // function must be start with capital letter (Remmember this)
  
//   render(){
//     return <h1>Hello Word2 (Class vadu)</h1>
//   }
// }

// function Abc(){
//   return <h1>Hello Word3 (Function Vadu)</h1>

// }



// Lab 9

createRoot(document.getElementById('root')).render(


  <StrictMode>      { /* bug che k nai ena mate atiyare kam nu nathi*/}


    {/* Lab 8 */}

    {/* q2 */}
    {/* <App /> */}

    {/* q3 */}
    {/* <Xyz/> */}

    {/* q4 */}
    {/* <Abc/> */}



    {/* Lab 9 */}

    {/* q1 */}

    <Greet1/>
    <Greet2/>
    <Greet3/>
    <Greet4/>

    <h1>hello {name}</h1>

    
  </StrictMode>
)
