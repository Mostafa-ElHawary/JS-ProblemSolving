// DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// let st = 216540;
// console.log(String(st).lastIndexOf(0));

function Func(num) {
  let st = String(num);

  while (st.endsWith(0)) st = st.slice(0, st.length - 1);

  return Number(st);
}
console.log(Func(21065400630));
