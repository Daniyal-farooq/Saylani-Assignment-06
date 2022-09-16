var n = prompt("Enter a number to find prime numbers within");
var n1 = parseInt(n);
var limit = 2;
while (limit <= n1) {
    var counter = 0;
    var divisor = 2;
    for (divisor = parseInt(2); divisor < limit; divisor++) {
        if (limit % divisor == 0) {
            counter = 1;
        }
    }
    if (counter == 0) {
        console.log(limit);
    }
    limit++;
}
