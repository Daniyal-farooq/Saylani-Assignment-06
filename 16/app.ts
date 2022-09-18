
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

    var arrSwap:number[l] = []              //using 2 varialbe to reverse them
    let index2 = l-1
    for (let index = 0; index < l && index2 >=0 ; index++ ) {
        arrSwap[index] = arr[index2]   
        index2--
}   
console.log(arrSwap);
