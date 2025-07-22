// ! Function

//! how to declare function

// function add(){
//     let a = 10;
//     let b=20;
//     let sum = a+b;
//     console.log(`the sum of${a} and${b} is ${sum}`);

// }
// add()


//! function with parameter

// function add(uname){
//     console.log(`good morning ${uname}`);
    
// }
// add("tharun");
// add("praj");
// add("giri");

//! function with return keyword

// function multiply(a,b){
//     return a*b;
// }
// let res = multiply(10,2)
// console.log(res);

//! Anonymous function - The function does not have any name , that is called anomymous function.

// let anomymous = function(){
//     console.log("I am anonymous function");
    
// }
// anomymous()

// ! Arrow function

// let arrowFunction = () => {
//        console.log("I am arrow function..");
       
// }
// arrowFunction()

// ! Find the area of triangle using arrow function

// let area = (h,b)=>{
//     let res = 1/2 * (h*b)
//     console.log(` the area of triangle is :${res} meter`);
// }
// area(20,4)

// ! nested function - when we are decalring one function inside the another function is called nested function.

let parent = ()=>{
    console.log("I am parent function");
    let child = ()=>{
        console.log("I am child function");
        
    }
    child()
}
parent()




