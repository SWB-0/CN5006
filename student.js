const student = (name, id, group) => {
    console.log("Student Name: " + name + " Student ID: " + id + " Lab Group: " + group);
}

const currentdatetime = new Date();

console.log("Program run on : " + currentdatetime.toLocaleString());

const displayfavorite = () => {
    console.log("My favorite programming language is JavaScript");
}

//special value and exports

const calculateUniqueValue = (id) => {
    const lastFour = String(id).slice(-4);   // take the last 4 digits
    let sum = 0;
    for (const digit of lastFour) {
        sum += Number(digit);                // add them together
    }
    console.log("Unique value from Student ID: " + sum);
};

module.exports = { student, displayfavorite, calculateUniqueValue };
