function primeDisplayer (fr:number){
    var divisor:number = 2
    var count:number = 0
    while (divisor < fr)
    {
        count= 0
    
        if( fr%divisor == 0 )
        {
            count=1
            break
        }
        else
        {
            divisor++
        }

    }
    if( count == 0)
    {
        console.log(fr);
        
    }
}
var n:number = prompt ("Enter a number to find its prime factors ")
var n1:number = parseInt(n)
var fr:number
for(fr = 2 ; fr <= n1 ; fr++)
{
    if ( n%fr == 0 )
    {
        primeDisplayer(fr)
    }
}


































// var n:number = prompt("Enter a number to find prime numbers within")

// var n1:number = parseInt(n)
// var limit:number = 2

// while(limit <=n1)
// {
//     var counter:number = 0
//     var divisor:number = 2
//    for (divisor  = parseInt(2) ; divisor < limit; divisor++) 
//    {
//         if(limit%divisor==0)
//         {
//             counter = 1
            
//         }
        

        
//    } 
//    if(counter ==0)
//    {
//     console.log(limit);
    
//    }
//    limit++
// }
