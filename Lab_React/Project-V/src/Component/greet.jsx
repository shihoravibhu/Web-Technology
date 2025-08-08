// Lab 9 

// 1. Create a function component in separate ƒile and link with App.js (A) 

const name = "Vibhu";

// Method 1

function Greet1(){
    return <h1>Heyy1 {name}</h1>
}

// or

// const Greet1 = () =>{
//     return <h1>Heyy1</h1>
// }

// export default Greet1;

// or Method 2

// export default function Greet2(){
//     return <h1>Heyy2</h1>
// }

// or

function Greet2(){
    return <h1>Heyy2</h1>
}

// or Method 3

function Greet3(){
    return <h1>Heyy3</h1>
}

export default function Greet4(){
    return <h1>Heyy4</h1>
}

// export {Greet3};


// for multiple export

export {Greet1,Greet2,Greet3,name};

