
//interface

type User1 = {
    name: string;
    age: number;
};

interface User2{
    name: string;
    age: number
};

type UserWithRole1 = User1 & {role: string};

interface UserWithRole2  extends User1{
    role: string;
}
const user1: UserWithRole1 = {
    name: "Dipok",
    age: 23,
    role: "Frontend Developer",
}

type rullNumber = number




// js ---> object, array --> object function ---> object


type Roll1 = number[];

interface Roll2 {
[index : number] : number
}

const rollNumber1: Roll1 = [1, 2, 3];




type Add1 = (number1: number, number2: number) => number
interface Add2 {
    (numbe1: number, number2: number): number
}


const add: Add2 = (numbe1: number, number2: number) => numbe1 + number2;