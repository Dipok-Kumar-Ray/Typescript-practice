
// generic object type 

type GenericArray<param> =  Array<param>


// const rullNumber: number[] = [3, 6, 8];
const rollNumbers: GenericArray<number> = [3, 6, 8];


// const mentors: string[] ["Mr. X", "Mr. Y", "Mr. Z"];
const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];


// const boolArray : boolean[] = [true, false, true];
const boolArray : GenericArray<boolean> = [true, false, true];


//personal practice

interface Developer<T> {
  name: string;
  role: T;
  salary: number;
}

const frontendDev: Developer<"frontend"> = {
  name: "Dipok",
  role: "frontend",
  salary: 20000,
};

const backendDev: Developer<"backend"> = {
  name: "Simanto",
  role: "backend",
  salary: 22000,
};

const mernDev: Developer<"mern"> = {
  name: "Shakib",
  role: "mern",
  salary: 25000,
};






// generic array type


type GenericArray<param> =  Array<param>   //param ===> generic type / dynamic type


const user: GenericArray<{name: string, age: number}> = [
 { 
    name: "Dipok",
    age: 23
},
{
    name: "Belal",
    age: 22
}
]




// generic tuple type


type GenericTuple<X, Y> = [X, Y]


const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"]

const UserWithID: GenericTuple<number, {name: string, email: string}> = [1234, {name: "persian", email: "dipok@gmail.com"}]