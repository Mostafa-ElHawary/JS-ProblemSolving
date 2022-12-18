// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

let st = ['s','t','r','i','n','g']
function Func(n)
{
    return n.split('').map((s)=> s.repeat(2)).join('')
}
console.log(Func('string man'));