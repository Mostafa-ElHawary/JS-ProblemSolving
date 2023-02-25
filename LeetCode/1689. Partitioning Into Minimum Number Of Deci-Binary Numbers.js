// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// Example 1:

// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
// Example 2:

// Input: n = "82734"
// Output: 8
// Example 3:

// Input: n = "27346209830709182346"
// Output: 9

// const minPartitions = (n) => {
//   // return n.length

//   for (i = 0; i <= n.length; i++) {
//       let x = 100;
//     if (100 - parseInt(n[i]) < x) {
//       x = parseInt(n[i]);
//     //   console.log(parseInt(n[i]));
//     }
//     return x
//   }
//   return;
// };
// console.log(minPartitions("95"));
const minPartitions = (n) => {
 
    for(i = 0 ; i < n.length ; i++)
    {
        // console.log(parseInt(n[i]));

        let x = 100;
            if (100 - parseInt(n[i]) < x) {
              x = parseInt(n[i]);
            //   console.log(parseInt(n[i]));
            }
            return x
    }
   return ' ';
}
console.log(minPartitions("12"));
