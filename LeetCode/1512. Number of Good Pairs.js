// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    let count = 0;
const map = new Map();

for (let i = 0; i < nums.length; i++) {
  const currentNum = nums[i];
  if (map.has(currentNum)) {
    count += map.get(currentNum);
    map.set(currentNum, map.get(currentNum) + 1);
  } else {
    map.set(currentNum, 1);
  }
}

return count;
};