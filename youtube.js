//! if , else-if
let k= 9;
// if(k%2==0){
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
    
// }
// k%2==0?console.log("Number is even"):console.log("Number is odd");

// for(let i=0;i<100;i++){
//     console.log(i);
//     if(i==10){
//         break;
//     }
// }
// console.log('loop breaked');

let i=0;
// while(i<10){
//     // console.log('current i value:'+i);
//     // console.log(`current i value is: ${i}`);
//     console.log(`K value i s:${k}`);
    
//     // let a =55;
//     var a = 55;
//     if(i==5){
//         break;
//     }
//     i++
// }

// ! JS Scopes
// 1.Block scope 
// 2. Function scope
// 3.Global scope

// console.log(`K value is : ${k}`);
// console.log(`I value is : ${i}`);
// console.log(`A value is : ${a}`);

// function sampleFunction(){
//     console.log("Global Scope",k);
//     let functionScope = 99;
//     console.log('line 46:',functionScope);
    
// }
// // console.log(functionScope); function scope is not allow to print outside the function loop
// console.log(k);
// sampleFunction();

// function addNumbers(a,b){
//     let sum = a+b;
//     // return sum;
// }
// let sum = addNumbers(10,20);
// console.log(`Sum : ${sum}`);

// let sample=10;
// sample=null;
// console.log(sample);

//! Arrow functions
// const ArrowFunction=(a,b)=>{
//     console.log(`A :${a}, B :${b} `);
//    console.log("line 66: Hi from arrow function");
// }
// ArrowFunction(10,20);

//!  Arrays
// let cities = ['chennai','hyd','banglore','kerala'];
// console.log(cities);
// cities.push('Kochi');
// cities.pop();
// cities.unshift('Kochi');
// cities.shift();
// console.log(cities);

// for (let i=0;i<cities.length;i++){
    // console.log('index value:',i);
//     console.log(cities[i]); 
// }

const car ={
    brand : 'BMW',
    model : 'X6 Coupe',
    varient : 'Petrol',
    start:function startCar(){
        console.log('Starting the car');
    },
    horn:function soundHorn(){
        console.log('krrrrrrrr');
        
    }
}
// console.log(car.brand);
// car.start()
// car.horn()
console.log(Object.keys(car).length);

