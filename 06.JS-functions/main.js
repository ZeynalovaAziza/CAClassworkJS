// // task1
// function printFullName(firstName = "lorem", lastName = "ipsum") {
//   let result = `I am ${firstName} ${lastName}`;
//   return result;
// }console.log(printFullName("Aziza","Zeynalova"));
// // task2
// let sum = (num1, num2) => num1 + num2;
// console.log(sum(2, 3));
// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2, 3));
// let subtruct = (num1, num2) => num1 - num2;
// console.log(subtruct(2, 3));
// let divide = (num1, num2) => num1 / num2;
// console.log(divide(2, 3));

// // task3
// function calculator(num1, num2, operator) {
//   let result;
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else {
//     result = "bele operator yoxdur.";
//   }
//   return result;
// }
// console.log(calculator(2, 5, "+"));

// task4
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

function filterEmployees(array) {
  let newSalary = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 60000) {
      newSalary.push(array[i]);
    }
  }
  return newSalary;
}
console.log(filterEmployees(employees));

//   task5
function reverseString(string) {
  let reverseStr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
}
console.log(reverseString("hello"));

// task6

let sentence ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quidem aspernatur cum, voluptates distinctio evenie";

function findLetter(string) {
    let count = 0;
  for (let i = 0; i < string.length; i++) {
    string[i] != "." && string[i] != "?" && string[i] != "," && string[i] != "!" && count++
  }
  return count
}

console.log(findLetter(sentence));
