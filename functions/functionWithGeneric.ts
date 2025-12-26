
// function with generic

const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

type User = {
  id: number;
  name: string;
};

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};

const res1 = createArray("Bangladesh");

const resGeneric = createArrayWithGeneric<string>("Bangladesh");

const resGenericObj = createArrayWithGeneric<User>({
  id: 333,
  name: "Mr. Pashan",
});

const res10 = createArrayWithTuple<string, number>("Bangladesh", 333);

const res11 = createArrayWithTuple<string, { name: string }>(
  "Bangladesh",
  { name: "Asia" }
);





const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
        ...student,
        course
    }
}


const student1 = addCourseToStudent({name: "Mr. X", email: "x@gmail.com", devType: "NLWD"});

const student2 = addCourseToStudent({name: "Mr. Y", email: "y@gmail.com", hashWatch: "Apple Watch"});

