const readline = require("node:readline/promises");

const start = async () => {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const name = await input.question("Type your name: ");
    const studentId = await input.question("Student ID: ");
    const labGroupName = await input.question("Lab group name: ");

    console.log("Student Name: " + name);
    console.log("Student ID: " + studentId);
    console.log("Lab Group Name: " + labGroupName);

    // Arrow function to show your favourite programming language
    const favouriteProgrammingLanguage = (language) => {
        console.log("My favourite programming language is " + language);
    };
    favouriteProgrammingLanguage("JavaScript");

    // Current date and time
    const currentDateTime = new Date();
    console.log("Current date and time: " + currentDateTime.toLocaleString());

    // Verification number: sum of the last 4 digits of the Student ID
    const lastFour = studentId.slice(-4);
    let total = 0;
    for (const digit of lastFour) {
        total += Number(digit);
    }
    console.log("Verification Number: " + total);

    input.close();
};

start();