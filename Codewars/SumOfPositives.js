// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

//solition num 1

// let ar = [-1, 5, 7, -2, 15, 8];
// function func(sum) {
//   let x = 0;
//   sum.forEach((e) => {
//     e > 0 ? (x += e) : console.log();
//   });
//   return x;
// }
// console.log(func(ar));

//solition num 2
// Example [1,-4,7,12] => 1 + 7 + 12 = 20

let ar = [1,-4,7,12];
function func(sum) {
  return sum.filter((e)=> e > 0).reduce((acc , carr)=> acc + carr , 0
  )
}
console.log(func(ar));
