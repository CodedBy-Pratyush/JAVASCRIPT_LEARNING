// Arrays in Javascript 

const users = ["Ravi", "Aman", "Soham", "Kunal"]; // creating an array

console.log(users);
// accessing the value

// users[0] = "Ravi-Sharma";  // muted the value
// console.log(users[0]);
// console.log(users);


users.push("Nova"); // adding value at the end
// users.push("Echo"); 
// console.log(users);


// Homogeneous -> ek type ke value add kr skte array me
// but in js : koi bhi type ke value add kr skte

// Heterogeneous value can be added
const mixedData = ["Ravi", 98765, 221, true, "999"];
// console.log(mixedData);
// mixedData.push({ city: "Delhi" });
// console.log(mixedData);

// findindex

// let position = mixedData.indexOf("999");
// console.log(position);
 
// removing last element from end of an array
users.pop();
console.log(users);

// reverse the value from an array
users.reverse();
console.log(users);
