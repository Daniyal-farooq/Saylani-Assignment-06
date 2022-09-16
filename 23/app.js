var n = prompt("Enter a number to find its factorial");
var fact = 1;
for (var index = n; index >= 1; index--) {
    fact = fact * index;
}
console.log("The factorial is ".concat(fact));
