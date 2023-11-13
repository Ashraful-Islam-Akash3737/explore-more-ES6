/*
* you have an odd number of array..[1, 3, 5, 7, 9]
* now convert this array to an even array..[2, 4, 6, 8, 10]
* using for loop and map()
*
*
*/

const oddArray = [1, 3, 5, 7, 9];

// using for loop
let evenArray = [];
for(const element of oddArray){
    const item = element + 1;
    evenArray.push(item);
}
console.log(evenArray);

// using map()
const evenArrayIs = oddArray.map(item => item + 1);
console.log(evenArrayIs);