function Func(n)
{

    for(let i = 0 ; i < n.length ; i++)
    {
       
        if(n[i] === '+') return n[1] + n[2]
        if(n[i] === '-') return n[1] - n[2]
        if(n[i] === '*') return n[1] * n[2]
        if(n[i] === '/') return n[1] / n[2]



    }

}
console.log(Func(['+',6,3]));