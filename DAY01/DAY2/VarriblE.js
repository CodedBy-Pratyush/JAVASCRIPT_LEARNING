// VARIABLES IN JS
// var | let | const
// JavaScript is loosely typed

// -------- VAR (avoid using it) --------
var totalMarks = 45;
var bonusMarks = 15;
console.log(totalMarks + bonusMarks); // 60

totalMarks = "Rahul";
console.log(totalMarks); // Rahul

// -------- LET (preferred) --------
let userAge = 25;

if (true) {
    let score = 78;
    console.log(score); // 78
}

console.log(`User age is: ${userAge}`);

// console.log(score); ❌ ReferenceError (correct behavior)

// -------- CONST (cannot be reassigned) --------
const userName = "Aman";
// userName = "Rohit"; ❌ Not allowed

const maxLimit = 100;
// maxLimit = 200; ❌ Not allowed

console.log(userName);
console.log(maxLimit + 50);
