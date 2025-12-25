// nullable types

const searchName = (value: string | null) => {
    if(value){
        console.log("Searching");
    }
    else{
        console.log("There is nothing to search");
    }
};

searchName(null);


//unknown types

const getSpeedInMeterPerSecond = (value: unknown): void => {

    // Case 1: value is number (assume km/h)
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed.toFixed(2)} m/s`);
        return;
    }

    // Case 2: value is string (e.g. "1000 kmh^-1")
    if (typeof value === "string") {
        const parts = value.split(" ");

        const speedValue = Number(parts[0]);
        const unit = parts[1];

        if (isNaN(speedValue)) {
            console.log("Invalid speed value");
            return;
        }

        if (unit !== "kmh^-1") {
            console.log("Unsupported unit");
            return;
        }

        const convertedSpeed = (speedValue * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed.toFixed(2)} m/s`);
        return;
    }

    console.log("Invalid input type");
};

//  function call (outside)
 
getSpeedInMeterPerSecond(1000);
getSpeedInMeterPerSecond("1000 kmh^-1");


//never types

const throwError = () => {
    throw new Error(msg);
}

throwError("mushkil se error hogaya");