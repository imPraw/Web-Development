// Week: 1
// - learnt about variables
// - operators
// - data types

// console.log ("This is external file")
// let x = "Rita Rimal";
// console.log(x)

// let a =5
// let b =10

// let sum = a+b
// let difference = a-b
// let product = a*b

// console.log ("Sum is ", sum)
// console.log ("Difference is ", difference)
// console.log ("Product is ", product)

// // Week: 2
// // -learnt about if else statement
// // -learnt about loops

// let n = 5;
// let a = 10;

// if (n > a) {
//     console.log(n + "is greater than" + a);
// }
// else if (n < a) {
//     console.log(n +"is less than" + a);
// } 
// else {
//     console.log(n +"is equal to" + a);
// }
// v 


// year = 2025;
// if (year == 2025) {
//     console.log("This is 2025!");
// } else if (year < 2025) {
//     console.log("This is Past years!");
// } else {
//     console.log("This is Upconing year!");
// }



// let x = 10;
// if (x%2 == 0) {
//     console.log(`${x} is even number`);
// }
// else {
//     console.log(`${x} is odd number`);
// }


// Week: 3
// - learnt about functions
// - arrow functions 
// - arrays

// var x = prompt("Enter first number");

// function sum(a) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${a} * ${i} = ${a * i}`);
//     }
// }
// sum(x);

let newArray = ['ram', 'shyam', 'hari'];
console.table(newArray);
console.log(newArray[0]);

newArray.push('sita'); // add element at the end
console.table(newArray);

newArray.pop(); // remove last element
newArray.shift(); // remove first element 

newArray.unshift('gita'); // add element at the beginning 