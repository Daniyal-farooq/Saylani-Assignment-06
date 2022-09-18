var n = prompt("Enter a number to find wether it is Armstrong or not");
var lim = parseInt(n);
var n1 = 1;
for (n1 = 1; n1 <= lim; n1++) {
    var ver;
    ver = parseInt(n1);
    var z = 0;
    var sum;
    var rem;
    sum = parseInt(z);
    rem = parseInt(z);
    while (n1 != 0) {
        rem = parseInt(n1 % 10);
        sum = sum + (rem * rem * rem);
        // console.log(parseInt(sum)) 
        n1 = parseInt(n1 / 10);
    }
    if (sum == ver) {
        console.log(n1);
    }
}
// n1 =  parseInt(n)
// var ver:number 
// ver = parseInt(n)
// var z:number = 0
// var sum:number 
// var rem:number
// sum = parseInt(z)
// rem= parseInt(z)
// while(n1!=0)
// {
//     rem = parseInt(n1%10)
//     sum=sum+ (rem*rem*rem)
//     // console.log(parseInt(sum)) 
//     n1 = parseInt(n1/10)
// }
// if(sum==ver)
// {
//     console.log(`${ver} is an armstrong number`); 
// }
// else
// {
//     console.log(`${ver} is not an armstrong number`);
// }
