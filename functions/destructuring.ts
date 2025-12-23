
//Object destructuring

const user = {
    id: 345,
    name: {
        firstName: "Mezbaul",
        middleName: "Abeding",
        lastName: "Persian"
    },
    contactNo: "0123456789",
    address: "Serbia"
};

const {contactNo} = user;


//Array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;