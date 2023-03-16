// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function highestScore(s) {
    // Split the string into an array of words
    let words = s.split(' ');
    
    // Initialize variables to keep track of the highest score and word
    let highestScore = 0;
    let highestScoringWord = "";
    
    // Iterate over the array of words
    for (let word of words) {
            // Calculate the score for the word
            let score = 0;
            for (let i = 0; i < word.length; i++) {
                score += word.charCodeAt(i) - 96;
            }
            
            // Update the highest score and word if the score for this word is higher
            if (score > highestScore) {
                highestScore = score;
                highestScoringWord = word;
            }
    }
    
    // Return the highest scoring word
    return highestScoringWord;
  }
  console.log(highestScore('aaa b')); // Output: "abad"
console.log(highestScore("hello world")); // Output: "world"
console.log(highestScore("abcdefg hijk")); // Output: "hijk"