// -------- Strings --------
const firstName = "Aman";
const surname = "Sharma";

console.log(firstName + " " + surname);

// -------- Numbers --------
let valueA = 15;
let valueB = 8;

console.log(valueA * valueB); // 120

// -------- Boolean in condition --------
if (1) {
    console.log("Condition is TRUE");
}

// 1  -> true
// 0  -> false

// -------- Boolean to Number coercion --------
let userLoggedIn = true;

console.log(userLoggedIn + 10); // true -> 1 => 11

// -------- String coercion examples --------
console.log("2" + "3");   // "23"
console.log("2" + 3);     // "23"
console.log(2 + "3");     // "23"