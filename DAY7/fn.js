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
