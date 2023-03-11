// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
// ];
// document.write('<div>We Have X-Admins</div>');

// document.write(`<div>  We Have ${myAdmins.length} Admin </div>`)

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] == "Stop") {
//     break;
//   }
//   document.write(`<div>  The Admin for Team ${i + 1} is ${myAdmins[i]} </div>`);
//   document.write(`Team Members is :`);
//   for(let j = 0 ; j < myEmployees.length ; j++)
//   {
//       // if(myEmployees[i][0] == 'A')
//       // {
//       //     console.log(myEmployees[i]);
//       // }
//       // if(myEmployees[i][0] == 'S')
//       // {
//       //     console.log(myEmployees[i]);
//       // }
//       if(myEmployees[j][0] == 'O')
//       {
//           document.write(`${myEmployees[j]}`)
//       }
//   }

// }

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12Hint: Don't forget to check for bad values like null/undefined

// function Func(n)
// {
//   return n > 0 && null ?  -n : n

// }
// console.log(Func(null));

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

//Moving Zeros To The End


            // put all element at a new array without zeros 
            // put zeros count as a variable to know how many there we have
            // make loop using while loop on var count zeros  
            // put count of zeros to this a new array

function rentalCarCost(arr) {
  let newARR = [];
  let ZeroCount = 0;

  for (let i = 0; i < arr.length; i++) 
    arr[i] !== 0 ? newARR.push(arr[i]):ZeroCount++; // = 4
  while (ZeroCount > 0) { 
    newARR.push(0);
    ZeroCount--;
  }

  return newARR;
}

console.log(rentalCarCost([false, 1, 0, 1, 0, 0, 0, 3, "a"]));
