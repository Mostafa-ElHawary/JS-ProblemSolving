// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

 

// Example 1:

// Input: tree = [7,4,3,null,null,6,19], target = 3
// Output: 3
// Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

var getTargetCopy = function(original, cloned, target) {
 
    if (!original) {
      return null;
    }
    
    if (original === target) {
      return cloned;
    }
    
    let left = getTargetCopy(original.left, cloned.left, target);
    if (left) {
      return left;
    }
    
    let right = getTargetCopy(original.right, cloned.right, target);
    if (right) {
      return right;
    }
    
    return null;
  
  };