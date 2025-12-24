// nullish coalescing oprator
// null / undefined ---> decision making

const isAuthenticated = undefined;

const result1 = isAuthenticated ?? "Guest"; // Nullish Coalescing operator
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({result1}, {result2});



type User = {
    name: string;
    address: {
        city: string;
     road: string;
     presentAddress: string;
     permanentAddress?: string
    }
     
}

const user: User = {
    name: "Persian",
    address: {
        city: "Rangpur",
        road: "Awesome Road",
        presentAddress: "Mohakhali",
        permanentAddress: "Lalmonirhat"
    }
}

const PermanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
console.log({PermanentAddress})