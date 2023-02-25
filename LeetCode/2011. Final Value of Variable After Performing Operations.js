// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

function finalValueAfterOperations(operations) {
    let x = 0;  // initialize x to zero
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "--X" || operations[i] === "X--") {
        x--;   // if operation is "--X" or "X--", decrement x by 1
      } else if (operations[i] === "++X" || operations[i] === "X++") {
        x++;   // if operation is "++X" or "X++", increment x by 1
      }
    }
    return x;  // return the final value of x
  }
console.log(finalValueAfterOperations (["++X","++X","X++"]));