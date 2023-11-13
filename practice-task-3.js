// access and then show output-1: amar adda
// show output-2: beginner
let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "amar golpo",
                catagory: "ami-jani-na",
                price: "100$"
            },
            bookCatagory: "basic",

        },
        {
            bookId: 2,
            bookDetails: {
                name: "amader golpo",
                catagory: "ami-bolbo-na",
                price: "1000$"
            },
            bookCatagory: "beginner",

        }
    ]
}
// output-1:
const nameIs = data2.data[0].bookDetails.name;
console.log(nameIs);

// output-2
const bookCatagory = data2.data[1].bookCatagory;
console.log(bookCatagory);
