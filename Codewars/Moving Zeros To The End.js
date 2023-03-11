function rentalCarCost(arr) {
    let newARR = [];
    let ZeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) 
      arr[i] !== 0 ? newARR.push(arr[i]):ZeroCount++; // = 4
    while (ZeroCount > 0) { 
      newARR.push(0);
      ZeroCount--;
    }
  
    return newARR;
  }
  
  console.log(rentalCarCost([false, 1, 0, 1, 0, 0, 0, 3, "a"]));
  