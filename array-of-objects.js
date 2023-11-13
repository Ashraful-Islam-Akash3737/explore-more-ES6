const products = [
    {id: 1, name: "lenevo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: "mac", price: 165000},
    {id: 5, name: "asos", price: 55000},
]

// array.map
const names = products.map(product => product.name);
const price = products.map(product => product.price);
console.log(names, price);


// forEach 
const id = products.forEach(p => console.log(p.id));
// console.log(id);



// filter
const graterThen50 = products.filter(p => p.price > 50000);
console.log(graterThen50);


// filter
const graterThen = products.find(p => p.price > 50000);
console.log(graterThen);


// reduce 
const totalPrice = products.reduce((previous, current) => previous + current.price, 0);
console.log(totalPrice);