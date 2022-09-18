var n = prompt("Enter a number to find wether it is Armstrong or not");
var n1;
n1 = parseInt(n);
var ver;
ver = parseInt(n);
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
    console.log("".concat(ver, " is an armstrong number"));
}
else {
    console.log("".concat(ver, " is not an armstrong number"));
}
