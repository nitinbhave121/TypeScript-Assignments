// Typescript Program to find second maximum element in array

function Maximum(Arr : number[]) : number{

    var first = -1 , second = -1;

    for(let i = 0; i <= Arr.length-1; i++){
        if(Arr[i] > first){
            second = first;
            first = Arr[i];
        }
        else if( Arr[i] > second && Arr[i] != first){
            second = Arr[i];
        }
    }
    return second
}


var num : number[] = [23, 89, 6, 29, 56, 45, 77, 32]

var Ret : number = 0;

Ret = Maximum(num)

console.log("Second Maximum number is "+Ret)