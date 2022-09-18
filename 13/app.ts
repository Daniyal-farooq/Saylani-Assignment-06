
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
var swap:number = n.toString(10)
var counter:number =l-1 
var arr:number[l] = []

    while (n>=1) {
        
        arr[counter] = parseInt(n%10)
        n=parseInt(n/10)
        counter--
    }
    console.log(arr)//given numbers stored in an array

    var arrSwap:number[l] = []
    for (let index = 0; index < l; index++) {
        if (index == 0){
            arrSwap[index] = arr[l-1]
        }
        else if(index==l-1)
        {
            arrSwap[index] = arr[0]
        }
        else
        {
            arrSwap[index] = arr[index]
        }    
}   
console.log(arrSwap);
