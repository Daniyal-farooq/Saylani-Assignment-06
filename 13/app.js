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
var arrSwap = [];
for (var index = 0; index < l; index++) {
    if (index == 0) {
        arrSwap[index] = arr[l - 1];
    }
    else if (index == l - 1) {
        arrSwap[index] = arr[0];
    }
    else {
        arrSwap[index] = arr[index];
    }
}
console.log(arrSwap);
