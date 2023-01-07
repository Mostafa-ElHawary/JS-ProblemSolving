// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// ONE sec  = 1000 m.s
// ONE ment = 60 sec
// one h    =  60 ment
// the ment contain 60000 m.s => ment * sec
// the one h contain 3600000 m.s => 60 ment * 60000

// Incorrect answer for h=9, m=4, s=6: expected 129846000 to equal 32646000
// Incorrect answer for h=15, m=38, s=0: expected 2054280000 to equal 56280000
function func(h, m, s) {
  s = s * 1000;
  m = m * 60 * 1000;
  h = h * 60 * (m == 0 ? 60000 : m);

  return h + m + s;
}
console.log(func(19, 22, 52));
