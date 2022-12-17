// function Func(n)
// {
//     // console.log(n);
//     // return n.split(' ').length
//     let count =  n.split(' ').length // 5
//     let num = 0
//     for(let i = 0 ; i < count  ; i++ )
//     {
//         console.log(n.split(' ')[i]);
//     }
// }
// console.log(Func('hello there i am here'));


// function Func(n)
// {
//     // console.log(n);
//     n.map((e,ind)=> {
//       return  `${e}=>${ind}`
//     //    console.log(res);
//     })
//     return res
// }

function Func(n)
{

  return n.split(' ').reverse().join(' ')

}
console.log(Func('hello there i am here'));