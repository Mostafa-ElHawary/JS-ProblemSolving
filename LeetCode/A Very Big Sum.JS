function Sam(ar)
{
    let num = 0;
    for(let i = 0 ; i <= ar.length -1 ; i++ )
    {
        num = num + ar[i]
    }
    return num 

}
console.log(Sam([1000000001 ,1000000002 ,1000000003 ,1000000004 ,1000000005]));