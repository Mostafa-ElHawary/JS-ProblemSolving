// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


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