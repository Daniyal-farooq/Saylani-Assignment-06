var limit:number = prompt("Enter the limit of the series")
var sum:number = 0
for (let index = 1; index <= limit; index++) {
    sum+=index
}
console.log(`The sum is ${sum}`);
