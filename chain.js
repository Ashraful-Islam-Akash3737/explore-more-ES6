const data = [{id: 1, name: "akash", address: "sristigor"}];
// console.log(data);
// console.log(data[0]);
console.log(data[0].address);


// nested objects
const user = {
    user1: {
        name: {
            firstName: "Ashraful",
            middleName: "Isalm",
            lastName: "Akash"
        },
        age: 20,
    },
    user2: {
        name: {
            firstName: "Aaaaaaaa",
            middleName: "Iiiiiiii",
            lastName: "AaaaaSSSSaaaaaA"
        },
        age: 30,
    },
}
// console.log(user.user1.name.firstName);



// use optional chain(?)--(if yes-result, if no-undefined)----------------
const userDetails = {
    user3: {
        name: {
            firstName: "Ashraful",
            middleName: "Isalm",
            lastName: "Akash"
        },
        age: 20,
        address: {
            policeStation: "Shibpur",
            district: "Narsingdi",
            country: "Bangladesh"
        }
    }
}
console.log(userDetails.user3.address?.country);