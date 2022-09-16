var values = prompt("Enter a number to find its digits");
var n = values;
var digits = 1;
while (n / 10 >= 1) {
    n = n / 10;
    digits = digits + 1;
}
console.log("The number of digits is ".concat(digits));
