// task1
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let newNumbers=number.filter((number)=>{
    return number%2===1
})
console.log(newNumbers);

// part2
let array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arr=array.filter((array)=>{
    return array>=1 && array<=10
})
console.log(arr);


// task2
const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];
  let fullName=users.map((item)=>`${item.first_name} ${item.last_name}`)
  console.log(fullName);

//   task3
const persons = [
    { name: "Akif", age: 25 },
    { name: "Aysu", age: 32 },
    { name: "Ali", age: 35 }
];
// let firstPerson=persons.find((item)=>{
//     return item.age>30
// })
// console.log(firstPerson);

// part2
let firstPerson=persons.findIndex(item=>item.age>30)
console.log(firstPerson);

// task4