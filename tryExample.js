// Try-catch example    
// 1. Try to run the code in the try block
// 2. If there are no errors, ignore the catch block
// 3. If there are errors, run the code in the catch block
// 4. Try-catch example

try {
    let x = 1 / 0;
    console.log(x); // Infinity
} catch (err) {
    console.log(err); 
    // err is an object, which contains information about the error
}
// in javascript, this will not cause an error, but it will return infinity

// Actual error
try {
    let x = y + 1;
    console.log(x);
} catch (err) {
    console.log(err); // ReferenceError: y is not defined
}

function vote(age) {
    if (age < 18 || isNaN(age)) {
        throw new Error("You are too young to vote.");
    } else {
        console.log("You can vote!");
    }
}

try {
    vote(17);
} catch (err) {
    console.log(err);
}// Error: You are too young to vote.

try {
    vote(19);
} catch (err) {
    console.log(err);
}// You can vote!

// Error object:
// name - error name
// message - error message
// stack - error stack trace
// throw new Error("Error message");