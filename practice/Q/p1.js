const Profile  = {

    id:"vibhu",
    isFollow:true,
    bio:"heyyy",
    followers:234,
    following:234,
};

console.log(Profile["id"]);
// or
console.log(Profile.id);
console.log(typeof Profile);

console.log(Profile["isFollow"]);
console.log(Profile["bio"]);
console.log(Profile["followers"]);

//Arithmetic Operators

let a = 2 ;
let b = 5 ;

console.log("a^b = " , a ** b);
console.log("b%a = " , b % a);

// Comparison Operators
let c = 5   // number
let d = "5"  // string —> number

console.log("c==d = " , c == d);      // Output = True (Aa Khali Andar Ni j Value Check Kare Data Type Nai)
console.log("c==d = " , c != d);      // Output = False

console.log("c===d = " , c === d);    // Output = False (Strickly Check Kare)
console.log("c!===d = " , c !== d);   // Output = True

// alert("Heyyy");

// let nm = prompt("Enter Your Name : ");

// console.log(nm);

for(let i=1 ; i<=5 ; i++){
    console.log("heyyyy");
}

// Template Literal

let obj = {
    item : "pen",
    price : 10 
};

let output = `The Cost Of ${obj.item} is ${obj.price} Rupess`;
console.log(output);

//                          Or


console.log("The Cost Of " , obj.item , "is " , obj.price , " Rupess");

let str = "heyyy";

console.log(str.slice(0,2));

let str2 = "hello" ;

for(let i of str){

    console.log(i)

}


// Function 

function sum(a,b){
    console.log(a+b);
}

sum(2,5);


// Arrow Function 

const arrowSum = (a,b) =>{
    console.log(a+b);
};

arrowSum(10,10);


// ForEach Loop (Higher Order Function/Method)

arr = ["Rajkot" ,"Mumbai" , "Gujarat"];

arr.forEach((value , idx , arr) => {

    console.log(value.toUpperCase() , idx , arr);
    
});


// DOM

document.getElementById("d1");
document.getElementsByClassName("d2");
document.getElementsByTagName("div");

let classnm = document.querySelector(".d2");     // d2 no only first element
console.dir(classnm);
document.querySelectorAll(".d2");   // badha d2