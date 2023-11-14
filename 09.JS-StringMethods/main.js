// task1
let text = "Java is awesome. Java is fun.";
console.log(text.replaceAll("Java", "Javascript"));

// task2
function mixUp(a, b) {
  let result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  return result;
}
console.log(mixUp("val", "pur")); //'pul var'
console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// task3
function verbing(word) {
  if (word.length < 3) {
  } else if (word.slice(-3) === "ing") {
    word = word + "ly";
  } else {
    word = word + "ing";
  }
  return word;
}

console.log(verbing("go")); // go
console.log(verbing("swim")); //swiming
console.log(verbing("swiming")); //swimingly

// task4
function isPalindrome(string) {
  let result = string.split("").reverse().join("");

  return string === result ? "polidromdur" : "polidrom deyil";
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("aziza"));

// task5
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let length = 4;
 let newArr =[]
function splitIntoChunk(arr, len) {
  for (let i = 0; i < arr.length; i+=length) {
    newArr.push(arr.slice(i,i+len))
    
  }
  return newArr;
}

console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
