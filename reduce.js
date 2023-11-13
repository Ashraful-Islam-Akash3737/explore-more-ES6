const number = [3, 26, 4, 16, 8, 59, 6, 90];
const sum = number.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum);