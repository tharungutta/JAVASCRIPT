//^ JSON (Javascript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write , and easy for machines to parse and generate.


// ! Advantages of JSON:

//~ Human-readable
//~ JSON's structure is for developers to understand and write.
//~ Lightweight
//~ JSON is a minimal format that reduce the size of the data being transimitted.
//~ Language- independent
//~ JSON can be used with many programming languages.
//~ Including javascript, python , ruby, java etc..

let ob= {
    sname:"tharun",
    age:20,
    phNo:1234567890
}
console.log(ob);

//! 1.  JSON.stringify() - this method is used to convert any javascript object into json string. 

let jsonData = JSON.stringify(ob)

console.log(jsonData);
console.log(typeof jsonData);

//! 2.JSON.parse()- this method is used to convert json string data into javascript object.

let parseob = JSON.parse(jsonData)
console.log(parseob);



