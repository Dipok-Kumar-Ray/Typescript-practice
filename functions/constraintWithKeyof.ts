
{
    //

// generic constraint with keyof operator


type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}


type Owner = "bike" | "car" | "ship"   // manuallly

type Owne2 = keyof Vehicle



const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];

}


const user = {
    name: "Mr. parsian",
    age: 34, 
    address: "Rangpur"
}
const car = {
    model: "Toyota 100",
    year: 200
}

const result1 = getPropertyValue(car, "model")

// user["age"]



    //
} 