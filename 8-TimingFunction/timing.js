console.log("start");

//! setTimeout()

// setTimeout (()=>{
//     console.log("I am setTimeout");
// },2000);

// console.log("Middle");

// let wish = ()=>{
//     console.log("Happy birthday");
// }

// setTimeout(wish,1000)
//! setInterval()
// let sorry =()=>{
//     console.log("I am sorry..");  
// }

// setInterval(sorry,1000)

// console.log("end");

//! clearTimeout()

// setTimeout(()=>{
//     console.log("Helo, how are you..");
// },3000)
// let a =setTimeout(()=>{
//     console.log("I am fine");
// },4000)

// clearTimeout(a)

//! clearInterval()

let b = setInterval(()=>{
    console.log("interval 1");
},1000)
setInterval(()=>{
    console.log("Interval 2");
},1000)

clearInterval(b)


