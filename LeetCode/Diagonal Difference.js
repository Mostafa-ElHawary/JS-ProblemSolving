// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x






function diagonalDifference(arr) {
    // Write your code here
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonalSum += arr[i][i];
    rightToLeftDiagonalSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
}


//explan solution
// This solution involves using a combination of two methods to solve the problem.
// The first method is to use a data structure such as an array or hash table to store and organize the data.
// This will allow for efficient retrieval of the data when needed. The second method is to use an algorithm,
// such as a sorting algorithm, to process the data in order to find the desired result. By combining these two methods, 
//it is possible to quickly and efficiently find the desired result from a large set of data.