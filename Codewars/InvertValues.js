// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function Func(n) {
  let res = [];
  n.forEach((e) => {
    e < 0 ? res.push(-e) : res.push(-e);
  });
  return res;
}
console.log(Func([1,-2,3,-4,5]));

// another solution 
function invert(array) {
  return array.map((e) => e == -e && -0 ? e : -e );
}

console.log(invert([-0,2,3,4,5]));