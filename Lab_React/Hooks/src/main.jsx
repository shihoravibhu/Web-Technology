/* The CSS code you provided is setting various styles for different elements on a webpage. Here's a
breakdown of what each part of the code is doing: */
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'


// Lab 13


function Hook(){

  const [count,setCount] = useState(0);
  const [isVisible,setIsVisible] = useState(true);
  const [sec,setSec] = useState(0);
  
//   useEffect(()=>{
//   console.log("its render every time (ano use vadhare nathi thato) (koi pan veriable change thase tyare aa render karse so no use of this type effect)");
// })


// useEffect(()=>{

//     console.log("its render only once when its hook(componet) render first time");
  
//  },[])

//  useEffect(()=>{

//   console.log("jyare count (apde rakeli 1 dependency) change thase tyare pachu render thase")
  
// },[count])

useEffect(()=>{
  
    console.log("jyare count and isVisible (apde rakeli 2 dependency) change thase tyare pachu render thase")
  
   },[count,isVisible])
  


  // setTimeout (delay jevu kam kare)/ setinternal

  useEffect(()=>{   // ahiya sec dependency  rakhel che etle k jyare jyare sec vadhse tyare tyare rerender thase component

    setTimeout(()=>{
      setSec(sec + 1);
      console.log("sec : " +  sec);
    },100000)

  },[sec])

  return(
    <>
    <button onClick={() => setCount(count + 1)} className='btn btn-outline-success'>Increse</button>
    <button onClick={() => setCount(count - 1)} className='btn btn-outline-warning'>Increse</button>

    <h1>Count : {count}</h1>

    <button onClick={()=>{ setIsVisible(!isVisible)}} className='btn btn-outline-danger'>
    {isVisible ? "Hide" : "Show"}
    </button>

    {isVisible && <p>hey i'am visible</p>}

    </>

  )
}


createRoot(document.getElementById('root')).render(
  <>
    <Hook/>
  </>
)
