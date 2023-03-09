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

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function invert(array) {
  return array.map((e) => e == -e && -0 ? e : -e );
}

console.log(invert([-0,2,3,4,5]));