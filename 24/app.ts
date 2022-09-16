var a:number = prompt("Enter first number")
var b:number = prompt("Enter second number")
var max:number = parseInt(a)
if (b>a){
    max = parseInt(b)
}
for (let index = max; index >=1; index--) {
    if( a%index==0 && b%index==0)
    {
        console.log(`The GCD is ${index}`);
        break
        
    }
    
}