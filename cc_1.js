// Task 1: Variables and Data Types

let employeeName = "Tatiana Mieles";
const employeeID = 77;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Pillow","Mattress","Comforter"];
const productDetails= {
    name: products, 
    price: 988.99,
    inStock: true,
}

console.log(products, productDetails);


// Task 3: Assignment Operators

let accountBalance = 1284.00;
console.log ("Initial Balance:", accountBalance); 

accountBalance +=230;
console.log("Balance Deposit:",accountBalance);

accountBalance -= 333;
console.log("Balance Withdraw:", accountBalance);

accountBalance *= 1.07
console.log("Balance Interest:", accountBalance);

accountBalance /= 1.1
console.log("Balance Division:", accountBalance)

accountBalance %= 21
console.log("Balance Remainder:", accountBalance)

