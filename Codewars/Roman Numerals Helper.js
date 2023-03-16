// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// iterate over the user object

// let Func = (num) => {
//   const romanToNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   roman = "";

//   for (const key in romanToNum) {
//     while (num >= romanToNum[key]) {
//       roman += key;
//       console.log(roman);
//       num -= romanToNum[key];
//     }
//   }
//   return `roman is :${roman}`;
// };
// console.log(Func(1990));

// ++++++++++++++++++++++++++++++++++++++++++




class RomanNumerals {

  static fromRoman(roman) {  // function to convert Roman numerals to integers  

      let result = 0;

      const romans = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

      for (let i = 0; i < roman.length; i++) { // loop through each character in string and add value to result  

          if (romans[roman[i]] < romans[roman[i + 1]]) { // check if next character has a higher value than current one  

              result += romans[roman[i + 1]] - romans[roman[i]]; // subtract current value from next one and add it to result  

              i++; // increment counter by 2 since two characters were used  

          } else {    // else just add current character's value  

              result += romans[roman[i]];    

          }    

      }    

      return result;    // return final result  

  }    

  static toRoman(num) {  // function to convert integer values into Roman numerals  

      let result = '';     // empty string that will hold final Roman numeral value  

      const romans = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40 , X : 10 , IX : 9 , V : 5 , IV : 4 , I : 1 };      // object with all possible Roman numeral values and their corresponding integers  

      for (let key in romans) {    // loop through object keys and check if they are less than or equal to given number (num)  

          while (num >= romans[key]) {    // while loop will continue until given number is less than current key's value  

              result += key;     // add key string (Roman numeral) to final string (result)  

              num -= romans[key];    // subtract current key's value from given number (num) and repeat loop with new number until it becomes zero or less than zero    

          }    										// at this point we have our final Roman numeral stored in variable 'result' which we can return at the end of function execution     	return result;     // return final Roman numeral string      } }