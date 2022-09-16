var values:number = prompt ("Enter a number to find its digits")
var n:number = values
var digits:number = 1
while (n/10>=1)
{
    n = n/10
    digits=digits +1
}
console.log(`The number of digits is ${digits}`);
