// console.log("We are learning string's today");

// let boy= "Tharun "
// let girl = "Samantha"
// let sentence = boy+" has crush on "+girl
// console.log(sentence);

// let a =20;
// let b= 10;
// let add = "sum of "+a+" and "+b+" is "+(a+b) 
// !String Interpolation
// let add = `Sum of ${a} and ${b} is ${a+b}`
// console.log(add);

//!Length - to find length of a string
// let password = "abc123"
// let password = prompt("Enter your password");
//! prompt is used to take input from the user.
// console.log(`Your password is ${password}`);
// let length = password.length
// console.log(`Length of your password is ${length}`); 

//!trimStart ,trinEnd  and trim
// let search=prompt("Enter your search");
// let search = "     iphone    "
// console.log(search);
// console.log(search.length);
// let newsearch = search.trimStart();
// console.log(newsearch);
// console.log(newsearch.length);
// let new1 = newsearch.trimEnd();
// console.log(new1);
// console.log(new1.length);
//  let new2 = search.trim();
//  console.log(new2);
//  console.log(new2.length);
 
//! toLowerCase and toUpperCase
// let search = "IPHONE"
// let newstring = search.toLowerCase();
// console.log(newstring);
// let upperstring = newstring.toUpperCase();
// console.log(upperstring);

// ! replace and replaceAll
// let str = " Tyyo Tyyo Appa Amma Tyyo Tyyo"
// console.log(str);
// let newstr = str.replace("T","A")
// console.log(newstr);
// let newstr2 = str.replaceAll("T","A")
// console.log(newstr2);

//! substring and slice - to extract particular part in a string
// let str = "Ayyo Ayyo Appa Amma Ayyo Ayyo "
// let newStr  = str.substring(10,14)
// console.log(newStr);
// let newStr2 = str.slice(10,14)
// console.log(newStr2);
// let newStr  = str.substring(14,10)//!if start value is higher than the end value , then in substring it will take lesser value as start value
// console.log(newStr);
// let newStr2 = str.slice(14,10)//!if start value is higher than the end value, then in slice it will print the empty space
// let newStr  = str.substring(-10,-5)// ! substring won't accept the negative values, it will print the empty space
// console.log(newStr);
// let newStr2 = str.slice(-10,-5)//! In this we can't get the last value 
// console.log(newStr2);

//! indexOf() - is used to determine the index of a string
//! lastIndexOf()
// let index = str.indexOf("Appa")
// console.log(index);
// let index1 = str.indexOf("Ayyo")
// console.log(index1);
// let index2 = str.indexOf("Ayyo",1)
// console.log(index2);
// let index3 = str.lastIndexOf("Ayyo")
// console.log(index3);

//! spilt() - is used to convert the string to array format
// let str = "Ayyo Ayyo Appa Amma Ayyo Ayyo"
// let arr = str.split(" ")
// console.log(arr);
// let str1 = "Ayyo-Ayyo Appa-Amma Ayyo-Ayyo "
// let arr1 = str1.split("-")
// console.log(arr1);

// ! includes()-  to check whether the particular string is present or not - boolean type 
//  let str = "Ayyo Ayyo Appa Amma Ayyo Ayyo"
//  let res = str.includes("Appa")
//  console.log(res);
//  let res1 = str.includes("Apaa")
//  console.log(res1);
//! charAt()-  It is used to find the charcater at that particular index
// let char = str.charAt(20)
// console.log(char);

//! concat - is used to combine the words 
// let str1 = "Ayyo"
// let str2 = "Appa"
// let str3 = "Amma"
// let str4= str1.concat(str1,str2,str3,str1,str1)
// console.log(str4);
// let str5 = str1.concat(" ",str1," ",str2," ",str3," ",str1," ",str1)
// console.log(str5);

//! toString - is used to convert any data type to string type
let a = 10
console.log(a);
console.log(typeof a);
let string = a.toString()
console.log((string));
console.log(typeof string);




 














 




