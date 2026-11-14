 function EmployeeInfo(name, Salary)
 {
 console.log("Welcome " + name + " Your monthly Salary is " + Salary);
 }

 // Display current date and time
 const currentDateTime = new Date();
console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());

 var EmpName = "John";
 var EmpSalary = 50000;

 // Calling the function
 EmployeeInfo(EmpName, EmpSalary);

 // Add this for Second Exercise
const EmpSkills= (skills,Name,LabGrp)=> {
console.log(" Student ID"+ Name+ "Expert in "+ skills)
console.log("Lab Group Name",LabGrp)
}
EmpSkills("java","u2888760 ","Lab group: 22")

// code for third Exercise
const student= require('./Studentinfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")

