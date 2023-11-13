// find out sophias secondary schools location
let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary: [

                    { school_name: "ABC Primary School" },
                    { location: "Peter's burg" },

                ]

            },
            {
                secondary: [

                    { school_name: "ABC Primary School" },
                    { location: "St lorence" },

                ]
            }

        ]
    }
}
const schoolsLocation = data.sophia.study[1];
const secondarySchoolsLocation = schoolsLocation.secondary[1].location;
console.log(schoolsLocation); 
console.log(secondarySchoolsLocation);