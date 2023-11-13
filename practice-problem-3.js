/*
* you have an array of objects
* const instructor = [
    {name: "Nodi", age: "28", position: "senior"},
    {name: "Akil", age: "26", position: "jonior"},
    {name: "Sobuj", age: "30", position: "senior"},
]

*
* your task is to display the instructor name that has the position senior using filter()
*
*/


const instructor = [
    {name: "Nodi", age: "28", position: "senior"},
    {name: "Akil", age: "26", position: "jonior"},
    {name: "Sobuj", age: "30", position: "senior"},
]

const instructorName = instructor.filter(pos => pos.position === "senior").map(nam => nam.name);
console.log(instructorName);
