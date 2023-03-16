// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let s = "Hi!!";

let remove = (s) =>
s.endsWith('!') ? s.slice(0, -1) : s;
//   s.split("")[s.split("").length - 1] === "!"
//     ? s.replace(s.split("")[s.split("").length - 1], "")
//     : s;

// console.log(remove("Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("!Hi"));
// console.log(remove("!Hi!"));
// console.log(remove("Hi! Hi!"));
// console.log(remove("Hi"));

// console.log( s.replace(/!$/,''));
console.log(s.replace(/!$/g, ''));
