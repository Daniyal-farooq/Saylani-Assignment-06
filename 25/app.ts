var a:number = prompt("Enter first number")
var n1:number = parseInt(a)
var b:number = prompt("Enter second number")
var n2:number = parseInt(b) 
var max:number  = parseInt(n1)
if(n2>n1)
{
    max=parseInt(n2)
}

var index:number = parseInt(max)
while (1)
{
    if( index%n1==0 && index%n2==0 )
    {
        console.log(`The lcm is ${index}`)
        break
    }
    else
    {
        index++
    }
    
}

