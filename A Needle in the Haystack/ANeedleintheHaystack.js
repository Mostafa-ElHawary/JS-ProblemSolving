let ar = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] 
function Func(n)
{

    let count = 0
    for(let i = 0 ; i < n.length ; i++)
    {
        // return n[i] === 'needle' ? count+= 1 : 'not founs'
    //   return  n.length
    n.forEach((e)=> e === 'needle' ? count+= 1 : 'not founs')
        
    }

}
console.log(Func(ar))