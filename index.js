console.log("Starting Calculator");
const prompt = require("prompt-sync")();
console.log("Welcome to the Calculator!");
const name = prompt("Please enter your name: ");
console.log(`Hello, ${name}! Let's do some calculations.`);
const choice = prompt("Choose an operation (add, subtract, multiply, divide): ");
if (choice === "add") {
    const n1 = parseFloat(prompt("Enter the first number: "));
    const n2 = parseFloat(prompt("Enter the second number: "));
    const result = n1 + n2;
    console.log(`The result of adding ${n1} and ${n2} is: ${result}`);
}
else if (choice === "subtract") {
    const n1 = parseFloat(prompt("Enter the first number: "));
    const n2 = parseFloat(prompt("Enter the second number: "));
    const result = n1 - n2;
    console.log(`The result of subtracting ${n2} from ${n1} is: ${result}`);
}
else if (choice === "multiply") {
    const n1 = parseFloat(prompt("Enter the first number: "));
    const n2 = parseFloat(prompt("Enter the second number: "));
    const result = n1 * n2;
    console.log(`The result of multiplying ${n1} and ${n2} is: ${result}`);
}
else if (choice === "divide") {
    const n1 = parseFloat(prompt("Enter the first number: "));
    const n2 = parseFloat(prompt("Enter the second number: "));
    const result = n1 / n2;
    console.log(`The result of dividing ${n1} by ${n2} is: ${result}`);
}