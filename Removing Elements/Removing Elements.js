// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

let Func = (ar) =>
{
 let nwar = []
  ar.map((e,ind)=> {

    ind % 2 == 0 ? nwar.push(e): 'Wrong';
})
return nwar
}
console.log(Func(['Hello', 'Goodbye', 'Hello Again']));