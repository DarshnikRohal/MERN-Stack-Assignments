// Task 1: Declare a variable age and check if it's 18 or more
let age = 25;
let isAdult = age >= 18;

// Task 2: Perform arithmetic operations
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

// Task 3: Check if a number is even or odd
let n = 7; // Change this value to test
let isEven = (n % 2 === 0) ? "Even" : "Odd";

// Task 4: Store numbers from 1 to 5 in an array
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}

// Example usage:
console.log("Age:", age);
console.log("Is Adult:", isAdult);
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log("Number:", n, "is", isEven);
console.log("Numbers array:", numbers);
console.log("Square of 4:", square(4));
