var userValue = prompt("Enter a number to find its digits");
var n = parseInt(userValue);
var displayer = parseInt(userValue);
displayer = parseInt(displayer);
var digits = parseInt(1);
var l = 1;
while (n / 10 >= 1) {
    n = parseInt(n / 10);
    digits = parseInt(digits + 1);
    l++;
}
console.log("The number of digits is ".concat(digits));
console.log("Number of iterations are ".concat(l));
n = parseInt(userValue);
var swap = n.toString(10);
var counter = l - 1;
var arr = [];
while (n >= 1) {
    arr[counter] = parseInt(n % 10);
    n = parseInt(n / 10);
    counter--;
}
console.log(arr); //given numbers stored in an array
var arrSwap = []; //using 2 varialbe to reverse them
var index2 = l - 1;
for (var index = 0; index < l && index2 >= 0; index++) {
    arrSwap[index] = arr[index2];
    index2--;
}
console.log(arrSwap);
var notPal = 0;
for (var index = 0; index < l; index++) {
    if (arr[index] != arrSwap[index]) {
        notPal = 1;
    }
}
if (notPal == 0) {
    console.log("It is a palindrome");
}
else {
    console.log("It is not a palindrome");
}
