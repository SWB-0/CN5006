function Employeeinfo(name,salary)
{
    console.log("Welcome" + "  "  + name + ". Your monthly salary is " + salary);
}

const currentdatetime = new Date();

console.log("This is my first program");
console.log("Program run on : " + currentdatetime.toLocaleString());


var EmpName = "John";
var EmpSalary = 50000;
//Second Exercise
const EmpSkills= (skills,Name,LabGrp)=> {
console.log(" Student ID :"+ Name + " Expert in "+ skills)
console.log("Lab Group Name",LabGrp)
}

// Calling the function
Employeeinfo(EmpName, EmpSalary);
//Function for Second exercise
EmpSkills("Java", "2888760", "Lab Group 22");
//Third one
const student= require('./Studentinfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())