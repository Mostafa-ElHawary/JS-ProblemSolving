// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// return string to array by split
//


function Func(letter) {
  let ar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  for (let index = 0; index < ar.length; index++) {
    
    if(ar[index] === letter)
    {
      return `Position of alphabet: ${index + 1}` 
    }             
  }
}
console.log(Func("z"));
