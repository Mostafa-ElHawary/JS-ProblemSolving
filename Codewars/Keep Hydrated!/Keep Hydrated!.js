// DESCRIPTION:
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3


// let Func = (n) => Math.floor(n * 0.5)
// console.log(Func(7));

function calculateLitres(time) {
    // Calculate the number of litres Nathan will drink
    let litres = time * 0.5;
    
    // Round the result to the smallest value
    litres = Math.floor(litres);
    
    // Return the result
    return litres;
  }