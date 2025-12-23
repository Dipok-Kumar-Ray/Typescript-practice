//spread Operator
//rest Operator
//destructuring



const bros1: string[] = ["Dipok", "Kumar", "Ray"];
const bros2: string[] = ["Liton", "Belal", "Farhad"];

bros1.push(...bros2);


const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
}

const mentors2 = {
    prisma: "Firoz",
    mext: "Tanmoy",
    cloud: "Nahid"
}



const mentorList = {
    ...mentors1,

}



//learn rest operator

const greetFriends = (...friends: string[]) => {
    // console.log(`Hi &{friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}

greetFriends("Abul", "Kabul", "Babul", "Ubul", "Labul")