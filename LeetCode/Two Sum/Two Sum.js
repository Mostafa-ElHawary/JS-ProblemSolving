// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//solution

//1//
// loop on array of

// function Func(ar)
// {

//     ar.reduce((e,ind)=> e+ind ,0)

// }
// console.log(Func([5,1,5,2]));

const array1 = [1, 2, 3, 4, 5];

function Func(nums, target) {
    let newar = []
  nums.map((e, ind) =>
    e + array1[ind + 1] == target 
      ?  newar.push(e,array1[ind + 1]) 
      : console.log()
  );
  return newar
}
console.log(Func(array1, 6));

// array1.map((e,ind)=> e + array1[ind+1] == 5 ? console.log(`${e} and ${array1[ind+1] }`): console.log('error'))

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue == 10 ?
//    `${accumulator} and ${currentValue}`:console.log('error'),
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10
