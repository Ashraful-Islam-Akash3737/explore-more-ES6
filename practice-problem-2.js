/*
* you have an array....[33, 50, 79, 78, 90, 101, 30]
* return all the element which is divisable by 10
* using array.filter()
*
* using array.find()
*/

// array.filter()
const myArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = myArray.filter(item => item % 10 === 0);
console.log(divisibleByTen); //[ 50, 90, 30 ]

// array.find()
const myArrayIs  = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTenIs = myArrayIs.filter(item => item % 10 === 0);
console.log(divisibleByTenIs); //[ 50, 90, 30 ]