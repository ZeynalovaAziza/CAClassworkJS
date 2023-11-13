// task1
// function findFirstNotRepeatedChar(str) {
//     let letter = "";
//     for(let i=0; i<str.length; i++){
//         if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
//             letter += str[i];
//         }
//     }

//   return letter[0]
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));

// task2

// function charCount (word,letter){
//     let count=0
//     for (let i = 0; i < word.length; i++) {
//       if(letter===word[i].toLocaleLowerCase()){
//       count++
//       }
//     }
//     return count
// }
// console.log(charCount('w3rescCCCCCCCCCource.com', 'c'));

// task3

function makeId(length) {
  let text = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
}
console.log(makeId(10));
