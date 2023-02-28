// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 

// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
var smallestEvenMultiple = function(n) {
    let multiple = 2;
while (multiple % n !== 0) {
  multiple += 2;
}
return multiple;
};