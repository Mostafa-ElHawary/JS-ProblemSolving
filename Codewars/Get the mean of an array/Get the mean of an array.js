// Instructions

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// [2,2,2,2] = > 2

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// let ar = [1,2,3,4,5]

function Func(ar)
{
    let num =  0;
for(let i = 0 ; i < ar.length ; i++)
{
    num = num+= ar[i]
}
return Math.floor(num / ar.length)
}
console.log(Func([1,2,3,4,5]));