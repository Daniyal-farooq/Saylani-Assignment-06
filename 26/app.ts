var n:number = prompt ("Enter a number")
var n1:number = parseInt(n)
var counter:number = 0 
var divisor:number = 2
while(divisor<n1)
{
    if ( n1%divisor==0 )
    {
        counter = 1
        break
    }
    else
    {
        divisor++
    }
}
if(counter ==1)
{
    console.log(`${n1} is not a prime number`);
}
else
{
    console.log(`${n1} is a prime number`);    
}