// Array High Order Functions

// const names = ["Rohan", "Sahil", "Vikas", "Nitin"];

// simple Loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

const names = ["Rohan", "Sahil", "Vikas", "Nitin"];

// function display(x)
// {
//     console.log(x);
// }

// ** HIGH ORDER FUNCTION
// **FOREACH -> nothing return in the form a new array
// names.forEach(display)
// names.forEach((val) => console.log(val));

// **MAP -> Return a new array
// const values= [2,4,6,8,10,12,14,16]
// let updatedArr = []

// values.map((num)=>updatedArr.push(num*2))
// console.log(updatedArr);

// const oddNums = [2, 4, 6, 8, 10, 12];
// want to triplet the numbers

// console.log("BEFORE: " + " " + oddNums + " ");
function multiplyByThree(n) {
  return n * 3;
}
//after
// let tripledArr = oddNums.map(multiplyByThree);
// console.log("AFTER: " + " " + tripledArr + " ");

// oddNums.map((num)=>console.log(num*4))

// **FIND
// let result = oddNums.find((num) => 3*3);
// console.log(result);

// **FIND-INDEX
const data = [4, 6, 10, 12, 15, 18];
let result = data.findIndex((num)=>num===7)
// console.log(result);


//**INCLUDE */
