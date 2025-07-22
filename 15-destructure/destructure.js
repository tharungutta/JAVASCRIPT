let ob1 ={
    obname : "pen",
    price : 10,
    color : "green"
}
console.log(ob1.price);

//! Object destructure

let {color, obname, price} = ob1
console.log(price);
console.log(color);

//! array destructure

let arr = [10,20,30,40,50,60,70]
let [a,b,c] = arr

console.log(a);
console.log(b);
console.log(c);

//! rest parameter - The rest parameter is used to group the remaining elements into an array.
// - It collects the rest of the arguments that were not explictly specified.
//- the rest parameter is specified by using three dots(...)

function hello(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

hello(10,20,30,40,50,60)

let [x,y,...z] = arr
console.log(z);

//! spread operator - The spread operator in JavaScript allows to expand an array, object , or iterable into indiviual elemets.
// It is often used to copy , merge , or pass the elements.
// The spread operator is represented using three dots (...)
let a1 = [10,20,30]
let a2 = [40,50,60]
let b1 = [...a1,...a2]

console.log(b1);

//! shallow copy - A shallow copy of an object is a new object that is a copy of original, but it only copies the references of nested objects instead of creating new instances.
// This means that if original object contains another object as a property, changes to the nested object in the copy will affect the original and vice versa.

let a3 = [10,20]
let copy = a3

copy.push(40)

console.log(copy);  //[10,20,40]
console.log(a3);    //[10,20,40]


//! deep copy - A deep copy creates a completely independently clone of the original object, including all nested objects. Changes to the copied object do not affect the original.

let a4 = [50,60]
// let copy2 = [...a4]

let copy2 = JSON.parse(JSON.stringify(a4))

copy2.push(100)
console.log(copy2);  //[50,60,100]
console.log(a4);     //[50,60]




