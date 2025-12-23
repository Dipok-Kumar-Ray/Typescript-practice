
//Normal function
function add(num1: number, num2: number): number{
return num1 + num2;
}

// add(3, '3');


//Arrow function

const addArrow = (num1: number, num2: number) => num1 + num2;


//Object --> function --> method

const poorUser  = {
    name: "Dipok",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`;
    }
}


const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => {
    return elem*elem;
})