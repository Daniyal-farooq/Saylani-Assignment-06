var a = prompt("Enter first number");
var b = prompt("Enter second number");
var max = parseInt(a);
if (b > a) {
    max = parseInt(b);
}
for (var index = max; index >= 1; index--) {
    if (a % index == 0 && b % index == 0) {
        console.log("The GCD is ".concat(index));
        break;
    }
}
