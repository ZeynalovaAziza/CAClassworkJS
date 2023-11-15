const person={
    firstName:'Aziza',
    lastName:'Zeynalova',
    age:20,
    university:'GDU',
    Country:'Poland',
}
// task 1
// console.log(Object.keys(person));


// task2
// console.log(Object.values(person));

// task3
// console.log(Object.entries(person));

// task4
// delete person.age
// console.log(person);

// task5
// let array=Object.values(person);
// let max = ""
// for (let i = 0; i < array.length; i++) {

//     if(array[i].length>max.length && typeof array[i] == "string"){
//         max = array[i]
//     }
// }
// console.log(max);


// task2
// let library = [
//     {
//       title: "The Road Ahead",
//       author: "Bill Gates",
//       readingStatus: true,
//     },
//     {
//       title: "Walter Isaacson",
//       author: "Steve Jobs",
//       readingStatus: true,
//     },
//     {
//       title: "Suzanne Collins",
//       author: "Mockingjay: The Final Book",
//       readingStatus: false,
//     },
//   ];
   
//   library.forEach(element => {
//     if(element.readingStatus==true){
//         console.log(`Already read ${element.title} by ${element.author}`);
//     }
//     else{console.log(`You still need to read ${element.title} by ${element.author}`)}
// });

// task3
let employee = {
    name: 'Alice',
    jobTitle: 'Software Developer',
    salary: 75000,
    promote: function(p1, p2) {
     this.jobTitle=p1
     this.salary=p2
     console.log(`${this.jobTitle} ${this.salary}`);
    } 

    
  };
  
  employee.promote('Senior Software Engineer', 90000);

