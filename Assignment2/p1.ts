//Typescript program to find largest in array

function maxi(arr:number[]):number
{
    var i:number=0
    for(i=0;i<arr.length;i++)
    {
        if(arr[0]<arr[i])
        arr[0]=arr[i]
    }

   return arr[0]

}

var a:number[]=[23,89,6,29,56,45,77,32]
var ret:number=0
ret=maxi(a)
console.log("Maximum number is "+ret)
