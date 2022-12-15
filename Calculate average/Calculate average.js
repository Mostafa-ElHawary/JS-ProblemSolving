// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// let Func = (n) => n.length === 0 ?  0 : n.length / 2
// console.log(Func([1,2,3,7]));

let Func = (array) => {
  let x = 0;

  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      x += array[i];
    }
  }
  return x / array.length;

// another solution 
  // return  array.length === 0 ? 0 : array.reduce((x,y)=> x+y,0) / array.length

};
console.log(Func([1, 2, 3, 4]));
