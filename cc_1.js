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

accountBalance *= 1.07;
console.log("Balance Interest:", accountBalance);

accountBalance /= 1.1;
console.log("Balance Division:", accountBalance);

accountBalance %= 21;
console.log("Balance Remainder:", accountBalance);


// Task 4: Comparison Operators

let employeeScore1= 87 ;
let employeeScore2= 42 ;

console.log("Employee Score 1 Greater:", employeeScore1 > employeeScore2);
console.log("Employee Score 2 Greater:", employeeScore1 < employeeScore2);
console.log("Employee Score 1 Greater than or equal to Employee Score 2:", employeeScore1 >= employeeScore2);
console.log("Employee Score 2 Greater than or equal to Employee Score 1:", employeeScore1 <= employeeScore2);
console.log("Employee Scores Strictly Equal:", employeeScore1 === employeeScore2);
console.log("Employee Scores Strictly not Equal:", employeeScore1 !== employeeScore2);


// Task 5: Logical Operators
let hasKeyCard= true;
let hasPermission= false;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);
