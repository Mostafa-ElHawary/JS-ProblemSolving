// function Func(n)
// {

//     // let count = 0

//     n.forEach((e)=> e === 'needle' ? console.log(ar.indexOf(e)): 'not founs')

// }
// console.log(Func(ar))

// ar.forEach((e)=> e === 'needle' ? console.log(ar.indexOf(e)): 'not founs')

// function Func(n){

//     n.forEach((e)=> {
//         if(e ===  'needle' )
//         {
//             return `found the ${e} at position ${n.indexOf(e)}`
//         }
//     })

// }
// console.log(Func(ar));

let ar = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];


let Func = (n) => {
  ar.forEach((e) => {
    if (e === "needle") {
      console.log(`found the ${e} at position ${n.indexOf(e)}`);
    }
  });
};
console.log(Func(ar));
