
// Constraints in Typescript

// export {}; // ei line ta na thakle error dibe 

{
    //

interface BaseStudent{
        id: number;
        name: string;
        email: string;
}


type StudentWithCourse<T> = T & {course: string};


const addCourseToStudent = <T extends BaseStudent>(
  student: T
): StudentWithCourse<T> => {
  return {
    ...student,
    course: "Next Level Web Development",
  };
};;



const student1 = addCourseToStudent({
    id: 333,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
});


const student2 = addCourseToStudent({
    id: 4444,
    name: "Mr. Y",
    email: "y@gmail.com",
    hashWatch: "Apple Watch",
});


const student3 = addCourseToStudent({
    id: 44,
     name: "Mr. Z",
      email: "z@gmail.com",
      emni: "emni"
    })

    //
// }



// personal practice

type User = {
    id: number;
    name: string;
    email: string
}

const getUserName = <T extends {name: string}>(user: T): string => {

    return user.name;
}

const dipok = getUserName<User>({
    id: 16690,
    name: "Dipok",
    email: "dipok4270@gmail.com"
})
const belal = getUserName<User>({
    id: 1669,
    name: "Belal",
    email: "dipok4270@gmail.com"
})
const farhad = getUserName<User>({
    id: 16690,
    name: "Farhad",
    email: "dipok4270@gmail.com"
})

//
}