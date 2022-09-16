var n = prompt("Enter a number");
var n1 = parseInt(n);
var counter = 0;
var divisor = 2;
while (divisor < n1) {
    if (n1 % divisor == 0) {
        counter = 1;
        break;
    }
    else {
        divisor++;
    }
}
if (counter == 1) {
    console.log("".concat(n1, " is not a prime number"));
}
else {
    console.log("".concat(n1, " is a prime number"));
}
