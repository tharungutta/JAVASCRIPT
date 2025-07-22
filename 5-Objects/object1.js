//! How to create an object

let student= {
    sname:"tharun",
    age:20,
    isPlayer:true,
    sub:["html","css","js","java","python"],
    do:()=>{
        console.log("eat sleep study");
    },
    address:{
        city:"chennai",
        pin:600089
    }
}
console.log(student);

// ! how to access object property

console.log(`the name of the student is :${student.sname}`);
console.log(`age of the student is ${student.age}`);
console.log(`city of the student is: ${student.address.city}`);
console.log(student.sub);

//! how to add an element

student.phNo = 9392618109
console.log(student);

//! how to update the element

student.isPlayer  = false
console.log(student);

//! how to delete an element

delete student.age
console.log(student);

student.sub.forEach((ele)=>{
    console.log(ele.toUpperCase());
    
})

// ^ Objects methods
//~ 1.Object.keys() - this method is used to return all the keys of the in the form of an array.
let keys = Object.keys(student)
console.log(keys);

// ~ 2. Object.values()- this method is used to return all the values of an object in the form of an array.
let values = Object.values(student)
console.log(values);

//~ 3. Object.entries() - It will return one array where all the value and key will be stored in separate one array.
let key_value = Object.entries(student)
console.log(key_value);

// ~ 4. object.freeze()- this method will make the object frozen where we can't add /modify/delete any element from the object.
let ob1 = {
    sname:"rahul",
    age:20
}
console.log(ob1);
Object.freeze(ob1)
console.log("after freeze");

ob1.phNo = 1234456789      // we can not add
ob1.age = 21               // we can not modify
delete ob1.age             // we can not delete

console.log(ob1);

// ~ 5. Object.isFrozen()- It is used to check whether any object is frozen or not.
//~ if it is frozen it will return true , else it will return false.

console.log(Object.isFrozen(ob1));           // true
console.log(Object.isFrozen(student));       // false

// ~ 6. Objcet.seal()- It is also similar to object.freeze() method. we can't add or we can't delete but we can modify the value.

let ob2 ={
    sname:"praj",
    age:21
}
console.log(ob2);
Object.seal(ob2)
console.log("after using object.seal()");

ob2.phNo = 9090909090     // we can not add
delete ob2.age            // we can not delete

ob2.age = 15              // modification is possible
console.log(ob2);

// ~ 7. object.isSealed() - It is used to check any object is sealed or not, if it sealed it will return true else it will return false.

console.log(Object.isSealed(ob2));        // true
console.log(Object.isSealed(student));    // false

//~ 8. Object.assign()

let ob3 = {
    sname:"giri",
    age:20
}
let ob4= {
    city:"Chennai",
    phNo:3214567890
}
// let newOb = Object.assign(ob3,ob4)
let newOb = Object.assign({},ob3,ob4)

console.log(newOb);
console.log(ob3);
console.log(ob4);













