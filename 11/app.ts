
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

// while (displayer/10>=1)
// {
//     var xyz:number
//     var yxz:number
//     xyz = displayer%10
//     yxz = parseInt(xyz)
//     console.log(`The digit is ${yxz}`);
//     displayer/=10
// }
// displayer = parseInt(displayer)
// console.log(`The digit is ${displayer}`);
var c:number = 1
var d:number
d = parseInt(c)
for ( d;d<=l;d++)
{
    while(displayer/10>=1)
    {
        var xyz:number
        var yxz:number
        xyz=displayer%10
        yxz = parseInt(xyz)
        if(d==1)
        {
            console.log(`The first digit is ${yxz}`);    
        }
        if(d==l)
        {
            console.log(`The last digit is ${yxz}`);    
           
        }
    }
}

    




// if( index == 1)
//         {
//             console.log(`The first digit is ${parseInt(displayer%10)}`);
//         }
//         if(index==digits)
//         {
//             console.log(`The last digit is ${parseInt(displayer%10)}`);
            
//         }
//         displayer/=10;