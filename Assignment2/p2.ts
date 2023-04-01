//Typescript program to find the sum of array elements

function sum(arr:number[]):number
{
    var i:number=0
    var sum:number=0
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    return sum
}

var a:number[]=[23,6,7,4,5,7]
var ret:number=0;
ret=sum(a)
console.log("Addition is "+ret)
