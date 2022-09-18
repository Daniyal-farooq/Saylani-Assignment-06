var n:number = prompt("Enter a number to find wether it is Armstrong or not")
var n1:number 
n1 =  parseInt(n)
var ver:number 
ver = parseInt(n)
var z:number = 0
var sum:number 
var rem:number
sum = parseInt(z)
rem= parseInt(z)
while(n1!=0)
{
    rem = parseInt(n1%10)
    sum=sum+ (rem*rem*rem)
    // console.log(parseInt(sum)) 
    n1 = parseInt(n1/10)
}
if(sum==ver)
{
    console.log(`${ver} is an armstrong number`); 
}
else
{
    console.log(`${ver} is not an armstrong number`);
}
