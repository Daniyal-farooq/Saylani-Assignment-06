
var userValue:number = prompt("Enter a number to find its digits")
var n:number= parseInt(userValue)
var displayer:number = parseInt(userValue)
displayer=parseInt(displayer)
var digits:number = parseInt(1)
var l:number = 1
while (n/10>=1)
{
    n = parseInt(n/10)
    digits=parseInt(digits +1)
    l++
}
console.log(`The number of digits is ${digits}`);
console.log(`Number of iterations are ${l}`);

n = parseInt(userValue)
var counter:number =1 
var sum:number =0
    while (n>0) {
       if(counter==1){
            console.log("The last digit is",parseInt(n%10));
            sum+=parseInt(n%10)
       }
        if(counter==l){
            console.log("The first digit is",parseInt(n%10));
            sum+=parseInt(n%10)
        }
        n=parseInt(n/10)
        counter++
    }
    console.log("The sum of first and last digit is ",sum);
    

