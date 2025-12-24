//union types

type  FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"
type  FullstackDeveloper = "fakibazDeveloper" | "expertDeveloper"

const newDeveloper : FrontendDeveloper = "juniorDeveloper"


type User = {
    name: string;
    email?: string;
    gender: "male" | "female"
    bloodGroup: "O+" | "A+" | "AB+"
}

const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "A+"
}







type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
}

type BackendDeveloper = {
    skills: string[];
    designation1: " BackendDeveloper"
}


type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper : FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}