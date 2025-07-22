 //! creating object by object literals

// let identifier = {
//     key : values,
//     key : values,
//     key : values
// }

let player = {
    pName : "tharun",
    jersyNo: 18,
    isDancer: true,
    shots:["pull","cover","drive"],
    work: ()=>{
        console.log("Playing  cricket");
    },
    address:{
        city:"chennai",
        pincode: 123456
    }
}
console.log(player);

// ! How to access

console.log(player.jersyNo);
console.log(player.shots);
console.log(player.address);
console.log(player.address.city);

player.work()

// ! How to change the data 
player.pName = "Virat Kohli"
console.log(player);

//! How to add the data
player.phNo = 1234567890
console.log(player);

// ! How to delete the element
delete player.isDancer
console.log(player);

//^ methods

let ob1 = {
    name:"pen",
    price: 30,
    color:"red"
}

// ~ 1. Object.keys()

let keys = Object.keys(ob1)
console.log(keys);

//~ 2. Object.values()
let values = Object.values(ob1)
console.log(values);

//~ 3. Object.entries()
console.log(Object.entries(ob1));

//~ 4. Object.freeze()
Object.freeze(ob1)
console.log(Object.isFrozen(ob1));   // True









