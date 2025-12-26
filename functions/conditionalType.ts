
{
    //

// conditonal type

type a1 = number;
type b1 = string;


type x = a1 extends null ? true: false // conditional type

type y = a1 extends null ? true : b1 extends undefined ? undefined: any;


type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string
}


// keyof operator      Sheikh   "bike" | "car" | "ship"



// car ache kina / bike ache kina / ship ache kina / tractor ache kina

type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false 


type HasCar = CheckVehicle<"car">

    //
}