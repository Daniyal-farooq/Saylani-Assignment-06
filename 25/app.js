var a = prompt("Enter first number");
var n1 = parseInt(a);
var b = prompt("Enter second number");
var n2 = parseInt(b);
var max = parseInt(n1);
if (n2 > n1) {
    max = parseInt(n2);
}
var index = parseInt(max);
while (1) {
    if (index % n1 == 0 && index % n2 == 0) {
        console.log("The lcm is ".concat(index));
        break;
    }
    else {
        index++;
    }
}
