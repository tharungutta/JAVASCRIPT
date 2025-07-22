
//!function : it is a reusable block of code , to do a particular task. we need to call the function to do the task. to get result from a function we can use return keyword. By default a function returns undefined.

// function add(a,b){
//     // console.log(a +b);
//     return a+b;
// }
//  let res1 =add(10,20)
//  let res2 =add(100,200)

//  console.log(res1);
//  console.log(res2);
//  console.log(add(1,2));
 
 //! Types of function
//  ! 1. Named function : A function having a identifier is called named function, we call the function with the identifier name.
//  Syntax:
// function name(parenthesis){

// }
// name()
// ! 2. Anonymous function : a function having no identifier is called anonymous function. To execute the anonymous function , we store it inside a variable and  we call the help of variable name.
// syntax:
// function name(parenthesis){

// }
 
// let add = function(){
//     console.log(1+2);
    
// };
// add()
// ! 3.Functional expression : The expression of storing the functiuon inside a variable is called functional expression. To call the function we have to use variable name only , we cant use function name for named function. 

// syntax:
//  let variable = function name(parenthesis){

// }
// variable()


// let add= function sum(){ 
//     console.log(1+2);
// };
// add();

// !4.  IIFE ( Immediate Invoke Functional Expression) - A function which is created and called immediately, and we cant call the function later in our code . It is executed single time only. It is used to prevent variable pollution. At last semicolon is mandatory.
// ! variable pollution: wasting of variable name and memory area by creating variable which are not used again.
// syntax:
// (fn_declaration)(fn_call);

// (function(a,b){
//     let sum= a+b;
//       console.log(sum);
// })( 10,20);

// ! 5. Arrow function - It is a syntactic-sugar (less syntax) of creating function. They implicitly return a value if there is one statement written without curly braces.
// syntax:
//  let variable= (parameters) => {};
// variable();

// let add  = (a,b) =>{
//     console.log(a+b);    
// };
// add(10,20);
 

// ! 6. Higher-order function : a function which accepts another function as an argument is called higher-order function.
// !callback function : A function which is passed as an argument to higher order function is called as callback function.

// let add =(a,b) => a+b;
// let sub =(a,b) => a-b;
// let mul =(a,b) => a*b;
// let div =(a,b) => a/b;

// let calculate = (a,b,opp) => {
//     console.log(opp);
//     let result = opp(a,b)
//     console.log(result);
// }

// calculate(10,20,add)
// calculate(10,20,sub)
// calculate(10,20,mul)
// calculate(10,20,div)

//  Calculate is the higher-order function and add,sub,mul,div are the callback functions.

// let addition = (a,b)=>{
//     console.log(a+b);
// }
// let sub = (a,b)=>{
//     console.log(a-b);   
// }
// let mul = (a,b)=>{
//     console.log(a*b);
// }

// let calculate = (myfun,x,y)=>{
//      myfun(x,y);
// }

// calculate(addition,10,20)
// calculate(sub,10,20)
// calculate(mul,10,20)
// ! nested function - A function inside another function is called nested function. It should be called from parent function only.3

// function outer(){
//     function inner(){
//         console.log("Nested function");
//     }
//     inner();
// }
// outer();


// ! Hoisting- Moving the declaration part to the top of scope.

// console.log(a);
// console.log(b);
// var a = 10;
// let b= 20;
// console.log(a);
// console.log(b);

// add(1,2);
// function add(a,b){
//     console.log(a+b); 
// }


// function add(a,b){
//     console.log(a+b); 
// }
// add(1,2);


// sum(1,2);
// let sum = function(a,b){
//     console.log(a+b);
    
// } ;
// ! only named function can acessed before declaration.

// ! lexical scope - A scope in which the function is declared is called as lexical scope.
//! if we are taking nested function, inner function can take all the properties of outer function ,but outer cannot take the properties of inner function . it is called lexical scopping.

// var a=1 ;
// let  b=2;
// const c =3;

// function outer(){
//     var aa =10;
//     let bb=20;
//     const cc=30;
//     // console.log(a,b,c,aa,bb,cc);

//     function inner(){
//         var aaa =100;
//         let bbb= 200;
//         const ccc=300;

//         console.log(a,b,c,aa,bb,cc,aaa,bbb,ccc);
        
//     }
//     inner();
// }
// outer();
