// Function
function sayHello() {
  // defination
  // This function prints a greeting message in the console
  console.log("Hello This side Tejas");
}
// sayHello();  // Calling Of Function (currently commented to avoid auto execution)

// parameter
function add(a, b) {
  // a and b are parameters received by the function
  let ans = a + b; // storing sum of a and b
  return ans; // returning final result
}
// add(12, 18, 9, 6);   // extra arguments are ignored in JS
// add(14, 7, 2, 1);   // only first two values are used

// assignment    // argument
function multiply(a, b) {
  // multiplies two numbers and returns the result
  // console.log(a * b); // avoided direct printing
  return a * b;
}
// multiply(6, 4);  // parameter example

let a = multiply(6, 4); // storing returned value in variable
// console.log(" Multiply result  is : " + " " + a);

let addresult = add(8, 7); // calling add function with new digits
// console.log(" Add result  is : " + " " + addresult);

// assignment -2

// unlimited argument
function addNumbers() {
  // arguments is an array-like object
  let ans = 0; // initial sum value
  for (let i = 0; i < arguments.length; i = i + 1) {
    // loop runs for total number of arguments passed
    ans = ans + arguments[i]; // adding each argument
  }
  return ans; // returning total sum
}

let result1 = addNumbers(10, 20, 30, 40); // passing multiple values
console.log(result1); // printing result of unlimited arguments

// Using speard Operator
