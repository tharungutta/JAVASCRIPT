// ! Array
// Collection of data at continous memory allocation . we create array using []
// Arrays are dyanamic in js, we can not restrict there size

// let a =[1,2,3,4,5]
// console.log(a);

// ! Creation
// let a  = [1,true,"Hello", null, undefined,Infinity,]

// let a =[1,2,3,4,5,6,7,5,8]
// //! property 
// //! 1. length  - used to find the length of the array
// console.log(a.length);

// //! methods 
// //! 1. pop - Used to remove last element element of array, will return the last element,will update the original array
// let r =a.pop()
// console.log(a);
// console.log(r);

// // ! push - Used to add element at last, will return the length of updated array , Will update the original array
// let r2 = a.push(10)
// console.log(a);
// console.log(r2);

// //! shift - Used to remove first element of array, will return the removed element, will update the original array.
// let r3= a.shift()
// console.log(a);
// console.log(r3);

// // ! unshift - Used to add element at first, Will return the length of updated array, will update the original array
// let r4 = a.unshift(100)
// console.log(a);
// console.log(r4);
 
// //! includes - Used to find wether the element is present in array or not , returns boolean value.
// let r5 = a.includes(5)
// console.log(a);
// console.log(r5);

// //! indexOf - Used to find the first matching index  for element , will return index or -1 if element is not present.
// let r6 =a.indexOf(5)
// console.log(r6);

// //! lastInndexOf - Used to find last matching index for element , will return index or -1 if element is not present.
// let r7 = a.lastIndexOf(5)
// console.log(r7);

// //! concat   - Used to merge multiple arrays into one, will not effect the original array, instead returns the new array.
// let a1 = [1,2]
// let a2 = [4,5]
// let a3 = [7,8]
// let a4 = [3,9]

// let a5 = a1.concat(a2,a3,a4)
// console.log(a5);
// console.log(a1);

// ! join() -  This method is used to convert array into string.

// let charArr = ['h','e','l','l','o']
// let str = charArr.join("")
// console.log(str);//hello



// //! reverse - Used to reverse the array, will update the original array and return the same array
// console.log(a);
// let r8 = a.reverse()
// console.log(r8);
// console.log(a);

// a.pop()
// console.log(a);
// console.log(r8);

// ! Reverse the string using the built-in methods

// let subjectName = "javascript"
// let convertedArr = subjectName.split("")
// console.log(convertedArr);
// let revArr = convertedArr.reverse()
// console.log(revArr);
// let revStr = revArr.join("")
// console.log(revStr);

// //! slice -  Used to extract a part of array , will accept startIndex and endingIndex, where endingIndex is not included , will return a new array,will not affect the original array.
// ^syntax - arrayName.slice(startIndex, endIndex)
// let r9 = a.slice(3,6)
// console.log(a);
// console.log(r9);


// //! splice  - Used to update the array, if we didn't want delete the elements then place 0. will delete the number of elements you have passed for the delete count from the startingIndex, and will add the new elements if passed. will return the array of deleted elements if no element is deleted returns empty array and it will update the original array.+
// ^syntax: arrayName.splice(startingIndex,deleteCount, elementsToBeAdded)
// console.log(a);
// let r10 = a.splice(3,6,1000,2000,3000)
// console.log(a);
// console.log(r10);

// let a= [100,200,300,400,500,600,700,800]
// Task - Filter out even numbers , Find the square of each element, Find the sum of all elements of array

//^ Advance methods 
//! 1.forEach - It is one higherOrder array method, It i sused traverse the array,It will take one callback function there it can take 3 parameters (element,index,array)
// a.forEach(( element,index,array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
    
// })

// let numbers  = [10,20,30,40,50,60]

// numbers.forEach((ele, index, arr)=>{
//     console.log(ele, index, arr);
// })

//! Add all the elements of the array using forEach() method.
// let sum =0
// numbers.forEach((ele)=>{
//     sum = sum+ele
// })
// console.log(`the sum of the array elements:${sum}`);

// let fe = numbers.forEach((ele)=>{
//     return ele;
// })
// console.log(fe)


// let marks = [10,20,30,40,50]
// let marks2 = []
// marks.forEach((ele)=>{
//     // console.log(ele+100);
//     marks2.push(ele+100)
// })
// console.log(marks2);


//!2. map()- I is the higher order method, used for traversing the array and if we want to do any operation with all the elements we can do.
// ! - This method will return one new method, it can take 3 parameters(element,index, array)
// let mappedArr = marks.map((ele)=>{
//     return ele+100
// })
// console.log(mappedArr);


// let product = ["Mobile","laptop","Camera"]
// let upper = product.map((ele)=>{
//     return ele.toUpperCase()
// })
// console.log(upper);

// ! Elements greater than 20 , by using forEach() method
// let greater = []
// marks.forEach((ele)=>{
//     if(ele>20){
//         greater.push(ele)
//     }
// })
// console.log(greater);

// ! 3.filter() - It is the higherOrderArray method , it is used to traverse the array and checks the condition if the condition is true then it will return the new array. It can take 3 parameters(ele,index,arr)

// let filteredArr = marks.filter((ele)=>{
//     return ele>20
// })
// console.log(filteredArr);

// ! 4.reduce() - Applies a function to reduce the array to single value

// let add = marks.reduce((acc,ele)=>{
//      return acc + ele
// },0)

// let mul = marks.reduce((acc,ele)=>{
//     return acc*ele
// },1)

// console.log(add);
// console.log(mul);

//^ practice question

// let prices = [200,400,500,600,100]
//! Find the value which are greater than 400 then add 200 with each value ,then add those values then tell what is the total price
// 500,600
//700,800
//1500

// let f = prices.filter((ele)=>{
//     return ele>400
// })
// console.log(f);
// let m = f.map((ele)=>{
//     return ele+200
// })
// console.log(m);
// let r = m.reduce((acc,ele)=>{
//    return acc+ele
// })
// console.log(r);

//^ using map , filter, reduce in same line
// let x = prices.filter((ele)=> ele>400).map((ele)=> ele+200).reduce((acc,ele)=> acc+ele)
// console.log(x);

// ! 5. sort()

// let ratings = [6,2,1,4,8,7,10,9]
// console.log("asscending order");
// let asc = ratings.sort((a,b)=>{
//     return a-b
// })
// console.log(asc);
// console.log("descending order");

// let des = ratings.sort((a,b)=> b-a)
// console.log(des);






























