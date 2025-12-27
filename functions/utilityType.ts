
{
    //

    // utility types
    //pick type


    type Person = {
        name: string;
        age: number;
        email: string;
        contactNo?: string
    }


    type NameAge = Pick<Person, "name" | "age">



    // omit


    type ContactInfo = Omit<Person, "name" | "age">

    // Required

    type PersonRequired = Required<Person>

    // Pertial
    type PersonPartial = Partial<Person>

    // ReadOnly
    const person1 : Person = {
        name: "Mr. XY",
        age: 22,
        contactNo: "0123"
    }

    person1.name = "Mr. YZ"




    //
}