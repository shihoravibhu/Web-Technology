import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// lab9

import {Greet1,Greet2,Greet3 , name} from './Component/greet.jsx'
import Greet4 from './Component/greet.jsx'

// lab 10

// import Abc from './Props/props_lab10.jsx'
// import Abc2 from './Props/props_lab10.jsx'

// or

// import { GrandParent } from './Props/props_lab10.jsx'


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


// Lab 10

// q2

//  function evt(){
//         alert("heyyyy");
//     }

function Display({isDisplay}){

  // if(isDisplay){       // aa rit prifrable nathi
  //   return (<> <h1> Diplaying </h1> </>);
  // }

  // else{
    
  //   return (<> <h1> Not Diplaying </h1> </>);
  // }


  return (
    <>
    {isDisplay && <h1>Displaying</h1>}
    {!isDisplay && <h1>Not Displaying</h1>}
    </>
  )

}

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

    {/* <Greet1/>
    <Greet2/>
    <Greet3/>
    <Greet4/>

    <h1>hello {name}</h1> */}



    {/* Lab 10 */}

    {/* q1 */}

    {/* <Abc name="vibhu" age={18}/> */}

            {/* or */}

    {/* <Abc2 name="vibhu" age={18}/> */}

    {/* <GrandParent name="v" age={10}/> */}


    {/* q2 */}

    

    {/* <button onClick={evt}>Add</button> */}

    {/* or  (Another)*/}

    {/* <button onClick={()=>{alert("hey")}}>Add</button> */}


    {/* q3 */}


   <Display isDisplay={true}/>

    
  </StrictMode>
)
