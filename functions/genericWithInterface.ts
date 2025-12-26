
// generic interface

interface Developer<T, X = null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X;
}


type EmailWatch = {
    brand: string;
    model: string;
    display: string;

}


const poorDeveloper : Developer<EmailWatch> = {
    name: "parsian",
    computer: {
        brand: "HP",
        model: "GPI-6",
        releaseYear: 2020
    },
    smartWatch: {
        brand: "HP",
        model: "Hp Z Book",
        display: "OLED"
    }
}


interface AppleWatch{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;


}


interface YamahaBike {
    model: string;
    engineCapacity: string;
}


const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: "Elon Mask",
    computer: {
        brand: "Mac Book",
        model: "G6",
        releaseYear: 2025
    },
    smartWatch: {
        brand: "Mac Book",
        model: "Mac",
        heartTrack: true,
        sleepTrack: true
    },
    bike: {
       model: "Yamaha",
       engineCapacity: "150cc" 
    }
}