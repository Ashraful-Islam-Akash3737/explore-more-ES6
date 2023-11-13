/*
* const people = [
    {
        name: "Meena", age: 20
    }
    {
        name: "Rina", age: 15
    }
    {
        name: "suchorita", age: 22
    }
]
*
* nou you have to find their age and find the sum of age using for loop 
* and using reduce()
*
*/
const people = [
    {
        name: "Meena", age: 20
    },
    {
        name: "Rina", age: 15
    },
    {
        name: "suchorita", age: 22
    }
]

const peopleArray = people.map(item => item.age).reduce((previous, current) => previous + current, 0);
console.log(peopleArray); //57
