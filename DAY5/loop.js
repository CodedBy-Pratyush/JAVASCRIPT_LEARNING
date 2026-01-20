// =====================
// LOOPS IN JAVASCRIPT
// =====================


// -------- FOR LOOP --------
// Use when you KNOW how many iterations are needed

for (let step = 0; step <= 50; step += 5) {
  // Prints the name along with current step value
  // console.log("Tejas", step);
}



// -------- WHILE LOOP --------
// Use when you know the CONDITION but NOT the number of iterations

let currentPosition = 0;   // starting point
let destination = 100;     // target point

while (currentPosition !== destination) {
  currentPosition++;       // move one step forward
  // console.log("Step taken:", currentPosition);
}


