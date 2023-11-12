const numberses = [26, 37, 27, 72, 67];
const double = [];
for(const num of numberses){
    const doubled = num * 2;
    double.push(doubled);
}
console.log(double);



// another way using map --------------
const numbers = [34, 23, 26, 47, 40];

function doubleIt (num){
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);




// map using array function---------
const number = [34, 23, 26, 47, 40];

const minus = number.map(minus => minus - 3);
console.log(minus);

const output = numbers.map((num) => num * 2);
console.log(output);


// string array using map
const friends = ["ami", "tomi", "oni", "apni", "unknown"];

const lengths = friends.map(len => len.length);
console.log(lengths);

const firstLetter = friends.map(letter => letter[0]);
console.log(firstLetter);