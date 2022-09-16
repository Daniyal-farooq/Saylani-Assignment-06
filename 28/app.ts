var n:number = prompt("Enter a number to find prime numbers within")
var n1:number = parseInt(n)
var limit:number = 2
var sum:number = 0
while(limit <=n1)
{
    var counter:number = 0
    var divisor:number = 2
   for (divisor  = parseInt(2) ; divisor < limit; divisor++) 
   {
        if(limit%divisor==0)
        {
            counter = 1   
        }   
   } 
   if(counter ==0)
   {
    
    sum+=limit
   }
   limit++
}
console.log(`The sum of prime numbers is ${sum}`);

