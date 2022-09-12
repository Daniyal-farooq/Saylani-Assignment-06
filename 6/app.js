var limit = prompt("Enter the limit of the series");
var sum = 0;
for (var index = 1; index <= limit; index++) {
    sum += index;
}
console.log("The sum is ".concat(sum));
