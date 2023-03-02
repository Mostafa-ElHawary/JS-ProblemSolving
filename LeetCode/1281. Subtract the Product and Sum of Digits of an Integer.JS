// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// 2K
// 209
// Companies
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

var subtractProductAndSum = function(n) {
    const str = n.toString();
let product = 1;
let sum = 0;

for (let i = 0; i < str.length; i++) {
  const digit = parseInt(str[i]);
  product *= digit;
  sum += digit;
}

return product - sum;
};