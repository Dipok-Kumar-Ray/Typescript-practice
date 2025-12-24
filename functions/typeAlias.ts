
//type alias

type Student = {
    name: string,
    age: number,
    contactNo?: string,
    gender: string,
    address: string 
}



const student1: Student = {
    name: "Mezba",
    age: 50,
    contactNo: "0123456789",
    gender: "male",
    address: "Mohakhali"
}



const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "wireless gate"

}


type UserName = string
type IsAdmin = boolean
const userName : UserName = "Persian"
const isAdmin : IsAdmin = true



type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;