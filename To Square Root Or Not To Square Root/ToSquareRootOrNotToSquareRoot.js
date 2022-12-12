// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// solution
// function Func(n) {
//   let ar = [];
//   for (let i = 0; i < n.length; i++) {
//     if (Number.isInteger(Math.sqrt(n[i]))) {
//       ar.push(Math.sqrt(n[i]));
//     } else {
//       ar.push(n[i] * n[i]);
//     }
//   }
//   return ar;
// }
// console.log(Func([4, 3, 9, 7, 2, 1]));


//another solution
function Func(n) {

  return n.map((num) =>
    Number.isInteger(Math.sqrt(num))
      ? Math.sqrt(num)
      :num * num
  );

}
console.log(Func([4, 3, 9, 7, 2, 1]));
