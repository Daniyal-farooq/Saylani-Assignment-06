var n:number = prompt("Enter a number to find its factorial")
var fact:number = 1
for (let index = n; index >=1; index--) {
    fact=fact*index
}
console.log(`The factorial is ${fact}`);
