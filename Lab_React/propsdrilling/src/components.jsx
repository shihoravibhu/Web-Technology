// props nu drilling

function A() {
    const name = "vibhu";

  return (
    <div style={{border : "2px solid blue" , padding : "100px"}}> <B name = {name} /> </div>
  )
}

function B(props){
    const age = 18;

    return (
      <div style={{border : "2px solid green" , padding : "80px"}}> <C name = {props.name} age = {age}/> </div>
    )
}

function C(props){
    const secName = "shihora";
    
     return (
      <div style={{border : "2px solid pink" , padding : "60px"}}> <D name = {props.name} age = {props.age} secName = {secName} /> </div>
   
    )
}
function D(props){

    const rollNo = 177;   
    
     return (
    <div style={{border : "2px solid orange" , padding : "40px"}}> <E name = {props.name} age = {props.age} secName = {props.secName} rollNo={rollNo} /> </div>
    )
}
function E(props){

     return (
    <div style={{border : "2px solid black" , padding : "30px"}}> 
        Name : {props.name}
        <br />
        SecondName : {props.secName}
        <br />
        age : {props.age}
        <br />
        RollNo : {props.rollNo} 
     </div>
    )


}

export default A