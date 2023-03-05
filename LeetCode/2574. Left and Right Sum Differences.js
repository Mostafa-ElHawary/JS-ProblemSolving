// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

function findArrayAnswer(nums) {
  const n = nums.length;
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);
  let sum = 0;



  for (let i = 0; i < n; i++) {
    leftSum[i] = sum;
    sum += nums[i];
  }

  sum = 0;

  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = sum;
    sum += nums[i];
  }

  // Calculate the absolute difference between leftSum and rightSum
  const answer = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
}

console.log(findArrayAnswer([10, 4, 8, 3]));
