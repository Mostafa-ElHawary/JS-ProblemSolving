// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  //Code here
  let newArr = [],
  strArr = str.split(" ")
  strArr.forEach(x=> {
    let wordArr = x.split("")
    wordArr.push(wordArr[0],'ay'),wordArr.shift()
    if(x==='!' ||  x === '?'||x === '.'){
      newArr.push(x)
    }
    else
    {
      newArr.push(wordArr.join(''))
    }
  })
  return newArr.join(' ')
}
console.log(pigIt('Pig latin is cool'));