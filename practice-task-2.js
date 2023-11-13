// console.log == output-1: PetersBerg, output-2: Harry
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. jonson",
            "city": "PetersBurg",
            "country": "UK",
        }
    },
    3333: {
        name: "Harry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "Dc. Road",
            "city": "Dhaka",
            "country": "Bangladesh",
        }
    }
}
// uotput-1:
const city = students[2222].address["city"];
console.log(city);

// output-2:
const nameIs = students[3333].name;
console.log(nameIs);