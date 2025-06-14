// Q1

// let nm = prompt("Enter Full Name : ");
// console.log(nm);

// nm = "@" + nm + nm.length ;

// console.log(nm);



// Q2

// let arr = [250,635,300,900,50];


// for(let i=0 ; i<arr.length ; i++){
//     arr[i]=arr[i]-arr[i]*0.1 ;
 
// }

// console.log(arr);


// Q3

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM" ,"Netflix"] ;

// companies.shift();   // Delete From Starting
// companies.pop();   // Delete From Ending


// companies.splice(1,1,"Ola");    // (Starting Index , HowMany Delete Element , AddElement)
// console.log(companies.slice(0,3));   

// companies.push("Amazon");  //For Add



// Q4

// function vowel(str){
//     let count = 0 ;
//     for(let i=0 ; i<str.length ;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//            count++;
//         }
//     }
//     console.log(count);
// }

// vowel("hello")

// // OR

// let vowelArrow = (str2) =>{

// }



// Q5 (For Each Loop) (For a given array of numbers, print thes square of each value using the forEach loop .)

// arr = [1,2,3,4,5];

// arr.forEach((value) => {

//     console.log(value*value);
// });



// Q6 (We are given array of marks of students Filter out the marks of students that scored 90+.)

// let marks = [99,100,88,86,85];

// let topper = marks.filter((m) => {
//     return m > 90 ;
// });

// console.log(topper);



// Q7 (Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.)

// let n = prompt("Enter Number : ");

// let arr = [] ;

// for(let i=1 ; i<=n ; i++){
//     arr[i-1] = i ;
// }

// console.log(arr);

// let sum = arr.reduce((res , curr) => {
//     return res + curr ;
// });

// console.log(sum);

// let fac = arr.reduce((res , curr) => {
//     return res * curr ;
// });

// console.log(fac);



// Q8

// let div = document.querySelector("div");     // d2 no only first element
// console.dir(div);



// Q9   Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College
// students" to this text using JS

// let h = document.querySelector("h2");
// console.dir(h.innerText);

// h.innerText = h.innerText + " heyy" ;



// Q10

// let dv = document.querySelectorAll(".box");

// dv[0].innerText = "Hey1";
// dv[1].innerText = "Hey2";
// dv[2].innerText = "Hey3";

// console.log(dv[0])
// console.log(dv[1])
// console.log(dv[2])



// Q11

let modebtn = document.querySelector("#btn");
let currmode = "light"

modebtn.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark"
        document.querySelector("body").style.backgroundColor="black";
    }
    else{     
        currmode = "light"   
        document.querySelector("body").style.backgroundColor="white";
        // document.querySelector("#btn").style.backgroundColor="dark";
        // document.querySelector("#btn").style.color="white";
    }
    console.log(currmode);
})





