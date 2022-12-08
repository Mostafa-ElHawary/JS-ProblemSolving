// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] , you should return [10, -65].

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let po = []
let ne = 0
function Func(n)
{

    // ar.forEach((e)=>{ 
    //     if(e > 0)
    //     {
    //         po.push(e)
    //     }
    //     else{
    //         ne += e
    //     }
    // })
    // let x = []
    // return ne
//    return  ne.forEach((e)=>{
//        console.log(e);
//     })

   for(let i = 0 ; i < n.length ; i++)
   {

       if(n[i] > 0)
       {
        po.push(n[i])
       }
       else{
        ne += n[i]
       }
   }
   return [po.length,ne]

}
console.log(Func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

