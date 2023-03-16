// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string) {
//   let stringSplit = string.split(" ");

//   console.log(stringSplit);

//   for (let i = 0; i < stringSplit.lenght; i++) {

//       if(stringSplit[i] <= 3) {
//         console.log(stringSplit[i]);
//     //   stringSplit[i] = stringSplit[i].split("").reverse().join("");
//     }

//   }
//   return stringSplit.join(" ");
// }

// console.log(spinWords("Hey fellow warriors"));

// console.log("Hey fellow warriors".split(' '));

function spinWords(string)
{
    let z = string.split(' ')
    for(let i = 0 ; i < z.length ; i++)
        {
            if(z[i].length >= 5){
                z[i] = z[i].split('').reverse().join('')
            }
        }
        return z.join(' ')
}
console.log(spinWords("SeriouslY this is the last one"));