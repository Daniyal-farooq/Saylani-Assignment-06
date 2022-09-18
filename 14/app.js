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
var counter = 1;
var sum = 0;
while (n > 0) {
    sum += parseInt(n % 10);
    n = parseInt(n / 10);
    counter++;
}
console.log("The sum of digits is ", sum);
